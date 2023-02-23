let array = ["TEXTO", "TEXTO2", "TEXTO3", "TEXTO4"];

array.map((item) => {
  let clone = document.querySelector(".clone .container").cloneNode(true);

  clone.querySelector(".title").textContent = item;
  clone.querySelector(".content").textContent = item;

  document.querySelector(".clone").appendChild(clone);
  console.log(clone);
});
