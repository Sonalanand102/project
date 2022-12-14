document.write(`
<!-- Footer Section starts -->
<div class="footer">
    <div class="footer-section1">
        <img src="assets/images/auxilogo.png" alt="">
        <div class="footer_content">
            We love to fabricate an ambience which looks dazzling and speaks melodiously. We are industrial pioneers backed by our existing clients.
        </div>
        <div class="social_icons">
            <ul>
                <li><img src="assets/images/Mask Group 297.png" alt=""></li>
                <li><img src="assets/images/Mask Group 298.png" alt=""></li>
                <li><img src="assets/images/Mask Group 299.png" alt=""></li>
                <li><img src="assets/images/Mask Group 300.png" alt=""></li>
            </ul>
        </div>

        <div class="copyrights">
            Copyright ©2020 All rights reserved | This template is made with love by Marian
        </div>
    </div>
    <div class="footer-section2">
        <div class="information">
            <h3>Information</h3>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="company.html">Company</a></li>
                <li><a href="solution.html">Solution</a></li>
                <li><a href="brand.html">Brand</a></li>
                <li><a href="sector.html">Sector</a></li>
                <li><a href="resources.html">Resources</a></li>
                
            </ul>
        </div>
        <div class="contact-info">
            <h3>Contact Info</h3>
            <div class="email">
                <img src = "assets/images/Group 70843.png" >
                info@auxibleindia.com
            </div>
            <div class="phone">
                <img src = "assets/images/phone.png" >
                +91 7355751042 
            </div>
            <div class="address">
                <i class="fa-thin fa-location-dot" style="color:#707070;"></i>
                Basement, H- 224 i, Sector 63,
                Noida Uttar Pradesh 201301
            </div>
        </div>
    </div>
</div>
<!-- Footer Section ends -->

<script src="assets/js/script.js"></script>
<!-- Swiper JS -->
<script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"></script>

<!-- Initialize Swiper -->
<script>
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    slidesPerGroup: 4,
    loop: true,
    // loopFillGroupWithBlank: true,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    //   },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".project-next-btn",
      prevEl: ".project-prev-btn",
    },
    breakpoints: {
      400: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
    },
  });
</script>

</body>
</html>
`);