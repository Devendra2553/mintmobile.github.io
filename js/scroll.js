$(document).ready(function () {

    $(".nav-login").click(function() {
        $('html,body').animate({scrollTop: $(".login-section").offset().top},'slow');
    });

    $(".nav-product").click(function() {
        $('html,body').animate({scrollTop: $(".product-section").offset().top},'slow');
    });

    $(".nav-about").click(function() {
        $('html,body').animate({scrollTop: $(".about-section").offset().top},'slow');
    });

});