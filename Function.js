$('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;
        
    $('html, body').animate({ 
      scrollTop: targetOffset - 50
    }, 500);
  });
  
  
  
  // Portfolio
  $('.carrossel').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3 ,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true, 
          arrows: false
        }
      }   
    ]
  });

  $('.carrossel-2').slick({
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    adaptiveHeight: true
  });
