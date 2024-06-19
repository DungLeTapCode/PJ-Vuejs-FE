<template>
    <div>
        <router-link :to="{ name:'chi-tiet-san-pham', params: { id: products.id }}">
        <div class="produces_box">
    <img v-bind:src="'/dist/img/' + products.image" alt="">
    <div class="des">
    <h5>{{ products.name }}</h5>
     <div class="star">
        <i class="ri-star-s-fill"></i>
        <i class="ri-star-s-fill"></i>
        <i class="ri-star-s-fill"></i>
        <i class="ri-star-s-fill"></i>
        <i class="ri-star-s-fill"></i>
     </div>
     <h4><del>{{ formattedPrice(products.price) }}</del></h4>
     <h4>{{ formattedPrice(products.price) }}</h4>
    </div>
    <a href="#"><i class="ri-shopping-bag-fill"></i></a>
     </div>
</router-link>

    </div>
</template>

<script>
export default {
   name:'item-product',
   props:{
      
      products:{ type:Object,default:{} }
   },
   methods: {
    formattedPrice(price) {
      if (price !== undefined) {
        let parts = price.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".") + " VND";
      } else {
        return "";
      }
    }
  },
}
</script>

<style>

</style>
