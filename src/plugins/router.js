import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

// Import components
import chitietsanpham from '../pages/chitietsanpham.vue';
import trangchu from '../pages/trangchu.vue';
import rohang from '../pages/rohang.vue';
import Blog from '../pages/Blog.vue';
import gioithieu from '../pages/gioithieu.vue';
import lienhe from '../pages/lienhe.vue';
import sanpham from '../pages/sanpham.vue';
import login from '../pages/Login.vue'
import register from '../pages/Register.vue'

const routes = [
  {
    path: '/',
    name: 'trang-chu',
    component: trangchu
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/chitietsanpham/:id',
    name: 'chi-tiet-san-pham',
    component: chitietsanpham
  },
  {
    path:'/rohang',
    name:'ro-hang',
    component:rohang
  },
  {
    path:'/blog',
    name:'blog',
    component:Blog
  },
  {
    path:'/gioithieu',
    name:'gioi-thieu',
    component:gioithieu
  },
  {
    path:'/lienhe',
    name:'lien-he',
    component:lienhe
  },
  {
    path:'/sanpham',
    name:'san-pham',
    component:sanpham
  },
  {
    path: '*',
    redirect: '/'
  },
  {
    path:'/login',
    name:'login',
    component:login
  }
];

const router = new VueRouter({
  mode: 'history', // Use history mode for cleaner URLs
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

export default router;
