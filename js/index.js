

$('.logo_slider').slick({
    autoplay: false,
    autoplaySpeed: 1000,
    arrows:false,
    slidesToShow:5,
    slidesToScroll:1,
    
    responsive: [
      {
        breakpoint:992,
        settings: {
          slidesToShow:3,
          slidesToScroll:3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow:2,
        }
      },
      {
        breakpoint:575,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1
        }
      }
    ]
  });
  $('.space_slider').slick({
    autoplay: false,
    autoplaySpeed: 1000,
    arrows:false,
    

  });

  $('.slider_img').slick({
    autoplay: false,
    autoplaySpeed: 1000,
    arrows:false,
    dots:true,


  });