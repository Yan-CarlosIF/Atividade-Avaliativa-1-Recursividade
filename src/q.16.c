// Questão 16
// O que a seguinte função faz? Implemente e teste-a. Explique detalhadamente.

#include <stdio.h>

int function(int x, int n, int vetor[]) {
  if (n == 0) return -1;
  if (x == vetor[n - 1]) return n - 1;
  return function(x, n - 1, vetor);
}

int main() {
  int vetor[] = {1, 2, 3, 4, 5};
  int len = sizeof(vetor) / sizeof(vetor[0]);

  printf("%d\n", function(3, len, vetor));
  return 0;
}

// A função procura o valor x no vetor e retorna o seu indice se encontrar, caso
// contrario, retorna -1.

// A função utiliza recursividade para percorrer o vetor, recebendo o parametro
// n como seu tamanho, e percorre o vetor a partir do ultimo elemento, primeiro
// verifica se n é igual a 0, ou seja, se for verdade, ela percorreu todo o
// vetor e não encontrou o x, então retornará -1.

// Se n for diferente de 0, ele verifica se x é igual ao elemento do vetor na
// posição n - 1. Se for verdade, ele retorna n - 1, que corresponde ao indice
// do valor x no vetor.

// Se nenhuma das condições anteriores for verdade, ele chama a função
// recursivamente passando x, n - 1 e o vetor, para percorrer o restante
// do vetor.