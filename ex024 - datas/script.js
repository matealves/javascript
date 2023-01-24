let d = new Date();
let data = d;

//saber o ano da data
data = d.getFullYear();

//saber o mês da data
data = d.getMonth();

//saber o dia atual
data = d.getDate();

//saber o dia da semana 0-6 (domingo = 0)
data = d.getDay();

//saber a hora
data = d.getHours();

//saber o minuto
data = d.getMinutes();

//saber os segundos
data = d.getSeconds();

//saber os milisegundos
data = d.getMilliseconds();

//saber os milisegundos entre 1970 até atualmente
data = d.getTime();
data = Date.now();

//trocar informações - usar .set
d.setFullYear(2023);
d.setMonth(10);
d.setMinutes(55);
d.setDate(15);

//Aumentar data de hoje
d.setDate(d.getDate() + 90);
d.setHours(d.getHours() - 24);

console.log(data.toLocaleString()); //testar .to
