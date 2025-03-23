// Questão 11
// Apresente uma função recursiva que receba um n° inteiro e retorne o n° de digitos.
// Exemplo: Se n = 123, entao f(n) = 3.

const numberOfDigits = (n: number) =>
  n < 10 ? 1 : 1 + numberOfDigits(Math.floor(n / 10));

console.log(numberOfDigits(123));
console.log(numberOfDigits(5));
console.log(numberOfDigits(10));
console.log(numberOfDigits(1111111));
