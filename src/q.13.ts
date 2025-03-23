const enesimoHarmonico = (n: number): number => {
  if (n === 1) return 1;

  return 1 / n + enesimoHarmonico(n - 1);
};

console.log(`Resultado do enesimoHarmonico de 10 = ${enesimoHarmonico(10)}`);
