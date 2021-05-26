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
    speed: 300,
    autoplaySpeed: 1200,
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

  var crl1 = circlr('circlr1', {
    scroll : true,
    loader : 'loader1'
  });
  var crl = circlr('circlr', {
    scroll : true,
    loader : 'loader'
  });
  
  var crl2 = circlr('circlr2', {
    scroll : true,
    loader : 'loader2'
  });
  var crl3 = circlr('circlr3', {
    scroll : true,
    loader : 'loader3'
  });

});

