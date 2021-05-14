$(document).ready(function(){
  new WOW().init();
  
  
	/*slider*/
	$('.slider_homepage').slick({
	  dots: false,
	  infinite: true,
	  speed: 300,
    autoplaySpeed: 1200,
	  slidesToShow: 1,
	  adaptiveHeight: true,
    autoplay: false,
  });

  $('.slider_quatangvip').slick({
    infinite: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 3,/*
    prevArrow:"<button class='prev slick-prev'><img class='left-arrow ' src='./../assets/img/next3l.png' alt=''></button>",
    nextArrow:"<button class='next slick-next'><img class='right-arrow ' src='./../img/next3l.png' alt=''></button>",*/
    responsive:[
    {
      breakpoint: 765,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    ]
  });
  /**/
  $('.slider_quatangdocban').slick({
    infinite: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 3,/*
    prevArrow:"<button class='prev slick-prev'><img class='left-arrow ' src='./../assets/img/next3l.png' alt=''></button>",
    nextArrow:"<button class='next slick-next'><img class='right-arrow ' src='./../img/next3l.png' alt=''></button>",*/
    responsive:[
    {
      breakpoint: 765,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    ]
  });
  $('.slider_cnkh').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    arrows: false,    
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


});

/*var spriteImage = new Image();
  spriteImage.crossOrigin = 'anonymous';
  spriteImage.onload = init;
  spriteImage.src = 'https://i.imgur.com/MqZjKOH.jpg';

  const map = new Image();
  map.crossOrigin = 'anonymous';
  map.src = 'https://i.imgur.com/ox7N1dj.jpg';

  function init(){
    console.log(spriteImage);
    let app = new PIXI.Application({
      width: spriteImage.width, height: spriteImage.height
    });
    document.getElementById("view").appendChild(app.view);
    let img = new PIXI.Sprite.from(spriteImage);
    
    app.stage.addChild(img);

    const depthMap = new PIXI.Sprite.from(map);
    app.stage.addChild(depthMap);
    const displacementFilter = new PIXI.filters.DisplacementFilter(depthMap);
    app.stage.filters = [displacementFilter];

    window.onmousemove = (e)=>{
      displacementFilter.scale.x = (window.innerWidth/2  - e.clientX)/20;
      displacementFilter.scale.y = (window.innerHeight/2  - e.clientY)/20;
    }
  }*/