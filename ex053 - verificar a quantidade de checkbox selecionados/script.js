let checkBoxes = document.querySelectorAll(".checkbox");
let selecionados = 0;

let btn = document.querySelector("#send");

btn.addEventListener("click", function (e) {
  e.preventDefault();

  selecionados = 0;

  checkBoxes.forEach((elem) => {
    if (elem.checked) {
      selecionados++;
    }
  });

  console.log(selecionados);
});
