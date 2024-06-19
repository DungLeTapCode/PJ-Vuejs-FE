<template>
  
    <div class="blog_small_box">
      <div class="box_small_img">
        <img :src="product.image" alt="" />
      </div>
      <div class="box_small_text">
        <p>{{ product.title }}</p>
        <span>{{ product.date }}</span>
      </div>
    </div>

</template>

<script>
export default {
  name: "item-blog-small",
  props:{
    product:{ type:Object,default:{} }
  }
  
};
</script>

<style></style>
