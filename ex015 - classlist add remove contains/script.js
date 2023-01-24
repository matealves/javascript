function trocar() {
  if (document.querySelector("button").classList.contains("preto")) {
    document.querySelector("button").classList.remove("preto");
    document.querySelector("button").classList.add("verde");
  } else {
    document.querySelector("button").classList.remove("verde");
    document.querySelector("button").classList.add("preto");
  }
}

// .classList.add('verde') = adiciona class "verde" na div
// .classList.remove('preto') = remove a class "preto" da div
// .classList.contains('preto') = verifica se já tem a class preto na div
