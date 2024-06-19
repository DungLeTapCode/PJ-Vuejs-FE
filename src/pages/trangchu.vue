<template>
    <div id="App">
  <comp-header></comp-header>
  <list-item-new></list-item-new>
  <list-track-mark></list-track-mark>
  <list-item-products></list-item-products>
  <comp-blog></comp-blog>
  
</div>

</template>

<script>


import Navigation from '../components/Navigation.vue';
import CompHeader from '../components/CompHeader.vue';
import CompFooter from '../components/CompFooter.vue';
import ListItemNew from '../components/ListItemNew.vue';
import ListTrackMark from '../components/ListTrackMark.vue';
import ListItemProducts from '../components/ListItemProducts.vue';
import CompBlog from '../components/CompBlog.vue';


export default {
name: 'trang-chu',
components: {
  Navigation,
  CompHeader,
  CompFooter,
  ListItemNew,
  ListTrackMark,
  ListItemProducts,
  CompBlog
}  
}
</script>

<style>

</style>
