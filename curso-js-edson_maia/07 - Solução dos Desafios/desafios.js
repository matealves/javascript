/* Desafio 01 */
let lutador = "Fedor Vladimirovich Emelianenko";
let nacionalidade = "Russo";
let idade = 44;
let peso = 106;
let altura = 1.83;

document.write(`<div class="card">
                <h2>Lutador</h2>
                <img src="images/fedor-2015.jpg">
                <p>${lutador} </p>
                <p>${nacionalidade} </p>
                <p>${idade} anos </p>
                <p>${peso} Kg </p>
                <p>${altura} m </p>
                </div>
            `);

/* Desafio 02 */
const dia = 10;
const mes = 09;
const ano = 2021;
const FraseDoDia =
  "Seja curioso. Leia de tudo. Tente coisas novas. O que as pessoas chamam de inteligência se resume a curiosidade.";
const Autoria = "Aaron Swartz";

document.write(`<div class="citacao">
                <h2>Frase do Dia</h2>
                <h3>${dia}/${mes}/${ano}</h3>
                <blockquote>&#10077;${FraseDoDia}&#10078;</blockquote>
                <p>${Autoria}</p>
                </div>
               `);

/* Desafio 03 */
let mesesDoAno = ["Janeiro", "Fevereiro", "Março"];

document.write(`<div class="meses">
                <h2>Array de Meses do Ano</h2>
                <p>${mesesDoAno[0]}, ${mesesDoAno[1]}, ${mesesDoAno[2]}, ... </p>
                </div>
              `);

/* Desafio 04 */
let jogo = {
  titulo: "League Of Legends - LOL",
  desenvolvedor: "Riot Games",
  anoLancamento: 2009,
};

document.write(`<div class="jogo">
                <h2>Jogo</h2>
                <span>Título</span>
                <p>${jogo.titulo}</p>
                <span>Desenvolvedor</span>
                <p>${jogo.desenvolvedor}</p>
                <span>Ano do Lançamento</span>
                <p>${jogo.anoLancamento}</p>
                </div>
              `);
