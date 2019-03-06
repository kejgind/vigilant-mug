<template>
  <div id="app">
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
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("getAllBeers");
  }
};
</script>

<style lang="scss">
</style>
