import { PETS } from "../data/data.js";

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
  const POPUP_BLOCK = document.querySelector(".popup-container");

  const changePopupClass = (id) => {
    POPUP_BLOCK.innerHTML = `
    <div class="popup-img">
    <img src="./assets/imgs/${PETS[id].name}.png" alt="dog" />
  </div>
  <div class="popup-description">
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
    if (e.target === POPUP) changePopupClass(0);
  });

  BUTTONS.forEach((item, id) => {
    item.addEventListener("click", () => changePopupClass(id));
  });
}

popup();
