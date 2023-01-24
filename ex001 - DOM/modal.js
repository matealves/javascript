const buttonOpenModal = document.getElementById("openModal");
const modalWrapper = document.querySelector(".modal-wrapper");

buttonOpenModal.addEventListener("click", () => {
  modalWrapper.classList.remove("invisible");
});

document.addEventListener("keydown", (event) => {
  const isEscKey = event.key === "Escape";

  if (!modalWrapper.classList.contains("invisible") && isEscKey) {
    modalWrapper.classList.add("invisible");
  }
});
