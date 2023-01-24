//Callback função que aguarda o resultado chegar para executar
//Outras linhas de código não esperam
function alertar() {
  console.log("Callback!");
}
let nome = "Mateus";
setTimeout(alertar, 2000); // aguarda 2 segundos e roda a função
let sobrenome = "Alves";
console.log("Nome completo: "+nome+" "+sobrenome);
