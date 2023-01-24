//### SELECIONANDO ELEMENTOS ###

// getElementById = seleciona o elemento através do id
// getElementByClassName = seleciona o elemento através do nome da class
// getElementByTagName = seleciona o elemento através do nome da tag
// querySelector = seleciona o primeiro elemento encontrado
// querySelectorAll = seleciona o primeiro elemento encontrado

//### MANIPULANDO CONTEÚDOS ###

// textContent = pegar ou alterar o contéudo de texto
// innerContent = altera o texto interno do HTML (apenas texto)
// innerHTML = adicionar HTML diretamente no elemento (utilizar tags) HTML interno
// outerHTML = HTML externo do elemento
// innerText = alterar texto interno
// value = pegar ou atribuir o valor de um elemento

//### MANIPULANDO ATRIBUTOS ###

// setAttribute('id', 'nomeId') = adicionar atributo
// getAttribute('id') = pegar o atributo
// removeAttribute('id') = remover atributo

//### MANIPULANDO ESTILOS (in-line) E CLASSES ###

// style.backgroundColor = atribuir ou pegar estilo
// classList = adicionar, remover ou pegar class do elemento
// toggle = se a class existir ele tira, se ela não existir ele coloca

//### NAVEGANDO PELOS ELEMENTOS ### (sem element pega espaço vazio)

// parentNode ou parentElement = selecionar elemento pai
// childNodes ou children = selecionar elementos filho
// firstChild / firstElementChild = selecionar primeiro filho / elemento filho
// lastChild / lastElementChild = selecionar último filho / elemento filho
// nextSibling / nextElementSibling = selecionar próximo irmão (element)
// previousSibling / previousElementSibling = selecionar irmão (element) anterior

//### CRIAR E ADICIONAR ELEMENTOS ###

// createElement = criar um elemento
// append = adicionar depois (depois de todos elementos)
// appendChild(elemento) = adiciona um elemento dentro
// prepend = adicionar antes (antes de todos elementos)
// insertBefore(div, menu) = insere item antes do element passado no parâmetro
// insertBefore(div, menu.nextElementSibling) = insere depois (insertAfter)
// elem.after(div) = insere depois

//### ADICIONAR EVENTOS VIA JS ###
//#TECLADO
// onkeydown = quando apertar a tecla
// onkeyup = quando soltar a tecla
// onkeypress = quando pressionar
//#ADD
// addEventListener('evento', function) =
// h1.onclick = function() {} ou h1.onclick = functionName (sobrescreve)
//#EVENT
// event = retorna o próprio evento (olhar propriedades disponíveis)
// event.key = retorna tecla pressionada
// event.currentTarget.value = retorna valor digitado no input
