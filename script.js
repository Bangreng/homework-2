
 function swiperFunction(pagination){
  let swiper = new Swiper(".slider", {
    slidesPerView: 'auto',
    spaceBetween: 16,
    pagination: {
      el: '.swiper-pagination',
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

 swiperFunction();


let imageRepaired = [
  {
    imgUrl: './img/icon/lenovo_logo.png',
    alt: 'Логотип lenovo'
  },
  {
    imgUrl: './img/icon/samsung_logo.png',
    alt: 'Логотип samsung'
  },
  {
    imgUrl: './img/icon/apple_logo.png',
    alt: 'Логотип apple'
  },
  {
    imgUrl: './img/icon/sonic_logo.png',
    alt: 'Логотип ViewSonic'
  },
  {
    imgUrl: './img/icon/bosh_logo.png',
    alt: 'Логотип bosh'
  },
  {
    imgUrl: './img/icon/hp_logo.png',
    alt: 'Логотип hp'
  },
  {
    imgUrl: './img/icon/acer_logo.png',
    alt: 'Логотип acer'
  },
  {
    imgUrl: './img/icon/hp_logo.png',
    alt: 'Логотип hp'
  },
  {
    imgUrl: './img/icon/lenovo_logo.png',
    alt: 'Логотип lenovo'
  },
  {
    imgUrl: './img/icon/samsung_logo.png',
    alt: 'Логотип samsung'
  },
  {
    imgUrl: './img/icon/sonic_logo.png',
    alt: 'Логотип ViewSonic'
  }
]

function createCardRepaired(image){
  const repairedDevicesContainer = document.querySelector('.repaired-devices');

  for(let i = 0; i < image.length; i++){

    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');
    repairedDevicesContainer.appendChild(slide);

    const slideItem = document.createElement('div');
    slideItem.classList.add('repaired-devices__item');
    slide.appendChild(slideItem);

    const repairedLink = document.createElement('a');
    repairedLink.classList.add('repaired-devices__link');
    slideItem.appendChild(repairedLink);

    const imgItem = document.createElement('img');
    imgItem.src = image[i].imgUrl;
    imgItem.alt = image[i].alt;
    repairedLink.appendChild(imgItem);

    const btn = document.createElement('button');
    btn.classList.add('repaired-devices__btn');
    slideItem.appendChild(btn)
  }
}

createCardRepaired(imageRepaired)


function btnShowMore(){
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
}

btnShowMore();








