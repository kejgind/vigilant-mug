import axios from "axios";
import { priceCounter } from "@/functions/priceCounter";

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
        const addPricePerLitre = recivedBeers.map(beer => {
          const countedPrice = { pricePerLitre: priceCounter(beer) };
          return Object.assign(beer, countedPrice);
        });
        const dirtyBewers = recivedBeers.map(beer => {
          return beer.brewer;
        });
        const brewers = [...new Set(dirtyBewers)].sort();
        commit("SET_BEERS_FROM_API", addPricePerLitre);
        commit("CREATE_LIST_OF_BREWERS", brewers);
      })
      .catch(error => {
        console.error(error);
        commit("SET_ERROR", error);
      });
  },
};
