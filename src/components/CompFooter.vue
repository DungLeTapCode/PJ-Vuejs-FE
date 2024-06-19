<template>
    <div>
        <section>
        <div class="footer_header">
        <div class="footer_email">
            <h2>ĐĂNG KÝ NHẬN THÔNG TIN</h2>
        </div>
        <div class="footer_form">
            <input class="input_email" type="text" placeholder="Email...">
            <button class="btn_login">ĐĂNG KÝ</button>
        </div>
    </div>
    </section>

    <section>
        <div class="footer_container_contents">
            <div class="footer_contact_info">
                <h5>THÔNG TIN LIÊN HỆ</h5>
                <div class="info info_address">
                    <i class="ri-map-pin-line"></i>
                    <p>Thôn Chúc Đồng,Thụy Hương,Chương Mỹ,Hà Nội</p>
                </div>
                <div class="info info_phone">
                    <i class="ri-phone-line"></i>
                    <p>0967 204 057</p>
                </div>
                <div class="info info_email">
                    <i class="ri-mail-line"></i>
                    <p>dungle2003@gmail.com</p>
                </div>
                <div class="info_social_network">
                    <i class="ri-facebook-fill"></i>
                    <i class="ri-instagram-fill"></i>
                    <i class="ri-twitter-fill"></i>
                    <i class="ri-tiktok-fill"></i>
                </div>
            </div>
            <div class="footer_link">
                <h5>LIÊN KẾT</h5>
                <router-link to="/gioithieu">Giới Thiệu</router-link>
                <router-link to="/sanpham">Đồng hồ nam</router-link>
                <router-link to="/sanpham">Đồng hồ nữ</router-link>
                <router-link to="/blog">Blogs</router-link>
                <router-link to="/lienhe">Liên hệ</router-link>
            </div>
            <div class="footer_support">
                <h5>HỖ TRỢ</h5>
                <router-link to="/lienhe">Hướng dẫn mua hàng</router-link>
                <router-link to="/lienhe">Hướng dẫn thanh toán</router-link>
                <router-link to="/lienhe">Chính sách bảo hành</router-link>
                <router-link to="/lienhe">Chính sách đổi trả</router-link>
                <router-link to="/lienhe">Tư vấn khách hàng</router-link>
            </div>
            <div class="footer_application">
                <h5>TẢI ỨNG DỤNG TRÊN</h5>
                <p>Ứng dụng WatchStore hiện có sẵn trên Google Play & App Store. Tải nó ngay.</p>
                <img src="/dist/img/play.jpg" width="100%" alt="">
                <img src="/dist/img/app.jpg" width="100%" alt="">
            </div>
        </div>
            
    </section>

    <section>
        <div class="footer_end">
            <p>© Bản quyền thuộc về . Thiết kế website <span>Dũng Lê</span></p>
            <img src="/dist/img/pay.png" alt="">
        </div>
    </section>
       
    </div>
</template>

<script>
export default {
    name:'comp-footer'
}
</script>

<style>

</style>
