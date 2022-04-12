import { createStore } from 'vuex'

import axios from "axios";
const api = 'https://aix.salesfire.co.uk/api/searcha';

export default createStore({
  state: {
    searchResults: {},
    showSpinner: false
  },
  mutations: {
    getResults(state, searchResults) {
      const target = Object.assign({}, searchResults);
      state.searchResults = target
    },
    toggleSpinner(state, value) {
      state.showSpinner = value;
    }
  },
  actions: {
    setResults({ commit }, searchString ) {
      commit('toggleSpinner', true);
      if (this.timer) {
          clearTimeout(this.timer);
          this.timer = null;
      }
      this.timer = setTimeout(() => {
        const params = new URLSearchParams();
        params.append('client_id', '3f32397c-21c6-47e5-9ebd-e9865ea03470');
        params.append('query', searchString);
        params.append('limit', 4);
        params.append('page', 1);
  
        axios.get(api, {
          params: params
        })
        .then((response) => {
          commit('toggleSpinner', false);
          commit('getResults', response.data.products);
        })
        .catch((error) => {
            console.log(error)
        })
      }, 1000);
      
    }
  },
  getters: {
    getResults(state) {
      return state.searchResults
    },
    spinnerVisible(state) {
      return state.toggleSpinner
    }
  },
  modules: {
  }
})
