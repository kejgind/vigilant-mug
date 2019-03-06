export default {
  SET_ERROR(state, payload) {
    state.error = payload;
  },
  CLEAR_ERROR(state) {
    state.error = null;
  },
  SET_BEERS_FROM_API(state, payload) {
    state.beers = payload;
  },
  CREATE_LIST_OF_BREWERS(state, payload) {
    state.brewers = payload;
  },
  SET_LOAD_AT_ONCE(state, payload) {
    state.loadAtOnce = payload;
  },
  SET_SORT_BEERS_BY(state, payload) {
    state.sortBeersBy = payload;
  },
  SET_THEME_OPTION(state, payload) {
    state.layoutDark = payload;
  },
};
