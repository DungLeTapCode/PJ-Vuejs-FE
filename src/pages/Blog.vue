<template>
  <div>
    <section>
      <div class="breadcrumb">
        <ul class="breadcrumb_list container">
          <li>
            <router-link to="/trangchu" class="breadcrumb_link"
              >TRANG CHỦ</router-link
            >
          </li>
          <li><span class="breadcrumb_link">></span></li>
          <li><span class="breadcrumb_link">TIN TỨC</span></li>
        </ul>
      </div>
    </section>

    <section>
      <div class="section_blog_container">
        <div class="blog_title">
          <h2>Tin tức</h2>
        </div>
        <div class="blog_content">
          <div class="blog_content_main">
            <item-blog
              v-for="item in product"
              v-bind:key="item.id"
              v-bind:products="item"
            ></item-blog>
          </div>
          <div class="blog_content_small_list">
            <div class="blog_content_small">
              <div class="blog_small_title">
                <h5>Bài viết gần đây</h5>
                <item-blog-small 
                v-for="item in product2"
                v-bind:key="item.id"
                v-bind:product="item"
                
                ></item-blog-small>
              </div>
              <div class="blog_content_small">
                <div class="blog_small_title">
                  <h5>Bài viết xem nhiều nhất</h5>
                  <item-blog-small 
                v-for="item in product2"
                v-bind:key="item.id"
                v-bind:product="item"
                
                ></item-blog-small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ItemBlog from "../components/ItemBlog.vue";
import ItemBlogSmall from "../components/ItemBlogSmall.vue";
import { mapState } from "vuex";
export default {
  name: "blog",
  components: {
    ItemBlog,
    ItemBlogSmall,
  },
  computed: {
    ...mapState({
        product: state => state.blogs,
      product2: state => state.smallBlogs
    }),
  },
};
</script>

<style></style>
