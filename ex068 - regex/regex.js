// ### EXERCÍCIOS:

// CEP
let cep = "04830-220";
console.log(cep.match(/^([0-9]{5})\-([0-9]{3})$/g));

// CPF
let cpf = "456.987.132-67";
let regex = /^(\d{3})\.(\d{3})\.(\d{3})\-(\d{2})$/g;
console.log(regex.test(cpf)); //boolean

// DATA
let date = "2022-12-15";
let regexDate = /([0-9]{4})\-(\d{2})\-([0-9]{2})/g;
// console.log(date.replace(/-/g, "/"));
console.log(date.split("-").reverse().join("/"));

// NOME COMPLETO
let espaco = "Mateus Alves da Silva";
console.log(espaco.match(/^([A-z\s]){1,}$/g));

// DOMÍNIO
let dominio = "https://www.google.com";
console.log(
  dominio.match(
    /((ftp|http(s)?)\:\/\/)?([a-z0-9\-]{2,}\.)?([a-z0-9\-]{2,})\.([a-z0-9]{1,})(\.[a-z0-9]{1,})?/g
  )
);

// NEGAR TEXTO
let lettersNegacao = "15151-@#$%";
console.log(lettersNegacao.match(/(^[^a-zA-Z]+)$/g));

// TEXTO COM CARACTERES ESPECIAIS
let textoCaracEspeciais = "Mateus@senha.teste!";
console.log(textoCaracEspeciais.match(/^([a-zA-Z0-9\.\@\!]){1,}$/g));

// TELEFONE (com ou sem dígito 9)
let telefone = "96661-6365";
console.log(telefone.match(/^([9]{1})?(\d{4})\-(\d{4})$/g));

// E-MAIL

// SENHA (com letra maiúscula, número e caráctere especial obrigatório)

// ENDEREÇO IP

// HEXADECIMAL (6 itens, de 0-9 e de A-F)
let hexadecimal = "#FF00CC";
console.log(
  hexadecimal.match(/^\#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/g)
);
