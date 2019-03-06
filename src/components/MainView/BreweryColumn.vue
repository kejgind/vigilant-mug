<template>
  <section class="column brewery-column">
    <b-field>
      <b-select v-model="selectedBrewery">
        <option disabled value>Select brewery</option>
        <option v-for="(brewery, index) in breweries" :value="brewery" :key="index">{{ brewery }}</option>
      </b-select>
    </b-field>
    <div v-if="selectedBrewery">
      <h2 class="title is-5">List of beers from {{selectedBrewery}}</h2>
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
  name: "Brewery Column",
  components: { BeerCard },
  data() {
    return {
      breweries: ["Coors UK", "Molson", "G A Miller"],
      selectedBrewery: "",
      loading: false
    };
  },
  methods: {
    loadMore() {
      return;
    }
  }
};
</script>

<style lang="scss" scoped>
.brewery-column {
  box-shadow: 1px 1px 5px rgb(244, 244, 244);
}
</style>

