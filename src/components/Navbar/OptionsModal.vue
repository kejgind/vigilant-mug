<template>
  <div class="modal-card" style="width: auto">
    <header class="modal-card-head">
      <p class="modal-card-title">App Options</p>
    </header>
    <section class="modal-card-body">
      <p class="modal-subtitle is-size-6 has-text-weight-semibold">Theme Layout</p>
      <div class="field">
        <b-switch
          v-model="isSwitched"
          type="is-dark"
        >{{isSwitched ? layoutInfo.dark : layoutInfo.light}}</b-switch>
      </div>

      <p class="modal-subtitle is-size-6 has-text-weight-semibold">How many beers to load at once?</p>
      <b-field>
        <b-radio-button v-model="onceLoaded" native-value="15" type="is-success">
          <span>15</span>
        </b-radio-button>

        <b-radio-button v-model="onceLoaded" native-value="30" type="is-success">
          <span>30</span>
        </b-radio-button>
      </b-field>

      <p class="modal-subtitle is-size-6 has-text-weight-semibold">Sort beers by:</p>
      <b-field>
        <b-select v-model="selectedOption" placeholder="Sort beers by">
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
  name: "AppOptionsModal",
  data() {
    return {
      layoutInfo: {
        light: "Light Theme",
        dark: "Dark Theme"
      },
      isSwitched: false,
      onceLoaded: "15",
      sortOptions: ["name", "price", "type"],
      selectedOption: "name"
    };
  }
};
</script>

<style lang="scss" scoped>
.modal-subtitle {
  margin-bottom: 0.5rem;
}
</style>


