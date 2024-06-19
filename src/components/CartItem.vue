<template>
  <tr>
    <td>
      <a v-on:click="handleDelete"><i class="ri-close-circle-line"></i></a>
    </td>
    <td><img :src="'/dist/img/' + product.image" alt="" /></td>
    <td class="title-cart-item">{{ product.name }}</td>
    <td>{{ formattedPrice(product.price) }}</td>
    <td>
      <input
        type="number"
        v-model.number="cart.quantity"
        @change="updateQuantity"
        min="1"
      />
    </td>
    <td>{{ formattedPrice(product.price * cart.quantity) }}</td>
  </tr>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "cart-item",
  props: {
    cart: { type: Object, default: "" },
  },
  computed: {
    product() {
      return this.cart.actItem;
    },
  },
  methods: {
    ...mapActions({
      actDeleteItem: "cart/actDeleteItem",
      actUpdateItem: "cart/actUpdateItem",
    }),
    formattedPrice(price) {
      if (price !== undefined) {
        let parts = price.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".") + " VND";
      } else {
        return "";
      }
    },
    handleDelete() {
      if (confirm("Bạn có muốn xóa sản phẩm này khỏi rỏ hàng không ?")) {
        this.actDeleteItem(this.cart);
      }
    },

    updateQuantity() {
      let obj = {
        actItem: this.product,
        quantity: parseInt(this.cart.quantity),
      };
      this.actUpdateItem(obj);
    },
  },
};
</script>

<style>
.title-cart-item {
  width: 150px; /* Chiều rộng giới hạn của phần tử */
  white-space: nowrap; /* Ngăn văn bản xuống dòng */
  overflow: hidden; /* Ẩn văn bản vượt quá chiều dài phần tử */
  text-overflow: ellipsis;
}
.ri-close-circle-line {
  cursor: pointer;
}
</style>
