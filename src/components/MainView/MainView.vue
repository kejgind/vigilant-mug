<template>
  <main class="section">
    <div class="container">
      <div class="columns">
        <BreweryColumn v-for="n in getColumnsNumber" :key="n" :colKey="n"/>
      </div>
    </div>
  </main>
</template>

<script>
import BreweryColumn from "@/components/MainView/BreweryColumn";
export default {
  name: "MainView",
  components: { BreweryColumn },
  computed: {
    getColumnsNumber() {
      return this.$store.getters.columnsNumber;
    }
  }
};
</script>
