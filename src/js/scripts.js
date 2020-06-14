Daws.init({
    mobile: true,
    easing: "0.45,0.05,0.55,0.95",
    duration: 300
});
//Function MailChimp Form
(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';}(jQuery));var $mcj = jQuery.noConflict(true);

$(document).ready(function() {

    var previousScroll = 0,
        headerOrgOffset = $('#mainmenu').offset().top;

    $(window).scroll(function() {
        var currentScroll = $(this).scrollTop();
        if (currentScroll > headerOrgOffset) {
            if (currentScroll > previousScroll) {
                // $('#mainmenu').fadeOut('slow');
                $('#mainmenu').addClass('header-down');
                $('#mainmenu').removeClass('fixed');
            } else {
                // $('#mainmenu').fadeIn('slow');
                $('#mainmenu').addClass('fixed');
            }
        } else {
            $('#mainmenu').removeClass('fixed');
        }
        previousScroll = currentScroll;
    });

    //popup live-studio
    $(".popup-youtube").magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        preloader: true,

    });
    //Popup Testimonials
    $(".popup-testimonial-1").magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        preloader: true,

    });
    $(".popup-testimonial-2").magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        preloader: true,

    });
    $(".popup-testimonial-3").magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        preloader: true,

    });
    $(".popup-testimonial-4").magnificPopup({
        type: "iframe",
        mainClass: "mfp-fade",
        preloader: true,

    });

    $(".learn button").click(function(event) {
        event.preventDefault();
        $(".learn .collapse").removeClass("show");
        $(".learn button.btn").removeClass("active");
        $(this).addClass("active");
    });

    // $(window).resize(function(){
    //   var wi_width = $(window).width();
    //   if(wi_width < 768){
    //      $('.learn-slider').slick({
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         autoplay: false,
    //         arrows:false,
    //         responsive: [
    //         {
    //           breakpoint: 6000,
    //           settings: "unslick"
    //         },
    //         {
    //           breakpoint: 768,
    //           settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1,
    //             dots: true,
    //             infinite: true,
    //           }
    //         }
    //       ]
    //      });
    //   }
    // });
    // function slickify() {
    //   $(".learn-slider").slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     dots: true,
    //     autoplay: false,
    //     autoplaySpeed: 2000,
    //     arrows: false,
    //     responsive: [
    //       { breakpoint: 6000, settings: "unslick"},
    //       { breakpoint: 767, settings:{
    //                  slidesToShow: 1,
    //                  slidesToScroll: 1,
    //                  infinite: true,
    //       }, }],
    //   });
    // }
    // slickify();
    // $(window).resize(function () {
    //   var $windowWidth = $(window).width();
    //   if ($windowWidth < 767) {
    //     slickify();
    //   }
    // });

    // $(".learn-slider").slick({
    //   slidesToShow: 2,
    //   slidesToScroll: 1,
    //   dots: true,
    //   autoplay: false,
    //   autoplaySpeed: 2000,
    //   arrows: false,
    //   responsive: [
    //     {
    //       breakpoint: 2000,
    //       settings: "unslick",
    //     },
    //     {
    //       breakpoint: 768,
    //       settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1,
    //         infinite: true,
    //       },
    //     },
    //   ],
    // });
    $(".member-slider").slick({
        dots: false,

        infinite: true,
        speed: 700,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    $(".testimonial-slider").slick({
        dots: false,

        infinite: true,
        speed: 700,
        autoplay: false,
        autoplaySpeed: 6000,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    });

    $("#acordion .card button").click(function() {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
        } else {
            $("#acordion .card button").removeClass("active");
            $(this).addClass("active");
        }
    });

    $('#btn-read-more').click(function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.question-more').removeClass('active');
            $(this).html('Read More');

        } else {
            $(this).addClass('active');
            $('.question-more').addClass('active');
            $(this).html('Read Less');
        }
    });
});