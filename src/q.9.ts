// Questão 9
// que f(x, k) = x * f(x, k-1) para x > 0 e f(x, k) = 1, para x = 0. 9.
// Seja a função iterativa para o MDC de dois números, usando o método de divisões
// sucessivas. Apresente uma solução recursiva para a implementação a seguir. Seja m e n
// números inteiros. Dizemos que n divide m se m % n == 0
// Dica: O MDC de dois números m e n pode também ser computado com o algoritmo de Euclides

const mdc = (x: number, y: number) => (x === 0 ? y : mdc(y % x, x));

console.log(mdc(12, 18));
console.log(mdc(0, 18));
