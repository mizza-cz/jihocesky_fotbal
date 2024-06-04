$(".partnersSlider__inner").slick({
  infinite: true,
  arrows: false,
  autoplay: true,
  slidesToScroll: 1,
  slidesToShow: 6,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 4,
      },
    },

    {
      breakpoint: 550,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});
