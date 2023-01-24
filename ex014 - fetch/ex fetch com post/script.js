async function inserirPost() {
  document.getElementById("post").innerHTML = "Carregando...";

  /* ## Usar segundo parâmetro do fetch para utilizar outro "method" 
  (vazio/padrão GET) */
  let req = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "Titulo de teste",
      body: "Corpo de teste",
      userId: 4,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  let json = await req.json();
  console.log(json);
  document.getElementById("post").innerHTML = `Título: ${json.title}<br/> Corpo: ${json.body}<br/> userId: ${json.userId}`;
}
