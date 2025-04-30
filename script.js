
  let swiper = new Swiper(".slider", {
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        allowTouchMove: false, 
        enabled: false,
        spaceBetween: 0,
        slidesPerView: 'auto',
      }
    }
  });






