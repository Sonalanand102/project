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
                <img src = "assets/images/Path 27.png" >
                Basement, H- 224 i, Sector 63,
                Noida Uttar Pradesh 201301
            </div>
        </div>
    </div>
</div>
<!-- Footer Section ends -->
<script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
<script>
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
</script>

</body>
</html>
`);