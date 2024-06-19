<template>
  <div class="trademarks_box">
    <img :src="'/dist/img/' + products.image" alt="" />
  </div>
</template>

<script>
export default {
  name: "item-track-mark",
  props: {
    products: { type: Object, default: {} },
  },
};
</script>

<style></style>
