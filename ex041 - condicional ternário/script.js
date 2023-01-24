let isMember = true; // true or false
let shipping = isMember ? 9 : 14;

console.log(isMember ? "Você é membro" : "Você não é membro");
console.log(`Frete: R$ ${shipping},90`);

let bank = 32;
let pay = bank >= 30 ? "Pedido finalizado!" : "Recusado.";

console.log(pay);
