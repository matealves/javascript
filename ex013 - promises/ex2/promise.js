// Criação de promessa
const myPromise = new Promise((resolve, reject) => {
  const nome = "João";

  if (nome == "Mateus") {
    resolve("Acesso autorizado.");
  } else {
    reject("Usuário não encontrado no banco de dados.");
  }
});
// .then() executa a promessa(resolve) e o .catch() o reject(erro)
myPromise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("Não foi possível acessar os dados. \n" + err);
  });

// Encadeamento de then's
const myPromise2 = new Promise((resolve, reject) => {
  const nome = "Mateus";

  if (nome == "Mateus") {
    resolve("Acesso autorizado.");
  } else {
    reject("Você não possui permissões para acessar!");
  }
});

myPromise2
  .then((data) => {
    return data.toUpperCase();
  })
  .then((stringModify) => {
    console.log(stringModify);
  });

// Resolvendo várias promessas com all (aguarda todas se resolverem)
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P1 OK! Timeout");
  }, 2000);
});
const p2 = new Promise((resolve, reject) => {
  resolve("P2 OK!");
});
const p3 = new Promise((resolve, reject) => {
  resolve("P3 OK!");
});

const resolveAll = Promise.all([p1, p2, p3]).then((data) => {
  console.log(data);
});

// Resolvendo várias promessas com race
// Resolve a primeira resposta das Promises
const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("P4 OK! Timeout");
  }, 2000);
});
const p5 = new Promise((resolve, reject) => {
  resolve("P5 OK!");
});
const p6 = new Promise((resolve, reject) => {
  resolve("P6 OK!");
});

const resolveRace = Promise.race([p4, p5, p6]).then((data) => {
  console.log(data);
});
