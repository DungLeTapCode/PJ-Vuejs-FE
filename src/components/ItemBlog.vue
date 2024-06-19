<template>
  <div>
    <div class="content_main_box">
      <div class="box_main_img">
        <img :src="'/dist/' + products.image" alt="" />
      </div>
      <div class="box_main_text">
        <h5>
          {{ products.title }}
        </h5>
        <span>{{ products.date }}</span>
        <p>
          {{ products.content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'item-blog',
  props: {
  products: {
    type: Object,
    default: {}
  }
}

};
</script>

<style></style>
