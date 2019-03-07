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
  methods: {
    loadMore() {
      const nextBeersBatchToLoad = this.allBeersByBrewery.splice(
        0,
        this.loadAtOnce
      );
      this.showedBeersByBrewery = [
        ...this.showedBeersByBrewery,
        ...nextBeersBatchToLoad
      ];
      this.beersByBreweryCountAll = this.allBeersByBrewery.length;
      this.beersByBreweryCountShowed = this.showedBeersByBrewery.length;

      this.beersByBreweryCountAll > 0
        ? (this.showButton = true)
        : (this.showButton = false);
    },
    getBeersByBrewery() {
      if (!this.selectedBrewery) {
        return;
      }
      const allBeers = this.$store.getters.allBeers;
      const filteredBeersByBrewery = allBeers.filter(beer => {
        return beer.brewer === this.selectedBrewery;
      });
      this.allBeersByBrewery = filteredBeersByBrewery.sort(
        sorter(this.sortBeersBy)
      );
      this.showedBeersByBrewery = this.allBeersByBrewery.splice(
        0,
        this.loadAtOnce
      );

      this.beersByBreweryCountAll = this.allBeersByBrewery.length;
      this.beersByBreweryCountShowed = this.showedBeersByBrewery.length;

      this.beersByBreweryCountAll > 0
        ? (this.showButton = true)
        : (this.showButton = false);
    }
  },
  computed: {
    breweries() {
      return this.$store.getters.allBrewers;
    },
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
    sortBeersBy() {
      return this.showedBeersByBrewery.sort(sorter(this.sortBeersBy));
    },
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

