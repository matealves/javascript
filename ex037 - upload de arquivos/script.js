async function enviar() {
  let arquivo = document.getElementById("arquivo").files[0];
  console.log(arquivo);
  /* 
  ## Quando houver upload de arquivos no meio da requisição, tem que se usar o FormData()
  - Verificar envio no DevTools > Network > /subdiretório > Payload
  */
  let body = new FormData();
  body.append("title", "Titulo de teste");
  body.append("arquivo", arquivo);

  let req = await fetch("https://www.meusite.com.br/mateus", {
    method: "POST",
    body: body,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}
