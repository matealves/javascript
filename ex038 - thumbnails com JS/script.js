function mostrar() {
  let imagem = document.getElementById("imagem").files[0];
  console.log(imagem);

  // Criando URL de imagem, sem fazer upload
  let img = document.createElement("img");
  img.src = URL.createObjectURL(imagem);
  img.width = 300;

  //appendChild() acrescenta um item no final
  document.getElementById("demo").appendChild(img);
}

//MÉTODO 2 - com FileReader()
// function mostrar() {
//   let reader = new FileReader();
//   let imagem = document.getElementById("imagem").files[0];

//   reader.onloadend = function () {
//     let img = document.createElement("img");
//     img.src = reader.result;
//     img.width = 300;

//     document.getElementById("demo").appendChild(img);
//   };

//   reader.readAsDataURL(imagem);
// }

let browser = navigator.appCodeName;
console.log("Browser Name: " + browser);
