import { PETS } from "../../data/data.js";

export function popup() {
    const POPUP = document.querySelector(".popup");
    const BUTTONS = document.querySelectorAll(".slider-list-item__button");
    const POPUP_BLOCK = document.querySelector(".popup-container");
  
    const changePopupClass = (id) => {
      POPUP_BLOCK.innerHTML = `
      <div class="popup-img">
      <img src="./assets/imgs/${PETS[id].name}.png" alt="dog"/>
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

