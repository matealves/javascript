// on mousedown
document.addEventListener("mousedown", function (e) {
  if (e.button === 1) {
    return false;
  }

  console.log(e.button);
});
