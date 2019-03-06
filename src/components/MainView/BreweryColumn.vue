<template>
  <section class="column brewery-column">
    <b-field>
      <b-select v-model="selectedBrewery">
        <option disabled value>Select brewery</option>
        <option v-for="(brewery, index) in breweries" :value="brewery" :key="index">{{ brewery }}</option>
      </b-select>
    </b-field>
    <div v-if="selectedBrewery">
      <h2 class="is-size-5 brewery-title">
        List of beers from
        <strong>{{selectedBrewery}}</strong>
      </h2>
      <BeerCard/>
      <button
        class="button is-warning"
        :class="{'is-loading': loading}"
        :disabled="loading"
        @click="loadMore()"
      >Show more beers</button>
    </div>
  </section>
</template>

<script>
import BeerCard from "@/components/MainView/BeerCard";
export default {
  name: "BreweryColumn",
  components: { BeerCard },
  data() {
    return {
      selectedBrewery: "",
      beersByBrewery: [],
      loading: false
    };
  },
  methods: {
    loadMore() {
      return;
    },
    getBeersByBrewery() {
      if (this.selectedBrewery) {
        this.$store.dispatch("getBeersByBrewery", this.selectedBrewery);
      }
    }
  },
  computed: {
    breweries() {
      return this.$store.getters.allBrewers;
    },
    onceLoaded() {
      return this.$store.getters.loadAtOnce;
    }
  }
};
</script>

<style lang="scss" scoped>
.brewery-column {
  box-shadow: 1px 1px 5px rgb(244, 244, 244);
}
.brewery-title {
  height: 60px;
  line-height: 1.2;
}
</style>

