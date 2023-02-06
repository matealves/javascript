const topBrazilMovies = [
  {
    title: "Vingadoes: Ultimato",
    peapleAmount: 19_686_119,
    distributedBy: "Disney",
  },
  {
    title: "Titanic",
    peapleAmount: 17_050_000,
    distributedBy: "Paramount / 20th Century",
  },
  {
    title: "O Rei Leão",
    peapleAmount: 16_267_649,
    distributedBy: "Disney",
  },
  {
    title: "Vingadores: Guerra Infinita",
    peapleAmount: 14_572_181,
    distributedBy: "Disney",
  },
  {
    title: "Tubarão",
    peapleAmount: 13_035_000,
    distributedBy: "Universal",
  },
  {
    title: "Velozes e Furiosos 7",
    peapleAmount: 11_944_985,
    distributedBy: "Universal",
  },
  {
    title: "Tropa de Elite 2",
    peapleAmount: 11_204_815,
    distributedBy: "Zazen",
  },
];

const map = topBrazilMovies
  .filter(({ distributedBy }) => distributedBy === "Disney")
  .reduce((accumulator, { peapleAmount }) => accumulator + peapleAmount, 0);

console.log(
  `Bilheteria Disney em 2022:`,
  map.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  })
);

// ####################################

const pets = [
  { name: "Boris", age: 4, gender: "Male", type: "Dog" },
  { name: "Joelma", age: 8, gender: "Female", type: "Cat" },
  { name: "Ximbinha", age: 4, gender: "Male", type: "Cat" },
  { name: "Negão", age: 2, gender: "Male", type: "Dog" },
  { name: "Cristal", age: 6, gender: "Female", type: "Cat" },
];

const getDogs = ({ type }) => type === "Dog";

const convertToHumanAge = ({ name, age }) => ({
  name,
  convertedAge: age * 7,
});

console.log(pets.filter(getDogs).map(convertToHumanAge));
