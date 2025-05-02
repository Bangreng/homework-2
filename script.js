const swipperPagination = document.querySelector('.swiper-pagination');

 function swiperFunction(pagination){
  let swiper = new Swiper(".slider", {
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
      el: pagination,
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
 }

 swiperFunction(swipperPagination);

  const btnRepaired = document.querySelector('.btn-functional__text2');
  const imgBtnRepaired = document.querySelector('.btn-functional__arrow2');
  const swiperRepaired = document.querySelector('.repaired-devices');

  btnRepaired.addEventListener('click', ()=>{
    if(btnRepaired.innerHTML === 'Показать все'){
      btnRepaired.textContent = 'Cкрыть';
      imgBtnRepaired.style.transform = 'rotate(180deg)';
      swiperRepaired.style.maxHeight = '100%';
    } else{
      btnRepaired.textContent = 'Показать все';
      imgBtnRepaired.style.transform = 'rotate(0deg)';
      swiperRepaired.style.maxHeight = '160px'
    }
  })







