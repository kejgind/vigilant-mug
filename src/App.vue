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
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("getAllBeers");
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
