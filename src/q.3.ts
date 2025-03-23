// Questão 3
// Defina uma função recursiva para calcular f(n) = 2^n

function powerOfTwo(n: number): number {
  if (n === 0) return 1;

  return 2 * powerOfTwo(n - 1);
}

console.log(powerOfTwo(4));
