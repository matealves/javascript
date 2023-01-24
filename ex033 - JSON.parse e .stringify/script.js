// Quando queremos enviar um JSON devemos converter para string.
// JSON.stringify() = inverso do parse, transforma um JSON em string.
let string = JSON.stringify({ name: "Mateus", age: 23, result: true });
console.log(string);
// expected output: {"name":"Mateus","age":23,"result":true}

// Quando temos o retorno de uma requisição é JSON em formato string.
// JSON.parse() = transforma uma string para JSON
const json = '{"name": "Mateus", "age": 23, "result": true}';
const obj = JSON.parse(json);
console.log(obj.name);
// expected output: Mateus
console.log(obj.age);
// expected output: 42
console.log(obj.result);
// expected output: true

console.log("");

//######################################

const objs = [
  {
    nome: "Mateus Alves",
    departamento: "Desenvolvimento",
    software: {
      admin: true,
      keys: ["aKNaN4HB&34", "lM&54GFVb7"],
    },
    permission: true,
  },
  {
    nome: "João Pedro",
    departamento: "Financeiro",
    software: {
      admin: false,
      keys: ["aa00f", "aa00f"],
    },
    permission: false,
  },
];

// JSON
// converter objeto para json válido(string) para ENVIAR para a API
const jsonData = JSON.stringify(objs);
console.log(jsonData);
console.log(typeof jsonData);

// converter json(string) RECEBIDO da API para objeto
const objData = JSON.parse(jsonData);
console.log(objData);
console.log(typeof objData);

objData.map((pessoa) => {
  console.log(pessoa.nome);
});
