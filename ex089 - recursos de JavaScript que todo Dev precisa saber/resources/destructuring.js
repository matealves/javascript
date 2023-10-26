// Desestruturar objetos
const usuario = {
  nome: "Mateus",
  idade: 24,
  email: "mateus@email.com",
};

// extrair nome e email
const { nome, email } = usuario;

console.log("nome: ", nome);
console.log("email: ", email);

// Desestruturar arrays
const numeros = [1, 2, 3];

const [a, b, c] = numeros;

console.log("a: ", a);
console.log("b: ", b);
console.log("c: ", c);

// #########

function exibeDadosUsuario({ nome, email }) {
  console.log("Nome: ", nome);
  console.log("Email: ", email);
}

exibeDadosUsuario(usuario);
