let info = ["Bonieky Lacerda", "Bonieky", "Lacerda", "@bonieky"];
//possso deixar vazio se não quiser declarar
let [nomeCompleto, , , instagram] = info;
console.log(nomeCompleto, instagram);

//método 2 (pouco utilizado) - cria já desconstruindo
let array = ([noome, sobrenoome, idade = 22] = ["Mateus", "Alves"]);
console.log(noome, sobrenoome, idade);

//método 3
function criar() {
  return [1, 2, 3];
}

let [a, b, c] = criar();
console.log(a, b, c);
