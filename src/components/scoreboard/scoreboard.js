$(".scoreboard__carousel").slick({
  infinite: !1,
  slide: "div",
  dots: !1,
  arrows: !0,
  slidesToShow: 8,
  slidesToScroll: 8,
  startPosition: 10,
  responsive: [
    {
      breakpoint: 1e3,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: !1,
        dots: !1,
        arrows: !0,
      },
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: !1,
        dots: !1,
        arrows: !1,
      },
    },
  ],
});
var c = $(".scoreboard__carousel").data("active");
Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
(c -= 1),
  $(".scoreboard__carousel").slick("slickGoTo", c),
  $(".homepage__carousel").slick({
    infinite: !1,
    slide: "div",
    dots: !0,
    arrows: !1,
    slidesToShow: 1,
    slidesToScroll: 1,
  }),
  $(".homepage__stats__carousel").slick({
    infinite: !1,
    slide: "div",
    dots: !0,
    arrows: !1,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 500, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  });
