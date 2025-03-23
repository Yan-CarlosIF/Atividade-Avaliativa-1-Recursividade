// Questão 6
// Defina uma função recursiva que retorna o menor item de um vetor v de tamanho n.

const minorNumberInArray = (arr: number[], n: number): number => {
  if (n === 1) return arr[0];

  const minor = minorNumberInArray(arr, n - 1);

  return arr[n - 1] < minor ? arr[n - 1] : minor;
};

console.log(minorNumberInArray([3, 2, 1, 4], 4));
