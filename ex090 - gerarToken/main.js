const btn = document.createElement("button");
const paragrafo = document.createElement("p");

btn.textContent = "Gerar token";
paragrafo.classList.add("token");
btn.addEventListener("click", () => gerarToken());

const body = document.querySelector("body");
body.append(btn, paragrafo);

function gerarToken(length = 150) {
  const caracteres =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmopqrstuvwxyz0123456789.-";

  let token = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * caracteres.length);
    token += caracteres[randomIndex];
  }

  paragrafo.textContent = token;
  return token;
}
