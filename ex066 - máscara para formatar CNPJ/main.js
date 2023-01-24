//CPNJ
const cnpj = "37356542000108";
let regex = /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/;
let mascara = "$1.$2.$3/$4-$5";

let resultado = cnpj.replace(regex, mascara);
console.log("CNPJ:", resultado);

// CEP
const cep = "04830220";
let regex2 = /^(\d{5})(\d{2})/;
let mascara2 = "$1-$2";

let resultado2 = cep.replace(regex2, mascara2);
console.log("CEP:", resultado2);

// Celular
const celular = "11966616365";
let regex3 = /^(\d{2})(\d{5})(\d{4})/;
let mascara3 = "($1) $2-$3";

let resultado3 = celular.replace(regex3, mascara3);
console.log("Telefone:", resultado3);
