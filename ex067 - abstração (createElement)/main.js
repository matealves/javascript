const createElement = (elementName, attributes) => {
  const element = document.createElement(elementName);
  const attributesAsArray = Object.entries(attributes);

  attributesAsArray.forEach(([key, value]) => element.setAttribute(key, value));

  return element;
};

const input = createElement("input", {
  type: "radio",
  id: "input1",
  name: "main",
  value: "principal",
  for: "input1",
  "data-js": "input1",
});

console.log(input);
