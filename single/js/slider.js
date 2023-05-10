export function slider() {
    const SLIDER = document.querySelector(".slider-list");
    const SLIDER_CONTAINER = document.querySelector(".slider-container");
    const SLIDES = document.querySelectorAll(".slider-list-item");
    const SLIDE = document.querySelector(".slider-list-item");
    const LEFT_BUTTON = document.querySelector(".slider__buttonLeft");
    const RIGHT_BUTTON = document.querySelector(".slider__buttonRight");
  
    let centerSlide = 0;
  
    let firstXCoordinats = null;
    let secondXCoordinats = null;
  
    const gap = () => {
      if (window.innerWidth >= 1280) return 90;
      if (window.innerWidth >= 768) return 40;
      if (window.innerWidth >= 320) return 20;
    };
  
    const leftSwipe = () => {
      if (centerSlide >= 1) {
        RIGHT_BUTTON.classList.remove("slider__button--notActive");
        centerSlide -= 1;
        SLIDER.style.left = `-${centerSlide * (SLIDE.offsetWidth + gap())}px`;
        centerSlide || LEFT_BUTTON.classList.add("slider__button--notActive");
      }
    };
  
    const rightSwipe = () => {
      if (centerSlide < SLIDES.length - 1) {
        LEFT_BUTTON.classList.remove("slider__button--notActive");
        centerSlide += 1;
        SLIDER.style.left = `-${centerSlide * (SLIDE.offsetWidth + gap())}px`;
        centerSlide === SLIDES.length - 1 && RIGHT_BUTTON.classList.add("slider__button--notActive");
      }
    };
  
    SLIDER_CONTAINER.addEventListener("touchstart", (e) => {
      firstXCoordinats = e.changedTouches[0].clientX;
    });
  
    SLIDER_CONTAINER.addEventListener("touchend", (e) => {
      secondXCoordinats = e.changedTouches[0].clientX;
      if (secondXCoordinats - firstXCoordinats >= 60) {
        leftSwipe();
      }
      if (firstXCoordinats - secondXCoordinats >= 60) {
        rightSwipe();
      }
    });
  
    RIGHT_BUTTON.addEventListener("click", rightSwipe);
  
    LEFT_BUTTON.addEventListener("click", leftSwipe);
  }