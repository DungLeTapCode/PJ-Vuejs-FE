export default{
    sumTotal: state => {
        let { listCarts } = state;
        let totalPrice = 0;
        for(let i =0 ;i<listCarts.length;i++)
            {
                totalPrice += state.listCarts[i].quantity*state.listCarts[i].actItem.price
            }

            return totalPrice
    }
}