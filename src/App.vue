<template>
  <div id="app" :class="[themeIsDark? 'has-background-grey-dark' : '']">
    <Navbar/>
    <MainView/>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar";
import MainView from "@/components/MainView/MainView";
export default {
  name: "app",
  components: { Navbar, MainView },
  beforeCreate() {
    // On page/app reload check session storage and mutate vuex store is session storage for this page/app exists
    this.$store.commit("INITIALIZE_STORE");
  },
  created() {
    // On page/app start check if store is empty, and if so get data from API
    if (this.$store.getters.allBeers.length === 0) {
      this.$store.dispatch("getAllBeers");
    }
  },
  computed: {
    themeIsDark() {
      return this.$store.getters.layoutDark;
    }
  }
};
</script>

<style lang="scss">
#app {
  min-height: 100vh;
}
</style>
