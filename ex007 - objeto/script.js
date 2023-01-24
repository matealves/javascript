function Estoque() {
  this.camisa = 80;
  this.calça = 70;
  this.jaqueta = 30;
  this.tenis = 300;

    this.vendacamisaM = function(venda) {
        this.camisa = this.camisa - venda;
        console.log(masculino);
    }
}

let masculino = new Estoque();
masculino.camisa = 30;
masculino.calça = 25;
masculino.jaqueta = 12;
masculino.tenis = 130;

let feminino = new Estoque();
feminino.camisa = 50;
feminino.calça = 45;
feminino.jaqueta = 18;
feminino.tenis = 170;




// Exercício com desconstrução de objetos, objeto literal e string dinâmica.
function addEndereco(endereco) {
  const { cidade, estado} = endereco; // desconsntruindo

   const novoEndereco = { cidade, estado, pais: 'Brasil' }; //Obj literal

  console.log(`${novoEndereco.cidade}, ${novoEndereco.estado}, ${novoEndereco.pais}`);
}

addEndereco({cidade: 'São Paulo', estado: 'SP'});