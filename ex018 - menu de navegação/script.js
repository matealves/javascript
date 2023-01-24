//Método1  //.contains verifica se tem aquela classe
function toggleMenu() {
    let menuArea = document.getElementById('menu-area');

    if(menuArea.classList.contains('menu-opened') == true) {
        menuArea.classList.remove('menu-opened');
    } else {
        menuArea.classList.add('menu-opened');
    }
}

//Método alternativo:
// function toggleMenu() {
//   let menuArea = document.getElementById("menu-area");

//   if (menuArea.style.width == "200px") {
//     menuArea.style.width = "0px";
//   } else {
//     menuArea.style.width = "200px";
//   }
// }
