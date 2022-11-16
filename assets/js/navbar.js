document.write(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css">
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/tabletView.css">
    <link rel="stylesheet" href="assets/css/mobileView.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"/>

    <title>Document</title>
</head>
<body>

<!-- Navbar Starts-->
<div class="navbar">

    <!-- Company Logo -->
    <div class="logo">
       <img src="assets/images/Mask Group 291.png" alt="" >     
    </div>

        

    <!-- Menu -->
    <div class="menu">
    <input type="checkbox" id="click">
    <label for="click" class="hamburger-icon">
        <i class="fa-solid fa-bars"></i>
    </label>
        <ul>
            <li class="home-section"><a id="home-section" class="active" onclick="activateMenu()" href="index.html">Home</a></li>
            <li class="company"><a id="company" onclick="activateMenu()" href="company.html">Company</a></li>
            <li class="solution"><a id="solution" onclick="activateMenu()" href="solution.html">Solution</a></li>
            <li class="brand"><a id="brand" href="brand.html">Brand</a></li>
            <li class="sector"><a id="sector" href="sector.html">Sector</a></li>
            <li class="resources"><a id="resources" href="resources.html">Resources</a></li>
            <li class="contactus"><a id="contactus" href="contactUs.html">Contact Us</a></li>
        </ul>
    </div>

    
        
    
</div>
<!-- Navbar Ends-->`)