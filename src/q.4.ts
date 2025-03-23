// Questão 4
// Defina uma função recursiva que receba um vetor de tamanho n e retorne sua soma;

const newArr: Array<number> = [1, 2, 3, 4, 5];

function someArray(arr: number[], n: number): number {
  if (n === 0) return 0;

  return arr[n - 1] + someArray(arr, n - 1);
}

console.log(someArray(newArr, newArr.length));
