const rainydays = document.querySelector(".tab-rainydays");
const museum = document.querySelector(".tab-museum");
const villabergås = document.querySelector(".tab-villabergås");

const rainydaysSection = document.querySelector(".rainydays-section");
const museumSection = document.querySelector(".museum-section");
const villabergåsSection = document.querySelector(".villabergås-section");



rainydays.addEventListener("click", () => {
    rainydaysSection.style.display = "block";
    villabergåsSection.style.display = "none";
    museumSection.style.display = "none";
})

museum.addEventListener("click", () => {
    museumSection.style.display = "block";
    rainydaysSection.style.display = "none";
    villabergåsSection.style.display = "none";
})

villabergås.addEventListener("click", () => {
    villabergåsSection.style.display = "block";
    museumSection.style.display = "none";
    rainydaysSection.style.display = "none";
})