// SLIDER
const SLIDER = document.querySelector(".slider-list");
const SLIDES = document.querySelectorAll(".slider-list-item");
const SLIDE = document.querySelector(".slider-list-item");
const LEFT_BUTTON = document.querySelector(".slider__buttonLeft");
const RIGHT_BUTTON = document.querySelector(".slider__buttonRight");

let centerSlide = 0;
let gap = 90;

RIGHT_BUTTON.addEventListener("click", () => {
  if (centerSlide < SLIDES.length - 2) {
    LEFT_BUTTON.classList.remove("slider__button--notActive");
    centerSlide += 1;
    SLIDER.style.left = `-${centerSlide * (SLIDE.offsetWidth + gap)}px`;
    centerSlide === SLIDES.length - 2 && RIGHT_BUTTON.classList.add("slider__button--notActive");
  }
});

LEFT_BUTTON.addEventListener("click", () => {
  if (centerSlide >= 1) {
    RIGHT_BUTTON.classList.remove("slider__button--notActive");
    centerSlide -= 1;
    SLIDER.style.left = `-${centerSlide * (SLIDE.offsetWidth + gap)}px`;
    centerSlide || LEFT_BUTTON.classList.add("slider__button--notActive");
  }
});

// POPUP

function popup() {
  const POPUP = document.querySelector(".popup");
  const BUTTONS = document.querySelectorAll(".slider-list-item__button");

  const changePopupClass = () => {
    POPUP.classList.toggle("popup--notActive");
    document.body.classList.toggle("blockScroll");
    
  };

  POPUP.addEventListener("click", (e) => {
    if (e.target === POPUP) changePopupClass();
  });

  BUTTONS.forEach((item) => {
    item.addEventListener("click", changePopupClass);
  });


}

popup();
