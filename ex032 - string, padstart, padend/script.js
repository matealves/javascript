//cartão mascarado
let cartao = "1234 5678 1854 9101";
let lastDigits = cartao.slice(-4);
let cardMascared = lastDigits.padStart(20, " ****");
console.log(`Usar cartão com final${cardMascared} nessa compra?`);

//pegando números do meio
const maskCpf = (cpf, replace = "*") => {
  const start = 12;
  const end = 15;
  return cpf.substring(3, start).padStart(start, replace).padEnd(end, replace);
};

console.log(maskCpf("111.111.111-11"));
