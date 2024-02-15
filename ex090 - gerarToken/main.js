const btn = document.createElement("button");
const paragrafo = document.createElement("p");

btn.textContent = "Gerar token";
paragrafo.classList.add("token");
btn.addEventListener("click", () => {
  paragrafo.textContent = gerarToken();
});

const body = document.querySelector("body");
body.append(btn, paragrafo);

// Passar quantidade de caracteres, caso contrário retorna com 150
function gerarToken(length = 150) {
  const caracteres =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmopqrstuvwxyz0123456789.-";

  let token = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * caracteres.length);
    token += caracteres[randomIndex];
  }

  return token;
}
