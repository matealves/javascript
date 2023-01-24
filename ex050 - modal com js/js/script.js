const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const fade = document.querySelector("#fade");
const modal = document.querySelector("#modal");

const toggleModal = () => {
  [fade, modal].forEach((el) => {
    el.classList.toggle("hide");
  });
};

[openModalButton, closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => {
    toggleModal();
  });
});
