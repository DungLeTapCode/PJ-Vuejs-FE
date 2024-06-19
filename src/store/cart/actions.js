
export default{
    actBuyItem({ commit, state },data){
        
        const index = state.listCarts.findIndex(function(cart)
        {
           return cart.actItem.id === data.actItem.id
        }
 );
         if(index === -1){
            commit('BUY_ITEM',data)
         }
        else{
            let quantity = data.quantity
            commit('CHANGE_QUANTITY',{ index,quantity })
        }
    },
    actDeleteItem({ commit,state }, cart){
        var newListCarts = state.listCarts.filter( item => {
            return item.actItem.id !== cart.actItem.id
        })
        commit('DELETE_ITEM',newListCarts)
        
    },
    actUpdateItem({ commit, state },data){
        
        const index = state.listCarts.findIndex(function(cart)
        {
           return cart.actItem.id === data.actItem.id
        }
 );
         if(index === -1){
            commit('BUY_ITEM',data)
         }
        else{
            let quantity = data.quantity
            commit('UPDATE_QUANTITY',{ index,quantity })
        }
    },
    // actUpdateQuantity
}