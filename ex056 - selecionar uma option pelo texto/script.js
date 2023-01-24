const texto = "Volkswagen";
const select = document.querySelector("#marcas");

for (let i = 0; i < select.length; i++) {
  if (select.options[i].text === texto) {
    select.selectedIndex = i;
    break;
  }
}
