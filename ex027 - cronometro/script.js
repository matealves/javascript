let demo = document.querySelector("#demo");
let d = new Date(0);
let ml = 31;
let show;
function showtime() {
  ml += 31;
  d.setHours(0, 0, 0, ml);
  let h = ("00" + d.getHours()).slice(-2);
  let m = ("00" + d.getMinutes()).slice(-2);
  let s = ("00" + d.getSeconds()).slice(-2);
  let ms = ("000" + d.getMilliseconds()).slice(-3);
  demo.innerHTML = h + ":" + m + ":" + s + ":" + ms;
}

function start() {
  show = setInterval(showtime, 31);
}
function stop() {
  clearInterval(show);
}
function reset() {
  clearInterval(show);
  demo.innerHTML = "00:00:00:000";
  ml = 31;
}
