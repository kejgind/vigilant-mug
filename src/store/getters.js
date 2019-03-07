export default {
  allBeers(state) {
    return state.beers;
  },
  allBrewers(state) {
    return state.brewers;
  },
  loadAtOnce(state) {
    return state.loadAtOnce;
  },
  sortBeersBy(state) {
    return state.sortBeersBy;
  },
  layoutDark(state) {
    return state.layoutDark;
  },
  columnsNumber(state) {
    return state.columnsNumber;
  },
  loadSelectedBrewers(state) {
    return state.selectedBrewers;
  },
};
