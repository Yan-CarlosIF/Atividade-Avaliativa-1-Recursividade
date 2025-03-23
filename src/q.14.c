// Questão 14
// Apresente a implementação da função recursiva int length(char *str)
// onde str é um ponteiro para uma cadeia de char’s que obrigatoriamente termina
// com ‘\0’. A função retorna o no de caracteres na string, sem contar o
// caractere nulo.

// OBS: Decidi fazer essa questão em C pois faz mais sentido
// já que é necessário lidar com ponteiros
#include <stdio.h>

int length(char *str) { 
  return str[0] == '\0' ? 0 : length(str + 1) + 1; 
}

int main() {
  char *frase = "chama\0";
  printf("%d", length(frase));
  return 0;
}