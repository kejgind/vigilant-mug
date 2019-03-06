<template>
  <div class="modal-card" style="width: auto">
    <header class="modal-card-head">
      <p class="modal-card-title">App Options</p>
    </header>
    <section class="modal-card-body">
      <p class="modal-subtitle is-size-6 has-text-weight-semibold">Theme Layout</p>
      <div class="field">
        <b-switch
          v-model="layoutDark"
          type="is-dark"
        >{{layoutDark ? layoutInfo.dark : layoutInfo.light}}</b-switch>
      </div>

      <p class="modal-subtitle is-size-6 has-text-weight-semibold">How many beers to load at once?</p>
      <b-field>
        <b-radio-button v-model="loadAtOnce" native-value="15" type="is-success">
          <span>15</span>
        </b-radio-button>

        <b-radio-button v-model="loadAtOnce" native-value="30" type="is-success">
          <span>30</span>
        </b-radio-button>
      </b-field>

      <p class="modal-subtitle is-size-6 has-text-weight-semibold">Sort beers by:</p>
      <b-field>
        <b-select v-model="sortBeersBy" placeholder="Sort beers by">
          <option v-for="(option, index) in sortOptions" :value="option" :key="index">{{ option }}</option>
        </b-select>
      </b-field>
    </section>

    <footer class="modal-card-foot">
      <button class="button is-dark" type="button" @click="$parent.close()">Close</button>
    </footer>
  </div>
</template>

<script>
export default {
  name: "OptionsModal",
  data() {
    return {
      layoutInfo: {
        light: "Light Theme",
        dark: "Dark Theme"
      },
      sortOptions: ["name", "price", "type"]
    };
  },
  computed: {
    loadAtOnce: {
      get() {
        return this.$store.getters.loadAtOnce.toString(10);
      },
      set(value) {
        this.$store.commit("SET_LOAD_AT_ONCE", parseInt(value));
      }
    },
    sortBeersBy: {
      get() {
        return this.$store.getters.sortBeersBy;
      },
      set(value) {
        this.$store.commit("SET_SORT_BEERS_BY", value);
      }
    },
    layoutDark: {
      get() {
        return this.$store.getters.layoutDark;
      },
      set(value) {
        this.$store.commit("SET_THEME_OPTION", value);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.modal-subtitle {
  margin-bottom: 0.5rem;
}
</style>


