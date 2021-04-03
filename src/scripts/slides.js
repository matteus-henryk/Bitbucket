import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js';

const startSlides = () => {
  new Swiper(".slide-about-car", {
    slidesPerView: 3,
    spaceBetween: 50,
    loop: true,
    pagination: {
      el: ".pagination-about-car",
      clickable: true,
    },
    navigation: {
      nextEl: ".next-about-car",
      prevEl: ".prev-about-car"
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
        centered: false,
      },
      1100: {
        slidesPerView: 3,
        spaceBetween: 50,
      }
    }
  });

  new Swiper(".slide-know-more", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      650: {
        slidesPerView: 2,
        spaceBetween: 20,
        centered: false,
      },
      1300: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    }
  })
};

export default startSlides;