// ASSÍNCRONO - Faz várias requisições ao mesmo tempo
// Não espera uma acabar pra fazer outra requisição
// Executa quando tiver o resultado. Independente da ordem
function fazer() {
  document.getElementById("demo").innerHTML = `Carregando...`;
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("OK");
    }, 3000);
  });
  return promise;
}

fazer()
  //.then() = quando tiver o resultado, você executa isso:
  .then((resposta) => {
    console.log("Retorno do servidor: " + resposta);
    document.getElementById(
      "demo"
    ).innerHTML = `Retorno do servidor: ${resposta}`;
  });

//
// Aula 2022
// Exemplo de callback
function pegarTemperatura() {
  return new Promise(function (resolve, reject) {
    console.log("Pegando temperatura...");

    setTimeout(function () {
      resolve("40ºC");
    }, 2000);
  });
}

//USANDO A PROMISE
let temp = pegarTemperatura();
//pega a temperatura, .then() (e então...)
temp.then(function (resultado) {
  console.log("TEMPERATURA: " + resultado);
});
//.catch = quando der errado (reject)
temp.catch(function (error) {
  console.log("Não foi possível verificar a temperatura.");
});
