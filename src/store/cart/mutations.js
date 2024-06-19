export default{
    CHANGE_QUANTITY: (state, { index,quantity }) =>{
        state.listCarts[index].quantity += quantity
    },
    BUY_ITEM: (state, data) =>{
        state.listCarts.push(data);
    },
    DELETE_ITEM:(state , newListCarts) =>{
         state.listCarts = newListCarts
    },
    UPDATE_QUANTITY: (state, { index,quantity }) =>{
        state.listCarts[index].quantity = quantity }
}