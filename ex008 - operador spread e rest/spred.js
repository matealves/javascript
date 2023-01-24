// exemplo01
let numeros = [1, 2, 3, 4];
// complementa a variável outros com o array anterior
let outros = [...numeros, 5, 6, 7, 8];
console.log(outros);

// exemplo02
let info = {
  nome: "Mateus",
  sobrenome: "Alves",
};

let novaInfo = {
  ...info,
  cidade: "São Paulo",
  estado: "SP",
  pais: "Brasil",
};
console.log(novaInfo);

// exemplo03 - MAIS UTILIZADO
function adicionarInfo(info) {
  let novasInfo = {
    ...info,
    status: "Active",
    token: "EfK15sRfa5",
  };
  return novasInfo;
}
console.log(adicionarInfo({ User: "14585", Permission: "Admin" }));

//exemplo04 - com arrow function
let mesclarObjetos = (object1) => (object2) => ({ ...object1, ...object2 });
let MesclarInfoCom = mesclarObjetos({
  nome: "Bonieky",
  sobrenome: "Lacerda",
  idade: 32,
});

console.log(
  MesclarInfoCom({ cidade: "Campina Grande", estado: "PB", pais: "BR" })
);

/** EXEMPLO Retornar outras funções */
function somar(x) {
  function somarComX(y) {
    return x + y;
  }
  return somarComX;
}

somar(1)(2);
