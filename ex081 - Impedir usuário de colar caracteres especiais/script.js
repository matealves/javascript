const input = document.querySelector("#name");

input.addEventListener("paste", function () {
  const regex = new RegExp("^[0-9a-zA-Z\b]+$");
  const self = this;

  setTimeout(() => {
    let text = self.value;
    if (!regex.test(text)) {
      self.value = "";
    }
  }, 10);

  console.log(regex);
});
