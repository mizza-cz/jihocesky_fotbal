$("#topstory").slick({
  infinite: true,
  arrows: !1,
  dots: !0,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 2500,
  speed: 250,
});

$(".topstoryNews__slider").slick({
  dots: false,
  infinite: true,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 3000,
  autoplay: false,
  prevArrow:
    '<button class="slider__btn slider__btnprev"><img src="./images/ico/chevron-left-solid.svg" loading="lazy" alt="" /></button>',
  nextArrow:
    '<button class="slider__btn slider__btnnext"><img src="./images/ico/chevron-right-solid.svg" loading="lazy" alt="" /></button>',
});
