<template>
  <main class="section">
    <div class="container">
      <div class="columns">
        <BreweryColumn/>
        <BreweryColumn/>
        <BreweryColumn/>
      </div>
    </div>
  </main>
</template>

<script>
import BreweryColumn from "@/components/MainView/BreweryColumn";
export default {
  name: "MainView",
  components: { BreweryColumn }
};
</script>
