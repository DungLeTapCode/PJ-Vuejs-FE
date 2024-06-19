
import Vue from 'vue';
import App from './App.vue';
import router from './plugins/router';
import store from './store'; 
import database from './config/FirebaseConfig';


Vue.config.productionTip = false;


new Vue({
  el: '#app',
  router,
  store, // Khai báo store Vuex
  render: h => h(App)
});
