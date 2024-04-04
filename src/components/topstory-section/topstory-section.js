$(".topstory").slick({
  infinite: !0,
  arrows: !1,
  dots: !0,
  autoplay: !1,
  slidesToShow: 1,
  slidesToScroll: 1,
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
