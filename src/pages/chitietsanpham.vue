<template>
  <div>
    <section>
      <div class="breadcrumb">
        <ul class="breadcrumb_list container">
          <li><router-link to="/" class="breadcrumb_link">TRANG CHỦ</router-link></li>
          <li><span class="breadcrumb_link">></span></li>
          <li><span class="breadcrumb_link">CHI TIẾT SẢN PHẨM</span></li>
        </ul>
      </div>
    </section>

    <section>
      <div id="prodetails" class="section_p1">
        <div class="single_pro_image">
          <img :src="currentImage" width="100%" id="MainImg" alt="" />
          <div class="small_img_group">
            <div
              class="small_img_col"
              v-for="(img, index) in smallImages"
              :key="index"
            >
              <img
                :src="img"
                width="100%"
                class="small_img"
                alt=""
                v-on:click="handleImage(img)"
              />
            </div>
          </div>
        </div>
        <div class="single_pro_details">
          <h6>SẢN PHẨM</h6>
          <h5>{{ product.name }}</h5>
          <div class="gia">
            <p>GIÁ:</p>
            <h2>{{ formattedPrice(product.price) }}</h2>
          </div>
          <div class="select_1">
            <select>
              <option>Select Size</option>
              <option>23-25mm</option>
              <option>26-29mm</option>
              <option>34-36mm</option>
              <option>42-45mm</option>
            </select>
            <input v-model="quantity" type="number" value="1" min="1" />
            <router-link v-if="product.inStock" to="/rohang">
              <button v-on:click="handleBuyItem">THÊM VÀO RỎ</button>
            </router-link>
            <button v-else id="btndisabled">Hết Hàng</button>
          </div>
          <p v-if="product.inStock" style="color: green; font-weight: 600">
            Sản phẩm còn hàng!
          </p>
          <p v-else style="color: red; font-weight: 600">Sản phẩm hết hàng!</p>
          <span>{{ product.description }}</span>
        </div>
      </div>
      <div class="product_details_content">
        <div class="product_details_btn">
          <button class="mo_ta active_details">MÔ TẢ</button>
          <button class="mo_ta">ĐÁNH GIÁ</button>
        </div>
        <div class="details_content active_details">
          <div class="details_title">
            <h5>MÔ TẢ SẢN PHẨM</h5>
          </div>
          <div class="content_detail">
            <div>
              <p>
                Là sự kết hợp hài hòa giữa kiểu dáng và chất lượng, những chiếc
                đồng hồ nam CURREN xứng đáng là một lựa chọn của phái mạnh.
                Chiếc đồng hồ nam CURREN được thiết kế để dành riêng cho những
                chàng trai trẻ trung, năng động. Sở thiết kế mặt tròn nam tính
                và tinh tế, các chi tiết trang trí như vạch chia giờ, kim đồng
                hồ... được bố trí một cách hài hòa, đạt tính thẩm mỹ cao, sản
                phẩm góp phần tạo nên phong cách riêng cho bạn. Hơn thế cùng với
                tính ứng dụng cao, bạn có thể kết hợp chiếc đồng hồ nam CURREN
                này với những bộ trang phục khác nhau để tạo nên phong cách
                riêng đầy cuốn hút.
              </p>
            </div>
            <div>
              <p>
                THÔNG SỐ KỸ THUẬT<br />
                ✔ Thương hiệu: CURREN<br />
                ✔ Kiểu máy: Quartz<br />
                ✔ Dành cho: nam<br />
                ✔ Chất liệu vỏ: Thép không gỉ<br />
                ✔ Chất liệu mặt trước: Kính cứng<br />
                ✔ Chất liệu dây: Da lộn<br />
                ✔ Kích thước mặt: 54mm<br />
                ✔ Độ dày mặt: 14mm<br />
                ✔ Chiều dài dây: 240mm<br />
                ✔ Độ rộng dây: 24mm<br />
                ✔ Số kim: 3, có lịch<br />
                ✔ Độ chịu nước: 3ATM<br />
                ✔ Năng lượng sử dụng: Pin<br />
                ✔ Bảo hành: Bảo hành đồng hồ 12 tháng
              </p>
            </div>
            <div>
              <p>
                📌 GỢI Ý SỬ DỤNG VÀ BẢO DƯỠNG<br />
                ❌ Nên tránh:<br />
                - Va chạm và tiếp xúc với chất ăn mòn, nhiệt độ cao hoặc từ
                trường mạnh.<br />
                - Sử dụng bất kì dung môi, chất làm sạch, chất tẩy công nghiệp,
                chất dính, sơn hoặc các chất xịt mỹ phẩm.<br />
                - Đeo đồng hồ cùng các vòng đeo tay vì dễ tạo vết xước hay làm
                hỏng mặt đồng hồ.<br />
                - Chỉnh nút chỉnh giờ khi đồng hồ bị ướt.<br />
                - Để đồng hồ nơi nhiệt độ thay đổi đột ngột.<br />
                - Sử dụng, nhấn các nút hoặc cài đặt ở dưới nước.<br />

                Nên làm:<br />
                - Làm sạch đồng hồ theo định kỳ vải mềm hơi ẩm để gia tăng tuổi
                thọ đồng hồ.<br />
                - Nếu xuất hiện hơi nước ngưng tụ, cần mang đồng hồ đến Trung
                Tâm Dịch Vụ Khách Hàng của các hãng càng nhanh càng tốt để giảm
                thiểu hư hỏng bên trong.<br />
                - Thay pin khi đồng hồ chạy sai giờ hoặc chuyển động kim giây
                không đều vì rò rỉ điện do pin chết có thể gây ra hỏng hóc
                nghiêm trọng cho đồng hồ.
              </p>
            </div>
          </div>
        </div>
        <div class="details_content">
          <h3>Đánh giá</h3>
          <p>Chưa có đánh giá nào</p>
          <div class="form_judge">
            <h5>Đánh giá của bạn</h5>
            <div class="star_judge">
              <div class="star_star active_star">
                <i class="ri-star-fill"></i>
              </div>
              <span>|</span>
              <div class="star_star">
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
              </div>
              <span>|</span>
              <div class="star_star">
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
              </div>
              <span>|</span>
              <div class="star_star">
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
              </div>
              <span>|</span>
              <div class="star_star">
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
                <i class="ri-star-fill"></i>
              </div>
            </div>
            <p>Nhận xết của bạn</p>
            <label for="avatar">Chọn hình ảnh:</label>
            <input type="file" id="avatar" accept="image/png,image/jpg" />
            <textarea
              name="comment"
              id="comment"
              cols="130"
              rows="10"
            ></textarea>
            <button>GỬI ĐI</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navigation from "../components/Navigation.vue";
import CompHeader from "../components/CompHeader.vue";
import CompFooter from "../components/CompFooter.vue";
import ListItemNew from "../components/ListItemNew.vue";
import ListTrackMark from "../components/ListTrackMark.vue";
import ListItemProducts from "../components/ListItemProducts.vue";
import CompBlog from "../components/CompBlog.vue";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "App",
  data() {
    return {
      smallImages: [
        "/dist/img/p1.png",
        "/dist/img/p2.png",
        "/dist/img/p3.png",
        "/dist/img/p4.png",
      ],
      currentImage: "",
      quantity: 1,
      //
    };
  },
  components: {
    Navigation,
    CompHeader,
    CompFooter,
    ListItemNew,
    ListTrackMark,
    ListItemProducts,
    CompBlog,
  },
  computed: {
    ...mapGetters(["getProductById"]),
    product() {
      return this.getProductById(this.$route.params.id);
    },
    defaultImage() {
      // Sử dụng getter để lấy giá trị mặc định của hình ảnh từ store hoặc từ các trạng thái khác trong ứng dụng của bạn
      return "/dist/img/" + this.product.image;
    },
  },
  created() {
    // Thiết lập giá trị mặc định cho currentImage khi component được tạo
    this.currentImage = this.defaultImage;
  },
  methods: {
    ...mapActions({
      actBuyItem: "cart/actBuyItem",
    }),
    formattedPrice(price) {
      if (price !== undefined) {
        let parts = price.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".") + " VND";
      } else {
        return "";
      }
    },
    handleImage(img) {
      this.currentImage = img;
    },
    handleBuyItem(e) {
      let data = {
        actItem: this.product,
        quantity: parseInt(this.quantity),
      };
      this.actBuyItem(data);
      // this.$store.dispatch('cart/actBuyItem',data);
    },
  },
};
</script>

<style>
#btndisabled {
  cursor: not-allowed;
}
</style>
