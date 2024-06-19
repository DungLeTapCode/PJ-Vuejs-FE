<template>
        <div id="App">
      <navigation></navigation>
      <router-view></router-view>
      <comp-footer></comp-footer>
            
    </div>

</template>

<script>


  import Navigation from './components/Navigation.vue';
  import CompHeader from './components/CompHeader.vue';
  import CompFooter from './components/CompFooter.vue';
  import ListItemNew from './components/ListItemNew.vue';
  import ListTrackMark from './components/ListTrackMark.vue';
  import ListItemProducts from './components/ListItemProducts.vue';
  import CompBlog from './components/CompBlog.vue';
  import Login from './pages/Login.vue';
 

export default {
    name: 'App',
    components: {
      Navigation,
      CompHeader,
      CompFooter,
      ListItemNew,
      ListTrackMark,
      ListItemProducts,
      CompBlog,
      Login
    }  
}
</script>

<style>

</style>
