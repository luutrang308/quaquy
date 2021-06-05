$(document).ready(function(){
  new WOW().init();
  
  

  $('.form_item img').click(function() {
    $('.form_item').toggleClass('active');
  });
  $('.form_item p').click(function() {
    $('.form_item').toggleClass('active');
  });

  $('.slider_banner').slick({
    dots: true,
    infinite: true,
    speed: 3000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
  });

  $(window).scroll(function(){
    if ($(this).scrollTop() > 500) {
      $('.backtotop').fadeIn();
    } else {
      $('.backtotop').fadeOut();
    }
  });
  $('.backtotop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });

/*
  $('.slider_for_pro').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    fade: true,
    centerMode: true,
    asNavFor: '.slider_nav_pro',
    
  });
  $('.slider_nav_pro').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider_for_pro',
    dots: false,
    arrows: true,
    centerMode: false,
    focusOnSelect: true,
  });*/

  $('.element_relate_pro').slick({
    dots: false,
    infinite: true,
    speed: 3000,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });

  $('.btn_close').click(function() {
    $('.form_item').removeClass('active');
  })

  $('.icon_menu_mobi').click(function(){
    $('.menu_page').toggleClass('active');
    $(this).toggleClass('active');
  })

  var width_mobi = $(window).width();
  if(width_mobi > 1100) {
    $(window).scroll(function(){
      if ($(this).scrollTop() > 100) {
        $('.section_header').addClass('active');
      } else {
        $('.section_header').removeClass('active');

      }
    });
  } else {
    $(window).scroll(function(){
      if ($(this).scrollTop() > 100) {
        $('.header_pc').removeClass('no_fixed');
      } else {
        $('.header_pc').addClass('no_fixed');
      }
    });
  }






});

