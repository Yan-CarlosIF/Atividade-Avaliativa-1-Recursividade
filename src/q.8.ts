// Questão 8
// Apresente uma função recursiva que receba dois inteiros x e k e retorne x^k.
// Observe que f(x, k) = x * f(x, k-1) para x > 0 e f(x, k) = 1, para x = 0.

const power = (x: number, k: number) => (k === 0 ? 1 : x * power(x, k - 1));

console.log(power(2, 3));
console.log(power(0, 3));
console.log(power(2, 0));
