//importando de uma biblioteca própria
//colocar type="module" no HTML

import {somar, subtrair, dividir, multiplicar, criador} from './matematica.js';

console.log(somar(50,23));
console.log(subtrair(50,23));
console.log(dividir(50,23).toFixed(2));
console.log(multiplicar(50,23));

console.log("Criador da biblioteca matematica.js: "+criador);


import { Gato } from './animal.js';

let gato = new Gato(4, 'Pintado');

console.log(gato.dados + ", " + gato.cor);