/* 
  ## Buscando e encontrando dados em Array ##

  Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios

  - Contar o número de categorias e o número de livros em cada categoria;
  - Contar o número de autores;
  - Mostrar livros do autor Auguto Cury;
  - Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor;
*/

const booksByCategory = [
  {
    category: "Riqueza",
    books: [
      {
        title: "Os segredos da mente milionária",
        author: "T. Harv Eker",
      },
      {
        title: "O homem mais rico da Babilônia",
        author: "George S. Clason",
      },
      {
        title: "Pai rico, pai pobre",
        author: "Robert T. Kyosaki e Sharon L. Lechter",
      },
    ],
  },
  {
    category: "Inteligencia Emocional",
    books: [
      {
        title: "Você é Insubstituível",
        author: "Augusto Cury",
      },
      {
        title: "Ansiedade - Como enfrentar o mal do século",
        author: "Augusto Cury",
      },
    ],
  },
];

const totalCategories = booksByCategory.length;
console.log(`Categorias: ${totalCategories}`);
for (let category of booksByCategory) {
  console.log(
    `livros da categoria: ${category.category}: ${category.books.length}`
  );
}

function contarAutores() {
  let authors = [];

  //Se o autor não estiver em "authors" (== -1), inserir.
  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (authors.indexOf(book.author) == -1) {
        authors.push(book.author);
      }
    }
  }
  console.log(`Autores: ${authors.length}`);
}
contarAutores();

function booksOfAuthor(author) {
  let books = [];

  //Se o autor inserido tiver livros, exibir.
  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (book.author === author) {
        books.push(book.title);
      }
    }
  }
  //join() junta elementos do array com parâmetro como separador
  console.log(`Livros do Autor ${author}: ${books.join(", ")}`);
}
//Autores disponíveis: "Augusto Cury", "Robert T. Kyosaki e Sharon L. Lechter", "T. Harv Eker" ou "George S. Clason"
booksOfAuthor("George S. Clason");
