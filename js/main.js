$(document).ready(function(){

    $('.nav .arrow').click(function(){
        $(this).toggleClass('act');
        $(this).next().slideToggle();
    });

    $('.hamburger').click(function () {
        $('.main_menu').toggleClass('open');
        $('html').toggleClass('page-noscroll');

        $('.main_menu .mm_close').click(function () {
            $('.main_menu').removeClass('open');
            $('html').removeClass('page-noscroll');
        });
        return false;
    });
    $(document).on('click', function(e) {
        if (!$(e.target).closest(".main_menu.open").length) {
            $(".main_menu.open").removeClass('open');
            $("html").removeClass('page-noscroll');
        }
        e.stopPropagation();
    });


    if($('.main_slider > div').length >1){
        $('.main_slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots:false,
            fade:true,
            //autoplay: true,
            //speed: 1000,
            //autoplaySpeed:9000,
            //dotsClass: 'custom_paging',
        });
    }

    $('.ms_prev').click(function(){
        $('.main_slider').slick('slickPrev');
    });
    $('.ms_next').click(function(){
        $('.main_slider').slick('slickNext');
    });


    $('.product_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        //fade: true,
        asNavFor: '.product_slider_nav'
    });
    $('.product_slider_nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.product_slider',
        dots: false,
        arrows:false,
        //centerMode: true,
        focusOnSelect: true,
        vertical:true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 575,

                settings: {
                    vertical:false,
                    slidesToShow: 3
                }
            }
        ]
    });



});


