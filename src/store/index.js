import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

const sessionState = store => {
  store.subscribe((mutation, state) => {
    // Store the state object as a JSON string
    sessionStorage.setItem("store", JSON.stringify(state));
  });
};

export const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  state: {
    beers: [],
    brewers: [],
    sortBeersBy: "name",
    layoutDark: false,
    loadAtOnce: 15,
    columnsNumber: 3,
    error: null,
    selectedBrewers: [],
  },
  getters,
  mutations,
  actions,
  plugins: [sessionState],
});
