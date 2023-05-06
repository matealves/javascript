function getCurrentDate() {
  const data = new Date();

  const dia = String(data.getDate()).padStart(2, "0"); // 1 -> 01
  const mes = String(data.getMonth() + 1).padStart(2, "0"); // jan = 0
  const ano = data.getFullYear();

  const dataAtual = `${dia}/${mes}/${ano}`;
  console.log(dataAtual);

  return dataAtual;
}

getCurrentDate();
