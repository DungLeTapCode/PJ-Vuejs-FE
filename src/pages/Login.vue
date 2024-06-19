<template>
  <div class="container-popup">
    <div class="container-login">
      <button class="close-btn"><i class="ri-close-fill"></i></button>
      <h5>ĐĂNG NHẬP</h5>
      <div class="form-account">
        <label for="username">Tên tài khoản hoặc E-mail *</label>
        <input type="text" id="username" placeholder="Nhập tên tài khoản hoặc E-mail">
      </div> 
      <div class="form-account">
        <label for="password">Mật khẩu *</label>
        <input type="password" id="password" placeholder="Nhập mật khẩu">
      </div>
      <div class="form-button">
        <button class="btn-account">ĐĂNG NHẬP</button>
        <label><input type="checkbox"> Ghi nhớ mật khẩu</label>
      </div>
      <div class="account-forget">
        <a href="#">Quên mật khẩu?</a>
        <span>|</span>
        <router-link to="/register">Tạo tài khoản mới</router-link>
      </div>            
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style scoped>
.container-popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Màu nền mờ */
  display: flex;
  justify-content: center;
  align-items: center;
}

.container-login {
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 350px; /* Độ rộng của form */
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
}

h5 {
  text-align: center;
  margin-bottom: 20px;
}

.form-account {
  margin-bottom: 15px;
}

.form-account label {
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
}

.form-account input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
}

.btn-account {
  background-color: #c89979; /* Màu nền đăng nhập theo yêu cầu */
  color: white;
  border: none;
  padding: 12px 24px; /* Kích thước của button */
  border-radius: 4px;
  cursor: pointer;
}

.btn-account:hover {
  background-color: #a67e5c; /* Màu nền hover */
}

.account-forget {
  text-align: center;
}

.account-forget a {
  text-decoration: none;
  color: #007bff;
  margin-right: 5px;
}

.account-forget span {
  color: #666;
  margin: 0 5px;
}
</style> 
