// Decidi fazer essa questão em C pois faz mais sentido
// já que é necessário lidar com ponteiros

#include <stdio.h>

char *frase = "chama\0";

int length(char *str) {
  if (str[0] == '\0') return 0;

  return length(str + 1) + 1;
}

int main() {
  printf("%d", length(frase));
  return 0;
}