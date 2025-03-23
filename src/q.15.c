// Questão 15
// Apresente a implementação da função recursiva void f(int n),
// que recebe um inteiro n e imprime na tela a conversão de n para base 2.

#include <stdio.h>

void f(int n) {
  if (n == 0) return;

  f(n / 2);

  printf("%d", n % 2);
}

int main() {
  int n = 10;
  printf("%d em binario: ", n);
  f(n);
  return 0;
}