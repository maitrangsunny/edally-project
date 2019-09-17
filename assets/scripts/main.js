
function fixedMenu() {
    var header = document.getElementById("fixMenu");
    var sticky = header.offsetTop;
    if (window.pageYOffset > sticky) {
        header.classList.add("act-scroll");
    } else {
        header.classList.remove("act-scroll");
    }
}

$(document).ready(function () {
    $(".mobile-bar").click(function () {
        $("#mySidenav").addClass('act-mobile-menu');
        $('.close-side-overlay').addClass('overlay-opened');
    });
    $(".mobile-list .mb-arrow").click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('glyphicon-menu-down active');
            $(this).parent().find("ul").hide(500);
        } else {
            $(this).addClass('glyphicon-menu-down active');
            $(this).parent().children("ul").show(500);
        }
    })
    $('.close-side-overlay').click(function () {
        if ($(this).hasClass('overlay-opened')) {
            $(this).removeClass('overlay-opened');
            $("#mySidenav").removeClass('act-mobile-menu');
        }
    })
    $(".banner-owl-carousel").owlCarousel({
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        slideSpeed: 300,
        paginationSpeed: 400,
        items: 1,
        autoplay: true,
        rewind: true,
    });
    $(".custom-owl-carousel-4").owlCarousel({
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        items: 4,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        rewind: true,
        dots: false,
        margin: 30,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 3

            },
            991: {
                items: 4,

            }
        }
    });
    $(".custom-owl-carousel-3").owlCarousel({
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        items: 3,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        rewind: true,
        dots: false,
        margin: 35,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 3

            }
        }
    })
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#goTop').fadeIn();
        } else {
            $('#goTop').fadeOut();
        }
        fixedMenu();
    });
    $('#goTop').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});
