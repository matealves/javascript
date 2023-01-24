/* ### Celsius em Fahrenheit

Crie uma função que receba uma string em celcius ou fahrenheit e faça a transformação de uma unidade para outra.

C = (F - 32) * 5/9

F = C * 9/5 + 32

*/

// transformGraus('50F')
function transformGraus(graus) {
  const celsiusExists = graus.toUpperCase().includes("C");
  const fahrenheitExists = graus.toUpperCase().includes("F");

  if (!celsiusExists && !fahrenheitExists) {
    throw new Error("Grau não identificado."); //exibe rastreamento do erro.
  }
  // fluxo ideal, F -> C
  // com expressão regular
  let updatedGrau = Number(graus.toUpperCase().replace(/([^\d])+/gim, "")); //retirar qualquer letra
  // let updatedGrau = graus.toUpperCase().replace(/([0-9])+/gim, ""); //retirar qualquer número
  let formula = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
  let sinalGrau = "º Celsius";

  // fluxo alternativo, C -> F
  // com expressão regular
  if (celsiusExists) {
    updatedGrau = Number(graus.toUpperCase().replace(/([^\d])+/gim, ""));
    formula = (celsius) => (celsius * 9) / 5 + 32;
    sinalGrau = "º Fahrenheit";
  }
  return formula(updatedGrau).toFixed(2) + sinalGrau; //n+"ºC"
}

try {
  console.log(transformGraus("91F"));
  console.log(transformGraus("32C"));
  // transformGraus("50Z"); //exibir erro
} catch (error) {
  console.log(error.message); //.message exibe só o erro, oculta rastreamento.
}
