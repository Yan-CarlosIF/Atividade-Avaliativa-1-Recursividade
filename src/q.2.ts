// Questão 2
// Defina uma função recursiva que calcule e retorne o fatorial de um inteiro n.

function fatorial(n: number): number {
  if (n === 1) return 1;

  return n * fatorial(n - 1);
}

console.log(fatorial(5));
