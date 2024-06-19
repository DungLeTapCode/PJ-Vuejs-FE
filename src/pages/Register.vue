<template>
    <div class="container-popup">
      <div class="container-register">
        <button class="close-btn"><i class="ri-close-fill"></i></button>
        <h5>ĐĂNG KÝ</h5>
        <div class="form-account">
          <label for="fullname">Họ và Tên *</label>
          <input type="text" id="fullname" placeholder="Nhập họ và tên">
        </div> 
        <div class="form-account">
          <label for="email">E-mail *</label>
          <input type="email" id="email" placeholder="Nhập địa chỉ email">
        </div>
        <div class="form-account">
          <label for="password">Mật khẩu *</label>
          <input type="password" id="password" placeholder="Nhập mật khẩu">
        </div>
        <div class="form-account">
          <label for="confirm-password">Xác nhận mật khẩu *</label>
          <input type="password" id="confirm-password" placeholder="Nhập lại mật khẩu">
        </div>
        <div class="form-button">
          <button class="btn-register">ĐĂNG KÝ</button>
        </div>
        <div class="account-forget">
          <p>Bạn đã có tài khoản? <router-link to="/login">Đăng nhập ngay</router-link></p>
        </div>            
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'register'
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
  
  .container-register {
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
    justify-content: center;
    margin-top: 20px;
  }
  
  .btn-register {
    background-color: #c89979; /* Màu nền đăng ký */
    color: white;
    border: none;
    padding: 12px 24px; /* Kích thước của button */
    border-radius: 4px;
    cursor: pointer;
  }
  
  .btn-register:hover {
    background-color: #c89979;/* Màu nền hover */
  }
  
  .account-forget {
    text-align: center;
    margin-top: 10px;
  }
  
  .account-forget a {
    text-decoration: none;
    color: #007bff;
  }
  </style>
  
