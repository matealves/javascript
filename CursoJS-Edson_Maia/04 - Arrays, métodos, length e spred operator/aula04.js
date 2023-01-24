let produtos = ["Arroz", "Feijão", "Carne"];
let codigos = Array(10, 20, 30);
let meses = ["Jan", "Feb", "Mar", "Abr"];
meses[0] = "Janeiro";

// ADICIONAR NO FINAL push = empurre
produtos.push("Açúcar", "Trigo");
codigos.push(40, 50, 60, 70);
meses.push("Mai", "Jun", "Jul", "Ago", "07");

// REMOVER DO FINAL pop = estourar
produtos.pop();
codigos.pop();
meses.pop();

// ADICIONAR NO INÍCIO unshift
produtos.unshift("Uva", "Maçã");

// REMOVER DO INÍCIO shift
produtos.shift();

// REMOVER DE UMA POSIÇÃO ESPECÍFICA splice = emendar
// posição inicial, quantos remover
codigos.splice(1, 3);

// COPIAR DE UMA POSIÇÃO ESPECÍFICA slice = fatiar porção
// posição inicial, quantos copiar
let meses1 = meses.slice();
let meses2 = meses.slice(0, 3);

//TAMANHO DO ARRAY length = comprimento
meses.length;
meses1.length;
meses2.length;

// spred operador ... copiar
let teste = [...produtos, "Ovo", "Banana"];
