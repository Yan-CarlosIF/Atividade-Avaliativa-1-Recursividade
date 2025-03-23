// Questão 13
// Considere a função que calcula o n-ésimo n° harmônico: H(n) = 1 + 1/2 + 1/3 + 1/4 + . . . + 1/n (n >= 1).
// Apresente uma função recursiva para esta relação de recorrência.

const enesimoHarmonico = (n: number) =>
  n === 1 ? 1 : 1 / n + enesimoHarmonico(n - 1);

console.log(`Resultado do n-ésimo n° harmônico de 10 = ${enesimoHarmonico(10)}`);
console.log(`Resultado do n-ésimo n° harmônico de 5 = ${enesimoHarmonico(5)}`);
