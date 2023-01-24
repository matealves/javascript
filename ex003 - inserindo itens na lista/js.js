function addIngrediente() {
    let ing = document.getElementById('ingrediente').value;

    let listaHtml = document.getElementById('lista').innerHTML;

    listaHtml += "<li>"+ing+"</li>"

    document.getElementById('lista').innerHTML = listaHtml;
};