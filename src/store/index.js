import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  state: {
    beers: [],
    brewers: [],
    sortBeersBy: "name",
    layoutDark: false,
    loadAtOnce: 15,
    columnsNumber: 3,
    error: null,
  },
  getters,
  mutations,
  actions,
});
