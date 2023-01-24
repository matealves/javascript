// agrupa os padrões em um array
const matches = "aBC".match(/[A-Z]/g);
console.log(matches);
// Output: Array [B, C]

// pesquisa se existe ou não o padrão
const index = "aBC".search(/[A-Z]/);
console.log(index);
// Output: 1

//substitui os padrões por novo valor
const next = "aBC".replace(/a/, "A");
console.log(next);
//Output: ABC


// visa = ^4\d{0,15}
// inicia com 4 seguido de mais 15 digitos
4234234423432344

// mastercard = (^5[1-5]\d{0,2}|^22[2-9]\d|^2[3-7]\d{0,2})\d{0,12}
// inicia com 5, seguido de um dígito entre 1 e 5, seguido de mais 2 dígitos
// OU
// inicia com 22 seguido de um dígito entre 2 e 9, seguido de mais 1 dígito
// OU
// inicia com 2 seguido de um dígito entre 3 e 7, seguido de mais 2 dígitos^

// seguido de mais 12 dígitos
5353535353535353
2323232323232323
2221651516132165