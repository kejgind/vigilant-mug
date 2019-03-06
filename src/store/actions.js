import axios from "axios";

export default {
  getAllBeers({ commit }) {
    commit("CLEAR_ERROR");
    axios({
      method: "get",
      url:
        "https://cors-anywhere.herokuapp.com/http://ontariobeerapi.ca/beers/",
      headers: { Origin: "http://ontariobeerapi.ca/beers/" },
    })
      .then(res => {
        const recivedBeers = [...res.data];
        const dirtyBewers = recivedBeers.map(beer => {
          return beer.brewer;
        });
        const brewers = [...new Set(dirtyBewers)].sort();
        commit("SET_BEERS_FROM_API", recivedBeers);
        commit("CREATE_LIST_OF_BREWERS", brewers);
      })
      .catch(error => {
        console.error(error);
        commit("SET_ERROR", error);
      });
  },
};
