/* colcar async antes da função
await vai executar e parar a execução no await e só vai continuar quando tiver o resultado.
##Ao usar o await em que ter o async antes da função)
*/

async function loadPosts() {
  document.getElementById("posts").innerHTML = "Carregando...";
  async function cerregar() {
    //exibir carregamento maior
    let req = await fetch("https://jsonplaceholder.typicode.com/users");
    let json = await req.json();
    montarBlog(json);
    console.log(json);
  }
  setTimeout(cerregar, 1000); //exibir carregamento maior
}

function montarBlog(lista) {
  let html = "";

  for (let i in lista) {
    html += "<h3>" + lista[i].username + "</h3>";
    html += lista[i].email + "<br/>";
    html += "<hr/>";
  }
  document.getElementById("posts").innerHTML = html;
}

/*
  //opção2 -- SEM await
  // fetch() retorna uma promessa

function loadPosts() {
  document.getElementById("posts").innerHTML = "Carregando...";
  function cerregar() {
    //exibir carregamento maior
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(function (resultado) {
        return resultado.json();
      })
      .then(function (json) {
        montarBlog(json);
        console.log(json);
        // document.getElementById("posts").innerHTML = json.length + " objs";
      })
      .catch(function () {
        console.log("Erro na requisição!");
      });

    //opção2
    //  let req = fetch();
    // req.then();
  }
  setTimeout(cerregar, 1200); //exibir carregamento maior
}

function montarBlog(lista) {
  let html = "";

  for (let i in lista) {
    html += "<h3>" + lista[i].title + "</h3>";
    html += lista[i].body + "<br/>";
    html += "<hr/>";
  }
  document.getElementById("posts").innerHTML = html;
}
*/