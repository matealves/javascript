const select = document.querySelector("#options");

const index = select.selectedIndex;
const value = select.value;
const text = select.options[index].text;

console.log(select);

console.log(index, "index");
console.log(value, "value");
console.log(text);
