<template>
  <div>
    <section>
      <div class="breadcrumb">
        <ul class="breadcrumb_list container">
          <li>
            <router-link to="/" class="breadcrumb_link">TRANG CHỦ</router-link>
          </li>
          <li><span class="breadcrumb_link">></span></li>
          <li><span class="breadcrumb_link">SẢN PHẨM</span></li>
        </ul>
      </div>
    </section>
    <div class="home_products_2">
      <div class="tab_btns_list">
        <span
          v-for="(tab, index) in tabs"
          :key="index"
          :class="['tab_btn', { 'active-tab': activeTab === index }]"
          @click="setActiveTab(tab, index)"
        >
          {{ tab }}
        </span>
      </div>
      <div class="paste-button">
        <button class="button">
          Sắp xếp theo giá : <span class="order-name">{{ orderName }}</span> ▼
        </button>
        <div class="dropdown-content">
          <a id="top" href="#" @click.prevent="sortProducts('ascending')"
            >Từ thấp tới cao</a
          >
          <a id="middle" href="#" @click.prevent="sortProducts('descending')"
            >Từ cao tới thấp</a
          >
        </div>
      </div>

      <div class="InputContainer">
        <input
          placeholder="Search.."
          id="input"
          class="input"
          name="text"
          type="text"
          v-on:input="inputSearch"
        />
      </div>
    </div>

    <section>
      <div class="home_products_new_container">
        <div class="home_products_new_list">
          <item-product
            v-for="item in displayedProducts"
            :key="item.id"
            :products="item"
          ></item-product>
        </div>
      </div>
    </section>
    <ul class="pagination">
      <button @click.prevent="prevPage"><i class="ri-arrow-left-double-line"></i></button>
      <li v-for="pageNumber in totalPages" :key="pageNumber">
        <a :class="[ 'pagination_link', { 'active': pageNumber === currentPage } ]" @click.prevent="goToPage(pageNumber)">{{ pageNumber }}</a>
      </li>
      <button @click.prevent="nextPage"><i class="ri-arrow-right-double-line"></i></button>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions, Getter, mapGetters } from "vuex";
import ItemProduct from "../components/ItemProduct.vue";
export default {
  name: "san-pham",
  data() {
    return {
      tabs: ["KHUYẾN MÃI", "ĐỒNG HỒ NAM", "ĐỒNG HỒ NỮ"],
      activeTab: 0,
      orderName: "",
      searchQuery: "",
      productsPerPage: 12,
      currentPage: 1
    };
  },

  components: {
    ItemProduct,
  },
  computed: {
    ...mapGetters({
      products: "listTaskSearch",
    }),
    totalPages() {
      return Math.ceil(this.products.length / this.productsPerPage);
    },

    // Hiển thị sản phẩm tương ứng với trang hiện tại
    displayedProducts() {
      const startIndex = (this.currentPage - 1) * this.productsPerPage;
      const endIndex = startIndex + this.productsPerPage;
      return this.products.slice(startIndex, endIndex);
    }
  },
  methods: {
    ...mapActions(["filterProducts", "sortByPrice", "handleSearch"]),

    setActiveTab(tab, index) {
      this.activeTab = index;
      if (tab === "ĐỒNG HỒ NAM") {
        this.filterProducts("Nam");
      } else if (tab === "ĐỒNG HỒ NỮ") {
        this.filterProducts("Nữ");
      } else {
        this.filterProducts(""); // Thay thế bằng logic cho khuyến mãi nếu cần
      }
    },
    sortProducts(order) {
      if (order === "ascending") {
        this.orderName = "Thấp -> Cao";
      } else {
        this.orderName = "Cao -> Thấp";
      }
      this.sortByPrice(order);
    },
    inputSearch(e) {
      //this.handleSearch(e.target.value)
      this.handleSearch(e.target.value);
    },
    goToPage(pageNumber) {
      this.currentPage = pageNumber;
    },

    // Chuyển đến trang tiếp theo
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },

    // Quay lại trang trước đó
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    }
  },
  created() {
    // Khi component được tạo, gọi action với giá trị mặc định
    this.filterProducts("");
  },
};
</script>

<style>
.InputContainer {
  width: 210px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fce9ce;
  border-radius: 30px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.075);
  margin-top: 70px;
  margin-right: 100px;
}

.input {
  width: 200px;
  height: 40px;
  border: none;
  outline: none;
  caret-color: rgb(255, 81, 0);
  background-color: rgb(255, 255, 255);
  border-radius: 30px;
  padding-left: 15px;
  letter-spacing: 0.8px;
  color: rgb(19, 19, 19);
  font-size: 13.4px;
}
.home_products_2 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.order-name {
  font-size: 12px;
  color: rgb(212, 112, 19);
}

.paste-button {
  position: relative;
  display: block;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin-top: 70px;
  margin-left: 130px;
}

.button {
  background-color: #fce9ce;
  color: #212121;
  padding: 10px 15px;
  font-size: 15px;
  font-weight: bold;
  border: 2px solid transparent;
  border-radius: 15px;
  cursor: pointer;
}

.dropdown-content {
  display: none;
  font-size: 13px;
  font-weight: 600;
  position: absolute;
  z-index: 1;
  min-width: 200px;
  background-color: #fce9ce;
  border: 2px solid #f8f9f8;
  border-radius: 0px 15px 15px 15px;
  box-shadow: 0px 8px 16px 0px rgba(250, 249, 249, 0.995);
}

.dropdown-content a {
  color: #5f625f;
  padding: 8px 10px;
  text-decoration: none;
  display: block;
  transition: 0.1s;
}

.dropdown-content a:hover {
  background-color: #ffffff;
  color: #212121;
}

.dropdown-content a:focus {
  background-color: #ffff;
  color: #4caf50;
}

.dropdown-content #top:hover {
  border-radius: 0px 13px 0px 0px;
}

.dropdown-content #bottom:hover {
  border-radius: 0px 0px 13px 13px;
}

.paste-button:hover button {
  border-radius: 15px 15px 0px 0px;
}

.paste-button:hover .dropdown-content {
  display: block;
}
.ri-arrow-right-double-line,
.ri-arrow-left-double-line,
.pagination_link {
  cursor: pointer;
}
.pagination {
  display: flex;
  justify-content: center; /* căn giữa theo chiều ngang */
  list-style: none; /* loại bỏ dấu gạch đầu dòng của danh sách */
  padding: 0;
  margin-bottom: 40px; /* loại bỏ khoảng cách đệm mặc định */
}

.pagination li {
  margin: 0 5px; /* tạo khoảng cách giữa các phần tử */
}

.pagination_link {
  text-decoration: none; /* loại bỏ gạch chân ở dưới của liên kết */
  padding: 5px 10px; /* tùy chỉnh đệm cho liên kết */
  border: 1px solid #ccc; /* tạo viền xung quanh liên kết */
  border-radius: 3px; /* làm tròn góc */
}
.active {
  color: red; /* Thay đổi màu sắc khi trang được chọn */
}
</style>
