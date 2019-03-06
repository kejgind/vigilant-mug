<template>
  <nav class="navbar is-light" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand is-size-5 is-uppercase has-text-weight-bold">
        <p class="navbar-item">Vigilant-mug</p>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <button class="button is-info" @click="showModal()">Options</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import OptionsModal from "./OptionsModal";
export default {
  name: "Navbar",
  data() {
    return {};
  },
  methods: {
    showModal() {
      this.$modal.open({
        parent: this,
        component: OptionsModal,
        hasModalCard: true
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>


