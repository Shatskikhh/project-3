const showMoreBtn = document.querySelector(".change__btn");
const brands = document.querySelectorAll(".hidden_brand");
const slider = document.querySelector(".swipper");
const cardItem = document.querySelectorAll(".card__items");
const card = document.querySelectorAll(".card");

for (let i = 0; i < brands.length; i++) {
  cardItem[i].classList.remove("hidden_brand");
  // toggleBtn(cardItem[i]);
}

function toogleBtn(item) {
  showMoreBtn.addEventListener("click", function () {
    if (brand.classList.contains("hidden_brand")) {
      showMoreBtn.textContent = "скрыть";
      brand.classList.add("visible_brand");
      brand.classList.remove("hidden_brand");
    } else {
      showMoreBtn.textContent = "Показать всё";
      brand.classList.add("hidden_brand");
      brand.classList.remove("visible_brand");
    }
  });
}
