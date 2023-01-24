// Fetch request na API do GitHub
// Fetch API (nativo do JS)

const userName = "matealves";

fetch(`https://api.github.com/users/${userName}`, {
  method: "GET",
  headers: {
    Accept: "application/vnd.github.v3+json",
  },
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    console.log(`Usuário: ${data.name}`);
    console.log(`Empresa: ${data.company}`);
    console.log(`Bio: ${data.bio}`);
  })
  .catch((err) => {
    console.log(
      `Houve algum problema na API, entre em contato com o Dev!\n${err}`
    );
  });
