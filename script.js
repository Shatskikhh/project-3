const showBtn = document.querySelector(".change__btn");
const cardContainer = document.querySelector(".card__container");
const cardItem = cardContainer.querySelectorAll(".card__item");

for (let i = 6; i < cardItem.length; i++) {
  cardItem[i].classList.toggle("hidden");
  toggleBtn(cardItem[i]);
}
function toggleBtn(item) {
  showBtn.addEventListener("click", function () {
    item.classList.toggle("hidden");
    showBtn.classList.toggle("revert");
    showBtn.textContent = item.classList.contains("hidden")
      ? "Показать все"
      : "Скрыть";
  });
}

let init = false;
let swiper;
function swiperCard() {
  if (window.innerWidth <= 767) {
    if (!init) {
      init = true;
      swiper = new Swiper(".swiper", {
        direction: "horizontal",
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 32,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }
  } else if (init) {
    swiper.destroy();
    init = false;
  }
}
swiperCard();
window.addEventListener("resize", swiperCard);
