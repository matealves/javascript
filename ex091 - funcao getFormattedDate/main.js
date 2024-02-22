function getFormattedDate(data = false) {
  const newDate = data ? new Date(data) : new Date();

  const dia = newDate.getDate().toString().padStart(2, "0"),
    mes = (newDate.getMonth() + 1).toString().padStart(2, "0"),
    ano = newDate.getFullYear(),
    horas = newDate.getHours().toString().padStart(2, "0"),
    minutos = newDate.getMinutes().toString().padStart(2, "0");

  return {
    shortDate: `${dia}/${mes} às ${horas}:${minutos}`,
    fullDate: `${dia}/${mes}/${ano} às ${horas}:${minutos}`,
    justDate: `${dia}/${mes}/${ano}`,
    dateValue: `${ano}-${mes}-${dia}`,
    dia,
    mes,
    ano,
    horas,
    minutos,
  };
}

getFormattedDate();
