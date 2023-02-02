//  ********* 책 소개 섹션** 스와이퍼 *********
var swiper = new Swiper(".mySwiper_bookInfo", {
  slidesPerView: 6,
  // spaceBetween: 30,
  centeredSlides: true,
  // loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".bookInfo-button-next",
    prevEl: ".bookInfo-button-prev"
  },
  breakpoints: { //반응형 
    1536: {
      slidesPerView: 6,
      centeredSlides: true,
      // slidesPerGroup: 4,
    },
    1000: {
      slidesPerView: 5,
      centeredSlides: true,
      // slidesPerGroup: 4,
    },
    850: {
      slidesPerView: 4,
      centeredSlides: false,
      // slidesPerGroup: 3,
    },
    0: {
      slidesPerView: 1,
      centeredSlides: true,
      // centeredSlides: false,
      // slidesPerGroup: 1,
    },
  }
});

//  ********* noticeBoard 섹션** 스와이퍼 *********
var swiper = new Swiper(".mySwiper_noticeBoard", {
  slidesPerView: 5,
  spaceBetween: 30,
  centeredSlides: true,
  // loop: true,
  // loadPrevNext: true,
  // loopedSlides: 5,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  breakpoints: { //반응형 
    1220: {
      slidesPerView: 5,
    },
    1000: {
      slidesPerView: 4,
      centeredSlides: true,
    },
    800: {
      slidesPerView: 3,
      centeredSlides: false,
    },
    470: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  }
});