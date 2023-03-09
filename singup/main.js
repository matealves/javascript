const inputs = document.querySelectorAll("input");
const buttons = document.querySelectorAll("button[type=button]");

const swiper = new Swiper(".swiper", {
  // Optional parameters
  speed: 500,
  allowTouchMove: false,
});

const goToSlide = (index) => {
  swiper.slideTo(index);
};

const restart = () => {
  buttons.forEach((button) => {
    button.disabled = true;
  });

  inputs.forEach((input) => {
    input.value = "";
  });

  goToSlide(0);
};

const checkValid = (event) => {
  event.target.nextElementSibling.disabled = !event.target.value.length;
};

inputs.forEach((input) => {
  input.addEventListener("input", checkValid);
});
