function requisitar() {
  const url = "https://alunos.b7web.com.br/api/ping";
  const params = {
    method: "GET",
  };

  fetch(url, params) //Promessa
    .then((r) => r.json()) // fica aguardando retorno
    .then((json) => {
      console.log(json);
    });

  console.log("Executou antes");
}

//async não vai ficar esperando fora da função, e sim dentro
async function requisitar2() {
  const url = "https://alunos.b7web.com.br/api/ping";
  const params = {
    method: "GET",
  };
  // espera a resposta e armazena
  const r = await fetch(url, params);
  const json = await r.json(); 

  console.log(json);
  console.log("Executou depois");
}

//o que está dentro ele espera, o que está fora não

requisitar2();

console.log("Executou antes de tudo");
