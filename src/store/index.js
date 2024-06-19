import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import getters from './getters';
import mutations from './mutations';
import state from './state';
import modulesCart from './cart';
import actions from './actions';

const store = new Vuex.Store({
  namespaced: true,
  state,
  actions,
  mutations,
  getters,

  modules:{
    cart: modulesCart
    
  }
});


export default store;
