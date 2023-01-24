// function ApertouTecla(event) {
//     let enter = event.keyCode;

//     console.log("Apertou a tecla: "+event.keyCode);
//     // console.log(enter)

//     if(enter == 13) {
//         return tela();
//     }

// }

// function tela() {

//     console.log("ENTER");
// }

// keypress
// keydown - quando apertar
// keyup - quando soltar a tecla

document.addEventListener("keyup", function (event) {
  //   console.log(event.key);

  if (event.key === "Enter") {
    const btn = document.querySelector("#send");

    btn.click();
  }
});

//detalhes sobre o evento: comentar logs e chamar função
//event seleciona o próprio evento
// if(event.keyCode == 13 && event.ctrlKey == true) : só funciona com Ctrl Enter
function teste(event) {
  console.log(event.key); // nome da tecla
  console.log(event.keyCode); // código da tecla
}
