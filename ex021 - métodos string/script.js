let nome = "Mateus Alves Silva";

// quatos caracteres
let resultado = nome.length;

// Verifica se tem o valor na string (se não -1)
resultado = nome.indexOf("Alves");

// extrair a partir da posição
// (<0) começa do final
resultado = nome.slice(0, 6); //(7)

//substituir string
//(pesquise por, troque por)
resultado = nome.replace("Alves", "Silva");

//minúscula
resultado = nome.toLowerCase();

//MAIÚSCULA
resultado = nome.toUpperCase();

//Remove espaços do início e do fim
resultado = nome.trim();

//Qual caractere está na posição (x)
resultado = nome.charAt(3); // nome[3]

// Separa e transforma em array a partir da condição
resultado = nome.split(' ');

console.log(resultado);
