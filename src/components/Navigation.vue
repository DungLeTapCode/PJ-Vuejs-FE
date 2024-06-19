<template>
  <div>
    <section>
      <div class="header_container">
        <div class="header_logo">
          <router-link to="/trangchu" exact class="logo_links"
            >Watch<span>.Store</span></router-link
          >
        </div>
        <div class="header_nav_menu">
          <ul class="nav_list">
      <li
        class="nav_item"
        v-for="(item, index) in navItems"
        :key="index"
        :class="{ active: isActive(item.path) }"
      >
        <router-link :to="item.path" class="nav_links">{{ item.label }}</router-link>
      </li>
    </ul>
          <div class="header_search">
            <input type="search" placeholder="Tìm kiếm" class="form_input" />
            <button class="search_btn">
              <i class="ri-search-line"></i>
            </button>
          </div>
          <i id="close-menu" class="ri-close-line"></i>
        </div>
        <div class="header_user_shopcart">
          <router-link to="/login" class="header_user"><i class="ri-user-line"></i></router-link>
          <router-link to="/rohang" class="header_cart"
            ><i class="ri-shopping-bag-line"></i
          ></router-link>
        </div>
        <div class="mobile">
          <router-link to="/login" class="header_user"><i class="ri-user-line"></i></router-link>
          <router-link to="/rohang" class="header_cart"
            ><i class="ri-shopping-bag-line"></i
          ></router-link>
          <i id="bar" class="ri-menu-line"></i>
        </div>
      </div>
    </section>
  
  </div>
</template>

<script>
export default {
  name: "navigation",
  data() {
    return {
      navItems: [
        { path: '/trangchu', label: 'TRANG CHỦ' },
        { path: '/gioithieu', label: 'GIỚI THIỆU' },
        { path: '/sanpham', label: 'SẢN PHẨM' },
        { path: '/blog', label: 'BLOG' },
        { path: '/lienhe', label: 'LIÊN HỆ' }
      ],
    };
  },
  methods: {
    isActive(path) {
      return this.$route.path === path || (this.$route.path === '/' && path === '/trangchu');
    }
  }
};
</script>

<style></style>
