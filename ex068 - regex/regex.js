// ### EXERCÍCIOS:

// CEP
let cep = "04830-220";
console.log(cep.match(/^([0-9]{5})\-([0-9]{3})$/g));
console.log(cep.match(/\d{5}[\s-]?\d{3}/g));

// CPF
let cpf = "456.987.132-67";
let regex = /^(\d{3})\.(\d{3})\.(\d{3})\-(\d{2})$/g;
// let regex = /(?:\d{3}[.-]?){3}\d{2}/g;
console.log(regex.test(cpf)); //boolean

// CNPJ
let cnpjs = [
  "00.000.000/0000-00",
  "00000000000000",
  "00-000-000-0000-00",
  "00.000.000/000000",
  "00.000.000.000000",
  "00.000.000.0000.00",
];
const regexCNPJ = /\d{2}[-.]?(?:\d{3}[-.]?){2}\/?\d{4}[-.]?\d{2}/g;
for (cnpj of cnpjs) {
  console.log(cnpj, cnpj.match(regexCNPJ));
}

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
console.log(
  telefone.match(/(?:\+?55\s?)?(?:\(?\d{2}\)?[-\s]?)?\d{4,5}[-\s]?\d{4}/g)
);

// E-MAIL
// const regexpEMAIL = /[\w.-]+@[\w-]+\.[\w-.]+/gi;
const regexpEMAIL = /[\w._-]+@[\w_-]+\.[\w-.]+/gi;

const emails = [
  "email@email.com",
  "email@email.com.org",
  "email-email@email.com",
  "email_email@email.com",
  "email.email23@email.com.br",
  "email.email23@empresa-sua.com.br",
  "c@contato.cc",
];
// http://emailregex.com/
for (email of emails) {
  console.log(email, email.match(regexpEMAIL));
}

// SENHA (com letra maiúscula, número e caráctere especial obrigatório)

// ENDEREÇO IP

// HEXADECIMAL (6 itens, de 0-9 e de A-F)
let hexadecimal = "#FF00CC";
console.log(
  hexadecimal.match(/^\#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/g)
);

// NUMEROS SEGUIDOS DE PX (NÃO PEGA O PX) positive/negative lookahead
let numeros = "2em, 4px, 5%, 2px, 1px";
console.log(numeros.replace(/\d(?=px)/gi, "5"));
console.log(numeros.replace(/\d(?!px)/gi, "10")); // negação

// GRUPOS SEPARADOS ($1 $2) ou único ($&)
let nome = "Alves, Mateus";
console.log(nome.replace(/(\w+),\s(\w+)/gi, "$2 $1"));

// TAGS ou apenas nome da TAG (positive lookbehiad)
const regexpTAG = /<\/?[\w\s="']+\/?>/gi;
const regexpNameTAG = /(?<=<\/?)[\w]+/gi;
const tags = [
  "<div>Isso é uma div</div>",
  '<div class="ativa">Essa está ativa</div>',
  '<img src="imagem" />',
  '<img src="imagem">',
  '<ul class="ativa">',
  "<li>Essa está ativa</li>",
  "</ul>",
];

for (tag of tags) {
  console.log(tag, tag.match(regexpTAG));
}
