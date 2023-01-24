// sintaxe
function primeiraFuncao() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Dados recebidos!");
      resolve();
    }, 1500);
  });
}

async function segundaFuncao() {
  console.log("Iniciou");
  await primeiraFuncao();
  console.log("Terminou");
}
segundaFuncao();

//################################
// prática (mundo real)
function getUser(id) {
  return fetch(`https://reqres.in/api/users?id=${id}`)
    .then((data) => {
      return data.json();
    })
    .catch((err) => console.log(err)); // sem {} o return é automático
}

async function showUserName(id) {
  try {
    const user = await getUser(id);
    console.log(
      `Id: ${user.data.id}\nNome: ${user.data.first_name}\nSobrenome: ${user.data.last_name}\nE-mail: ${user.data.email}`
    );
  } catch (err) {
    console.log(`Erro: ${err}`);
  }
}
showUserName(3);

async function get() {
  return await fetch(`https://reqres.in/api/users`)
    .then((reponse) => reponse.json())
    .then((data) => {
      console.log("\n⬇️ Dados do GET da API ⬇️");
      console.log(data);
    })
    .catch((err) => console.log(err));
}
get();
