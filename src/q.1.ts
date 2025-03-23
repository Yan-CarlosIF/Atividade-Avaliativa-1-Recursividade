// Questão 1
// Defina uma função recursiva que receba um inteiro n e compute o somatório entre 1 e n.

const someBetween = (n: number): number => {
  if (n <= 2) return 0;

  if (n === 3) return 2;

  return n - 1 + someBetween(n - 1);
};

console.log(someBetween(4));
