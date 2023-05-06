const randomNumberInterval = (n1, n2) => {
  return Math.floor(Math.random() * (n2 - n1 + 1)) + n1;
};

console.log(randomNumberInterval(1, 5));
console.log(randomNumberInterval(1, 10));
console.log(randomNumberInterval(1, 100));
