// Questão 7
// Defina uma função recursiva que busca um item x em um vetor v de tamanho n e retorna
// o índice da 1a ocorrência do item. Se inexistente, a função retorna -1. Buscar(x, v, n)

const arr: Array<number> = [1, 2, 3, 4, 5];

const findFirstOccurency = (item: number, arr: number[], n: number): number => {
  if (arr[n - 1] === item) return n - 1;

  if (n - 1 === 0) return -1;

  return findFirstOccurency(item, arr, n - 1);
};

console.log(findFirstOccurency(2, arr, arr.length));
