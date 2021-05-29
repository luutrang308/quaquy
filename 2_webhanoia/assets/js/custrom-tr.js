$(document).ready(function(){
  new WOW().init();
  
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.section_header').addClass('active');
    } else {
      $('.section_header').removeClass('active');
    }
  });

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

  //var crl1 = circlr('circlr1', {
    //scroll : true,
    /*loader : 'loader1'*/
  //});
  /*var crl = circlr('circlr', {
    scroll : true,
  });
  
  var crl2 = circlr('circlr2', {
    scroll : true,
  });
  var crl3 = circlr('circlr3', {
    scroll : true,
  });*/

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
    /*prevArrow: "<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/left.png' alt=''></button>",
    nextArrow: "<button class='next slick-next'><img class='right-arrow ' src='./assets/img/right1.png' alt=''></button>",
    */
  });

  $('.element_relate_pro').slick({
    dots: false,
    infinite: true,
    speed: 3000,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
  });







});

