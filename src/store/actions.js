// Trong file actions.js

export default {
  filterProducts({ commit, state }, name) {
    let filtered;
    if (name) {
      filtered = state.watches.filter(product => product.gender === name);
    } else {
      filtered = state.watches;
    }
    commit('setFilteredProducts', filtered);
  },
  sortByPrice({ commit, state }, order) {
    let sorted;
    if (order === 'ascending') {
      sorted = state.filteredProducts.slice().sort((a, b) => a.price - b.price);
    } else if (order === 'descending') {
      sorted = state.filteredProducts.slice().sort((a, b) => b.price - a.price);
    } else {
      sorted = state.filteredProducts;
    }
    commit('setFilteredProducts', sorted);
  },
  handleSearch({ commit }, strSearch){
    commit('HANDLE_SEARCH',strSearch);
  }
};
