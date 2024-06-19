<template>
    <div>
        <section>
        <div class="breadcrumb">
            <ul class="breadcrumb_list container">
                <li><router-link to="/" class="breadcrumb_link">TRANG CHỦ</router-link></li>
                <li><span class="breadcrumb_link">></span></li>
                <li><span class="breadcrumb_link">RỎ HÀNG</span></li>
            </ul>
        </div>
     </section>
     <section>
            <div class="section_cart">
                <table width="100%">
                      <thead>
                        <tr>
                            <td>Xóa</td>
                            <td>Hình ảnh</td>
                            <td>Sản phẩm</td>
                            <td>Giá</td>
                            <td>Số lượng</td>
                            <td>Tổng tiền</td>
                        </tr>
                      </thead>
                      <tbody style="margin-top: 30px">
                        <template v-if="items.length">
                            <cart-item v-for="(item) in items"
                    :key="item.id"
                    :cart="item"
                    />
                        </template>
                        <tr v-else class="empty-cart-row">
                     <th colspan="6" style="font-size: 20px;">Bạn chưa thêm gì vào trong rỏ hàng của mình!</th>
                        </tr>
                      </tbody>
                </table>
            </div>
        </section>
         
        <section>
            <div class="cart-add">
                <div class="coupon">
                    <h3>Áp dụng mã giảm giá</h3>
                    <div>
                        <input type="text" placeholder="Nhập mã giảm giá">
                        <button class="normal">Áp dụng</button>
                    </div>
                </div>

                <div class="subtotal">
                    <h3>Tổng tiền thanh toán</h3>
                    <table>
                        <tr>
                            <td>Tổng tiền</td>
                            <td>{{ formattedPrice(sumTotal) }}</td>
                        </tr>
                        <tr>
                            <td>Phí Ship</td>
                            <td>0 VND</td>
                        </tr>
                        <tr>
                            <td><strong>Tổng</strong></td>
                            <td>{{ formattedPrice(sumTotal) }}</td>
                        </tr>
                    </table>
                    <button>Thanh toán</button>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import CartItem from "../components/CartItem.vue"
import { mapState } from 'vuex'
import { mapGetters } from "vuex";
import state from "../store/state";
export default {
    name:'ro-hang',
    components:{
        CartItem
    },
    computed:{
        ...mapState({
            items: state => state.cart.listCarts
            
        }),
        ...mapGetters({
            'sumTotal':'cart/sumTotal'
        })
    },
    methods:{
        formattedPrice(price) {
      if (price !== undefined) {
        let parts = price.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".") + " VND";
      } else {
        return "";
      }
    }
    }
}
</script>

<style>
.empty-cart-row {
  padding: 20px;
  color: rgb(128, 38, 0);
}

</style>
