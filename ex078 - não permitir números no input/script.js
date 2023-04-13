const inputName = document.querySelector("#name");

const numberIgnore = (e) => {
  const keyCode = e.keyCode;
  // http://www.foreui.com/articles/Key_Code_Table.htm

  if (keyCode > 47 && keyCode < 58) {
    e.preventDefault();
  }
};

inputName.addEventListener("keypress", numberIgnore);
