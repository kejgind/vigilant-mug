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
  ADD_EMPTY_SELECTED_BREWERY(state, payload) {
    if (state.selectedBrewers.length === state.columnsNumber) {
      return;
    }
    state.selectedBrewers = [...state.selectedBrewers, payload];
  },
  SET_SELECTED_BREWERY(state, payload) {
    state.selectedBrewers.map(brewer =>
      brewer.colId === payload.colId
        ? (brewer.selectedBrewer = payload.selectedBrewer)
        : ""
    );
  },
  INITIALIZE_STORE(state) {
    if (sessionStorage.getItem("store")) {
      this.replaceState(
        Object.assign(state, JSON.parse(sessionStorage.getItem("store")))
      );
    }
  },
};
