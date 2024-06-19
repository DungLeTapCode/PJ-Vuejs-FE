<template>
  <section>
    <div class="section_trademarks">
      <div class="trademarks_title">
        <h1>THƯƠNG HIỆU NỔI BẤT</h1>
        <p>
          WatchStore đang có sẵn hơn 10.000+ sản phẩm đến từ 12 thương hiệu nổi
          tiếng
        </p>
      </div>
      <div class="trademarks_list">
        <item-track-mark
          v-for="(item, index) in trackMarkList"
          :key="index"
          v-bind:products="item"
        >
        </item-track-mark>
      </div>
    </div>
  </section>
</template>

<script>
import ItemTrackMark from "./ItemTrackMark.vue";
import { mapState } from "vuex";
export default {
  name: "list-track-mark",
  computed: {
    ...mapState(["trackMarkList"]),
  },
  components: {
    ItemTrackMark,
  },
};
</script>

<style></style>
