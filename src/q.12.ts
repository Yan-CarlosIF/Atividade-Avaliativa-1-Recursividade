function divIntRec(x: number, y: number): number {
  if (y === 0) {
    throw new Error("Divisão por zero não é permitida.");
  }

  if (x < y) return 0;

  return divIntRec(x - y, y) + 1;
}

console.log(`Resultado da divisão inteira de 10 / 3 = ${divIntRec(10, 3)}`);
console.log(divIntRec(10, 0)); // Teste de erro
