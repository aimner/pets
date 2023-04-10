import { PETS } from "../data/data.js";

// SLIDER

function slider() {
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
      centerSlide === SLIDES.length - 2 && RIGHT_BUTTON.classList.add("slider__button--notActive");
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

slider();

// POPUP

function popup() {
  const POPUP = document.querySelector(".popup");
  const BUTTONS = document.querySelectorAll(".slider-list-item__button");
  const POPUP_BLOCK = document.querySelector(".popup-container");

  const changePopupClass = (id) => {
    POPUP_BLOCK.innerHTML = `
    <div class="popup-img">
    <img src="./assets/imgs/${PETS[id].name}.png" alt="dog" />
  </div>
  <div class="popup-description">
    <button class='popup__closeButton'></button>
    <h2 class="popup-description__title">${PETS[id].name}</h2>
    <p class="popup-description__breed">${PETS[id].breed}</p>
    <p class="popup-description__text">
    ${PETS[id].text}
    </p>
    <ul class="popup-description-list">
      <li class="popup-description-list-item">
        <span>Age:</span>
        <span>2 months</span>
      </li>
      <li class="popup-description-list-item">
        <span> Inoculations:</span>
        <span> none</span>
      </li>
      <li class="popup-description-list-item">
        <span>Diseases:</span>
        <span> none</span>
      </li>
      <li class="popup-description-list-item">
        <span>Parasites:</span>
        <span> none</span>
      </li>
    </ul>
  </div>
    `;
    POPUP.classList.toggle("popup--notActive");
    document.body.classList.toggle("blockScroll");
  };

  POPUP.addEventListener("click", (e) => {
    if (e.target === POPUP || e.target === document.querySelector(".popup__closeButton"))
      changePopupClass(0);
  });

  BUTTONS.forEach((item, id) => {
    item.addEventListener("click", () => changePopupClass(id));
  });
}

popup();
