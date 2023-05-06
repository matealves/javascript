const url = "https://www.google.com";
const button = document.querySelector("#btn");

function openInNewTab(url) {
  const win = window.open(url, "_blank");
  win.focus();
}

button.addEventListener("click", () => {
  openInNewTab(url);
});
