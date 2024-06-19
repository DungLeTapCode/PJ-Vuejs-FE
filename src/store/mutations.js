export default{
    setFilteredProducts(state, products) {
        state.filteredProducts = products;
        
      },
      HANDLE_SEARCH(state,strSearch){
        state.strSearch = strSearch
      }
}