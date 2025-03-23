const arr: number[] = [1, 2, 3, 4, 5];

function greatestNumberInArray(v: number[], n: number): number {
  if (n === 1) return arr[0];

  const greatest = greatestNumberInArray(v, n - 1);

  return arr[n - 1] > greatest ? arr[n - 1] : greatest;
}

console.log(greatestNumberInArray(arr, arr.length));
