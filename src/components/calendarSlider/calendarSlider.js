var c = $("#calendar-js").data("initialslider");
void 0 == c ? (c = 1) : 0 == c && (c = 0),
  $("#calendar-js").slick({
    infinite: !0,
    arrows: !1,
    dots: !0,
    autoplay: !1,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: c,
    centerMode: !0,
    responsive: [
      { breakpoint: 1350, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 900, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      {
        breakpoint: 620,
        settings: { slidesToShow: 1, slidesToScroll: 1, dots: !1 },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: !1,
          centerMode: !1,
        },
      },
    ],
  });
