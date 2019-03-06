import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    beers: [],
    brewers: [],
    filterBy: 'name',
    layoutDark: false,
    showItems: 15,
  },
  getters,
  mutations,
  actions,
});
