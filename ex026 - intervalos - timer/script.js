let timer;
function comecar() {
  timer = setInterval(showTime, 1000); //executar a cada 10s
}

function parar() {
  clearInterval(timer);
}

function showTime() {
  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();

  let txt = `${h}:${m}:${s}`;
  document.querySelector(".demo").innerHTML = txt;
}

//aguarda o tempo e executa depois
// setTimeout(function(){
//     alert('rodou');
// }, 2000);

//parar
// clearTimeout();
