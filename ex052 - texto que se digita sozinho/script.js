const el = document.querySelector("#text");
const text = "O JavaScript é muito interessante!";
const interval = 200;

function showText(el, text, interval) {
  const char = text.split("").reverse();

  const typer = setInterval(() => {
    if (!char.length) {
      return clearInterval(typer);
    }

    const next = char.pop();
    el.textContent += next;
  }, interval);
}

showText(el, text, interval);
