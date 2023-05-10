export function burger() {
    const BURGER_ELEMENT = document.querySelector(".hamburger");
    const NAV = document.querySelector('.nav')
  
    const openAndCloseBurger = () => {
      document.body.classList.toggle("blockScroll");
      BURGER_ELEMENT.classList.toggle('hamburger--active')
      NAV.classList.toggle('nav--active')
    }
  
    BURGER_ELEMENT.addEventListener("click", openAndCloseBurger);
    NAV.addEventListener('click', () => {
      if(NAV.classList.contains('nav--active')) {
        openAndCloseBurger()
      }
    })
  }
