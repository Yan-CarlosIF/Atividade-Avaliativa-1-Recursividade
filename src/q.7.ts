const arr: Array<number> = [1, 2, 3, 4, 5];

const findFirstOccurency = (item: number, arr: number[], n: number): number => {
  if (arr[n - 1] === item) return n - 1;

  if (n - 1 === 0) return -1;

  return findFirstOccurency(item, arr, n - 1);
};

console.log(findFirstOccurency(2, arr, arr.length));
