/* #Header
  ======================================================= */
const header = document.querySelector('.header');

const headerBtn = document.querySelector('.header-hamburger');
const headerClose = document.querySelector('.header-close');

headerBtn.addEventListener('click', (e) => {
  e.preventDefault();

  header.classList.add('show');
  body.classList.add('no-scroll');
  header.classList.remove('show-search');
});

headerClose.addEventListener('click', (e) => {
  e.preventDefault();

  header.classList.remove('show');
  body.classList.remove('no-scroll');
  header.classList.remove('show-search');
});

// Color Change
if (document.querySelector('.header')) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  });
}

if (document.querySelector('.header')) {
  if (window.scrollY > 0) {
    header.classList.add('header-scrolled');
  } else {
    header.classList.remove('header-scrolled');
  }
}

const searchBtn = document.querySelector('.header-search');
const searchClose = document.querySelector('.search-close');

searchBtn.addEventListener('click', (e) => {
  e.preventDefault();

  header.classList.add('show-search');
  body.classList.add('no-scroll');
  header.classList.remove('show');
});

searchClose.addEventListener('click', (e) => {
  e.preventDefault();

  header.classList.remove('show-search');
  body.classList.remove('no-scroll');
  header.classList.remove('show');
});

/* #Banner Slider
  ======================================================= */
if (document.querySelector('.banner .swiper')) {
  new Swiper('.banner .swiper', {
    loop: true,
    pagination: {
      el: '.banner .swiper-pagination',
      clickable: true
    },
  });
}

/* #Home Blog Posts Slider
  ======================================================= */
if (document.querySelector('.home-blog-posts .swiper')) {
  new Swiper('.home-blog-posts .swiper', {
    loop: true,
    pagination: {
      el: '.home-blog-posts .swiper-pagination',
      clickable: true
    },
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      1024: {
        slidesPerView: 2
      }
    },
    navigation: {
      nextEl: ".home-blog-posts .next",
      prevEl: ".home-blog-posts .prev",
    },
  });
}

/* #Projects Slider
  ======================================================= */
if (document.querySelector('.projects-slider .slider-1 .swiper') && document.querySelector('.projects-slider .slider-2 .swiper')) {
  const slider3 = new Swiper(".projects-slider .slider-3 .swiper", {
    slidesPerView: 1,
    allowTouchMove: false,
  });

  const slider2 = new Swiper(".projects-slider .slider-2 .swiper", {
    slidesPerView: 1,
    allowTouchMove: false,
  });

  let sliders = [slider2, slider3];

  const slider1 = new Swiper(".projects-slider .slider-1 .swiper", {
    slidesPerView: 1,
    controller: {
      control: sliders
    },
    navigation: {
      nextEl: ".projects-slider .next",
      prevEl: ".projects-slider .prev",
    },
    pagination: {
      el: ".projects-slider .swiper-pagination",
    },
    breakpoints: {
      0: {
        allowTouchMove: true
      },
      1024: {
        allowTouchMove: false,
      }
    }
  });
}

/* #Product Slider
  ======================================================= */
  if (document.querySelector('.product-slider .swiper')) {
    const productSliderEl = document.querySelector('.product-slider');
  
    if (!productSliderEl.classList.contains('alt')) {
      new Swiper(".product-slider .swiper", {
        pagination: {
          el: ".product-slider .swiper-pagination",
          type: "progressbar",
        },
        breakpoints: {
          0: {
            slidesPerView: 1.2
          },
          1024: {
            slidesPerView: 4.2
          }
        }
      });
    } else {
      new Swiper(".product-slider .swiper", {
        pagination: {
          el: ".product-slider .swiper-pagination",
          type: "progressbar",
        },
        breakpoints: {
          0: {
            slidesPerView: 1.2
          },
          1024: {
            slidesPerView: 4.2
          }
        }
      });
    }
  }