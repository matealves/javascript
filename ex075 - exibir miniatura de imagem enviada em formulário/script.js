const input = document.querySelector("#image");

const fileChanged = (e) => {
  const tgt = e.target || window.event.srcElement;
  const files = tgt.files;
  const fr = new FileReader();

  fr.onload = function () {
    document.querySelector("#preview-image").src = fr.result;
    document.querySelector(".box-image").style.display = "block";
  };

  fr.readAsDataURL(files[0]);
};

input.addEventListener("change", fileChanged);
