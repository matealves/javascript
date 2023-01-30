- REGEX cheatsheet

g = global (pega todas);
i = case insensitive (não diferencia maiúsculas de minúsculas);
m = multilinha (^ e $ corresponderão ao início e ao fim de uma linha, em vez do início e fim de toda a string);
s = single line (Ponto (.) = tudo (inclusive nova linha))
u = unicode ?
y = sticky ?

() = grupo;
[], [0-9], [a-z] = intervalos ou caracteres específicos;
{}, {5} {5,10}, {5,} = mínimo e máximo do grupo;

- = 1 ou mais vezes (semelhante a {1,})

* = 0 ou múltiplas opções
  \ = utilizar caracteres especiais em seguida;
  ^ = começa com...;
  $ = termina com...;
  \w = palavra;
  \W = NÃO palavra;
  \d = digito;
  \D = NÃO digito;
  \s = espaços em branco;
  \S = NÃO espaços em branco
  \t = tab;
  \n = quebra de linha;
  . = qualquer caractere (exceto nova linha);

? = grupo opicional;
| = condicional (ou/or);
[^] = negação/not (dentro da expressão);
