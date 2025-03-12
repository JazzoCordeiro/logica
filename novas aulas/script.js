/* MODO STRICT do javascript O "use strict" é uma diretiva que ativa um modo de execução mais restrito do código. Ele 
foi introduzido no ECMAScript 5 (ES5) com o objetivo de tornar o JavaScript mais seguro, mais previsível e menos 
propenso a erros.  */


/* && -> E
   || -> OU
   ! -> Negação
   !! -> negação da negação
   */


/* OPERADORES BINÁRIOS BITWISE

let n1 = 10
let n2= 11

let res = n1 & n2   (a resposta será em números binários = 10 )
& -> Sempre que tiver o valor binário ZERO, o retorno será zero, apenas quando os dois valores comparados forem 1 é que o 
retorno será 1.


let res2 = n1 | n2 (a resposta será em números binários = 11)
| -> Sempre que tiver um valor binário UM, o retorno será 1, apenas quando dois valores comparados forem 0 é que retornará 0


let res3 = n1 ^ n2 (a resposta será = 1)
^   -> Sempre que houver equivalencia de números binários ele retorna zero, apenas vai retornar 1 quando houver diferença entre 
os números comparados.

n3 = 13
n4 = 14
let res4 = n3 ^ n4 (a resposta será 3)
Neste caso, a resposta em números binários é 11, que é transformado automaticamente em decimal e é equivalente a 3


let res5 = n1 << 1 (a resposta será 20)
Neste caso eu estou transportando o número decimal uma casa para a esquerda e adicionandl um zero à direita, o número em bits
fica sendo 10100 que ao ser transformado em número decimal é o equivalente à 20. Via de regra, ao fazer uma operação BITWISE para 
a esquerda, eu dobro o valor do número decimal.

let res6 = n1 >> 1 (a resposta será 5)
Neste caso eu estou transportando o número decimal uma casa para a direita e adicionando um zero à esquerda, o número em bits
fica sendo 101 que ao ser transformado em número decimal é o equivalente a 5. Via de regra, ao fazer uma operação BITWISE para 
a direita, eu diminuo o valor do número decimal em metade.






*/