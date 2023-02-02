//  ********* 책 소개 섹션** 스와이퍼 *********
var swiper = new Swiper(".mySwiper_bookInfo", {
  slidesPerView: 6,
  // spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  loopFillGroupWithBlank: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
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


//  ********* writer섹션** 마우스휠 가로 스크롤 *********
// let writer_wrap = document.querySelector('.writer_wrap');
// let writerImg = document.querySelector('.writerImg');
// let Img_wid = writerImg.offsetWidth;
// let Img_li = writerImg.children;
// let win_wid = window.innerWidth;
// let Img_move_max = (Img_wid - (win_wid/2)) * -1;
// let s_pos = 0;
// let li_pos = 0;



// writer_wrap.addEventListener('wheel',function(e){
//   e.preventDefault;
//   leftRightScroll(e.deltaY);
// });

// function leftRightScroll(amount){
//   s_pos -= amount;
  
//   if(s_pos < Img_move_max) {
//     s_pos = Img_move_max;
//     return;
//   } else if(s_pos > 0) {
//     s_pos = 0;
//     return;
//   }
//   writerImg.style.transform = `translateX(${s_pos-}px)`
//   li_upDown(amount);
// };

// function li_upDown(amount){
//   li_pos += amount;
// }

//스크롤 안보이게 하기
// writer_wrap.addEventListener('mouseover',function(e){
//   function disableScroll() { 
//     document.body.classList.add("stop-scrolling"); 
//   } 
//   let stopScroll = disableScroll();
// })
// writer_wrap.addEventListener('mouseleave',function(e){
//   function startScroll() { 
//     document.body.classList.remove("stop-scrolling"); 
//   }
//   let notstopScroll = startScroll();
// })



//  ********* noticeBoard 섹션** 스와이퍼 *********
var swiper = new Swiper(".mySwiper_noticeBoard", {
  slidesPerView: 5,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  loopFillGroupWithBlank: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
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






