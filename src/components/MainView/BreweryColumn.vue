<template>
  <section class="column" :class="[themeIsDark ? 'brewery-column-dark' : 'brewery-column-light']">
    <b-field>
      <b-select v-model="selectedBrewery" @click.native="getBeersByBrewery()">
        <option disabled value>Select brewery</option>
        <option v-for="brewery in breweries" :value="brewery" :key="brewery">{{ brewery }}</option>
      </b-select>
    </b-field>
    <div v-if="selectedBrewery">
      <h2 class="is-size-5 brewery-title" :class="[themeIsDark ? 'has-text-light' : '']">
        List of beers from
        <strong :class="[themeIsDark ? 'has-text-light' : '']">{{selectedBrewery}}</strong>
      </h2>
      <BeerCard v-for="beer in showedBeersByBrewery" :key="beer.beer_id" :beer="beer"/>
      <button v-if="showButton" class="button is-warning" @click="loadMore()">Show more beers</button>
    </div>
  </section>
</template>

<script>
import BeerCard from "@/components/MainView/BeerCard";
import { sorter } from "@/functions/sorter";
export default {
  name: "BreweryColumn",
  components: { BeerCard },
  props: { colKey: Number },
  data() {
    return {
      selectedBrewery: "",
      allBeersByBrewery: [],
      showedBeersByBrewery: [],
      beersByBreweryCountAll: null,
      beersByBreweryCountShowed: null,
      showButton: true
    };
  },
  created() {
    // Action to create and add object in global store for each column in "state.selectedBrewers" containing column Id and name of selected brewer, for use with session storage
    this.$store.dispatch("addEmptyBrewery", {
      colId: this.colKey,
      selectedBrewer: this.selectedBrewery
    });
    // Getter to grab selected brewer for each column
    this.$store.getters.loadSelectedBrewers.filter(brewer =>
      brewer.colId === this.colKey
        ? (this.selectedBrewery = brewer.selectedBrewer)
        : ""
    );
    this.getBeersByBrewery();
  },
  methods: {
    // Method responsible for load more beers from brewer
    loadMore() {

      // create array with next batch of beers that will be loaded on "load more beers" button click
      const nextBeersBatchToLoad = this.allBeersByBrewery.splice(
        0,
        this.loadAtOnce
      );

      // add this batch to currently loaded and showed beers
      this.showedBeersByBrewery = [
        ...this.showedBeersByBrewery,
        ...nextBeersBatchToLoad
      ];

      // count beers in each array (showed on screen) and left to show
      this.beersByBreweryCountAll = this.allBeersByBrewery.length;
      this.beersByBreweryCountShowed = this.showedBeersByBrewery.length;

      // check if 'load more beers' button should be visible
      this.beersByBreweryCountAll > 0
        ? (this.showButton = true)
        : (this.showButton = false);
    },
    // Method responsible for grabbing all beers by selected brewer and displaying them accordingly to options set in main app option modal (sort, how many to show on initial load)
    getBeersByBrewery() {
      if (!this.selectedBrewery) {
        return;
      }

      // Save information of selected brewer for each column in vuex store
      this.$store.dispatch("addSelectedBrewer", {
        colId: this.colKey,
        selectedBrewer: this.selectedBrewery
      });

      // get all beers from vuex store
      const allBeers = this.$store.getters.allBeers;

      // filter beers to show only those from selected brewer
      const filteredBeersByBrewery = allBeers.filter(beer => {
        return beer.brewer === this.selectedBrewery;
      });

      // sort beers from brewer by option set in global app options modal
      this.allBeersByBrewery = filteredBeersByBrewery.sort(
        sorter(this.sortBeersBy)
      );

      // create array of beers show in column on start (no more than value set in global options modal 15 or 30), if there are more than value set in options the remaining beers will be left in local state 'allBeersByBrewery'
      this.showedBeersByBrewery = this.allBeersByBrewery.splice(
        0,
        this.loadAtOnce
      );

      // count beers in each array (showed on screen) and left to show
      this.beersByBreweryCountAll = this.allBeersByBrewery.length;
      this.beersByBreweryCountShowed = this.showedBeersByBrewery.length;

      // check if 'load more beers' button should be visible
      this.beersByBreweryCountAll > 0
        ? (this.showButton = true)
        : (this.showButton = false);
    }
  },
  computed: {
    // grab array of all brewers from vuex store
    breweries() {
      return this.$store.getters.allBrewers;
    },
    // get what options are set in global options modal
    sortBeersBy() {
      return this.$store.getters.sortBeersBy;
    },
    loadAtOnce() {
      return this.$store.getters.loadAtOnce;
    },
    themeIsDark() {
      return this.$store.getters.layoutDark;
    }
  },
  watch: {
    // watch for changes in sort option set in global options modal and on value change sort displayed beers
    sortBeersBy() {
      return this.showedBeersByBrewery.sort(sorter(this.sortBeersBy));
    },
    // update value of 'beersByBreweryCountAll' in local state
    allBeersByBrewery() {
      return this.beersByBreweryCountAll.length;
    }
  }
};
</script>

<style lang="scss" scoped>
.brewery-column-light {
  box-shadow: 1px 1px 5px rgb(244, 244, 244);
}
.brewery-column-dark {
  box-shadow: 1px 1px 5px rgb(53, 53, 53);
}
.brewery-title {
  height: 60px;
  line-height: 1.2;
}
</style>

