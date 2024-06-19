<template>
  <div>
    <section>
      <div class="home_products_new_container">
        <div class="home_products_new_title">
          <h1>MẪU ĐỒNG BÁN CHẠY</h1>
          <p>
            WatchStore cung cấp đa dạng mẫu đồng hồ theo nhiều phong cách đặc
            sắc khác nhau
          </p>
        </div>
        <div class="home_products_new_list">
          <item-product
            v-for="item in products"
            v-bind:key="item.id"
            v-bind:products="item"
          ></item-product>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
import ItemProduct from "./ItemProduct.vue";
import state from "../store/state";

export default {
  name: "list-item-products",
  components: {
    ItemProduct,
  },
  computed: {
    ...mapState({
      allProducts: "watches",
    }),
    products() {
      // Lấy ra 12 sản phẩm đầu tiên từ mảng allProducts
      return this.allProducts.slice(0, 12);
    },
  },
};
</script>

<style></style>
