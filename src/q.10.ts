// Questão 10
// Apresente uma função recursiva que receba um no inteiro e retorne a soma de seus
// dígitos. Exemplo: Se n = 123, então s = 6. Observe que f(n) = n % 10 + f(n/10).

function someOfIntegers(n: number) {
  if (n === 0) return 0;

  return (n % 10) + someOfIntegers(Math.floor(n / 10));
}

console.log(someOfIntegers(123));
console.log(someOfIntegers(5));
console.log(someOfIntegers(10));
console.log(someOfIntegers(0));
