let cars = [
  { marca: "VW", motor: 2.0 },
  { marca: "Fiat", motor: 1.0 },
  { marca: "BMW", motor: 1.4 },
  { marca: "Chevrolet", motor: 2.0 },
];

console.log(cars);

function removeItem(array, propriedade, value) {
  return cars.filter(function (item) {
    return item[propriedade] !== value;
  });
}

let filterCars = removeItem(cars, "marca", "Fiat");

console.log(filterCars);
