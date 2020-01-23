//SCROLLING INIT
    var _ua = (function (u) {
        return {
            Tablet: (u.indexOf("windows") != -1 && u.indexOf("touch") != -1 && u.indexOf("tablet pc") == -1) ||
                u.indexOf("ipad") != -1 ||
                (u.indexOf("android") != -1 && u.indexOf("mobile") == -1) ||
                (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1) ||
                u.indexOf("kindle") != -1 ||
                u.indexOf("silk") != -1 ||
                u.indexOf("playbook") != -1,
            Mobile: (u.indexOf("windows") != -1 && u.indexOf("phone") != -1) ||
                u.indexOf("iphone") != -1 ||
                u.indexOf("ipod") != -1 ||
                (u.indexOf("android") != -1 && u.indexOf("mobile") != -1) ||
                (u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1) ||
                u.indexOf("blackberry") != -1
        }
    })(window.navigator.userAgent.toLowerCase());

    var luxyEl = document.getElementById('luxy');
    if (luxyEl) {
        if (!_ua.Mobile && !_ua.Tablet) {
            luxy.init();
        }
    }

    //HEADER TEXT
    $("#js-rotating").Morphext({
        animation: "moveTextUp",
        separator: ",",
        speed: 2500,
        complete: function () {
        }
    });
    
    //CURSOR
    var cursor = document.getElementById('cursor');
    window.addEventListener('mousemove' , function(e){
        var x = e.clientX;
        var y = e.clientY;
        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';
    });
 
    //CURSOR HOVER ZOOM
    $(".nav-logo, a, .hero-text, .hero-arrow, .grid-item").hover(function() {
        $("#cursor").addClass("zoom");
//        console.log("is this thing on")
    }, function() {
        $("#cursor").removeClass("zoom");
    });
    
    //SCROLL TO
    $("#aboutLink, .hero-arrow").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#about").offset().top
        }, 0);
        return false;
    });
    $(".burger-about").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#about").offset().top
        }, 0);
        $("#toggle").toggleClass('active');
        $(".hero-text span").toggle();
        $('#overlay').toggleClass('open');
        $('body').toggleClass('noscroll')
        return false;
    });
    
    $("#workLink").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#work").offset().top -100
        }, 0);
        return false;
    });
    $(".burger-work").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#work").offset().top -100
        }, 0);
        
        $("#toggle").toggleClass('active');
        $(".hero-text span").toggle();
        $('#overlay').toggleClass('open');
        $('body').toggleClass('noscroll')
        return false;
    });
    
    $("#contactLink").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#contact").offset().top
        }, 0);
        return false;
    });
    $(".burger-contact").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#contact").offset().top
        }, 0);
        
        $("#toggle").toggleClass('active');
        $(".hero-text span").toggle();
        $('#overlay').toggleClass('open');
        $('body').toggleClass('noscroll')
        return false;
    });
    
    //LIGHT MODE SCROLL
if (top.location.pathname === '/index.html')
{
    $(function() {
        $(window).scroll(function () {
          if ($(this).scrollTop() > 70) {
             $("body, main, .overlay").addClass("lightBG");
             $(".burger_menu-top, .burger_menu-bottom").addClass("darkmode");
             $(".hero-text, .hero-name, .about, .overlay ul li a").addClass("lightText");
//              cursor.style.background = "#000";

          }
          if ($(this).scrollTop() < 70) {
             $("body, main, .overlay").removeClass("lightBG");
              $(".burger_menu-top, .burger_menu-bottom").removeClass("darkmode");
             $(".hero-text, .hero-name, .about, .overlay ul li a").removeClass("lightText");
//              cursor.style.background = "#fff";
          }
        });
    });
}
    
    //HAMBURGER TOGGLE
    $('#toggle').click(function() {
        $(this).toggleClass('active');
        $(".hero-text span").toggle();
        $('#overlay').toggleClass('open');
        $('body').toggleClass('noscroll')
    });
