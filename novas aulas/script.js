/* MODO STRICT do javascript O "use strict" é uma diretiva que ativa um modo de execução mais restrito do código. Ele 
foi introduzido no ECMAScript 5 (ES5) com o objetivo de tornar o JavaScript mais seguro, mais previsível e menos 
propenso a erros.  */


//#######################################################################################################################


/* && -> E
   || -> OU
   ! -> Negação
   !! -> negação da negação
   */


//#######################################################################################################################


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


As operações de deslocamento para a esquerda funcionam como se eu multiplicasse aquele número por 2 pelo número de vezes indicadas 
pelo número que vem após o operador BITWISE. 

ex: n1 = 20

n1 << 3

20x2 = 40     (1ª vez)
40x2 = 80     (2ª vez)
80x2 = 160    (3ª vez)

Deslocamento para a direita é como se eu dividisse por 2 pelo número de vezes indicada pelo número que vem após o operador BITWISE.
ex: n1 = 20

n1 >> 3

20/2 = 10     (1ª vez)
10x2 = 5      (2ª vez)
5x2 = 2       (3ª vez, RESULTADO ARREDONDADO)


*/


//##############################################################################################################################


/* CONDICIONAL TERNÁRIO é um if else e funciona dando respostas baseado em verdadeiro ou falso.

ONDE:
? = Pergunta se a condição é verdadeira e apresenta imediatamente a resposta para o caso de ser

: Indica que a resposta a partir dali será usada caso a condição seja falsa.

CONDIÇÃO ? "CONDIÇÃO ATENDIDA"  :  "CONDIÇÃO NÃO ATENDIDA"

CONDIÇÃO  ?  "RESPOSTA DA CONDIÇÃO SENDO VERDADEIRA"   :   "RESPOSTA DA CONDIÇÃO SENDO FALSA"


##################################################################################################################
*/


/* O operador SPREAD serve para concatenar objetos ou arrays, quando houve campos iguais com informações diferentes,
ele sempre dará preferencia à informação do último.

let jogador1 = {nome: "Bruno", energia: 100, vidas: 3, magia: 150}
let jogador2 = {nome: "Carlos", energia: 100, vidas: 5, velocidade: 80}
let n3 = {...jogador1, ...jogador2}

resultado disso é = {nome: "Carlos", energia: 100, vidas: 5, magia: 150, velocidade: 80}

-------------------------

USO EM FUNÇÕES:

const soma = (v1, v2, v3) => {return v1 + v2 + v3}

let valores = [5, 10, 15]

Se eu apenas der um console.log(soma(valores)) a resposta será 5, 10, 15 undefined undefined, porém, se eu utilizar o spread,
a resposta será a soma dos valores

console.log(soma(...valores))

agora sim a resposta é 30

---------------------------------------

Se eu utilizo uma função que busca no meu html um elemento especifico, ela vai criar uma coleção HTML e só 
recebe informações HTML

ex: const objetos1 = document.getElementsByTagName("div")

Porém, se eu utilizo o SPREAD ela vai me voltar um objeto que pode receber muito mais informações e pode ser efetuado 
muito mais ações, como o uso de filter, forEach e map

ex: const objetos2 = [...document.getElementsByTagName("div")]

*/




/* LOOPS COM FOR são divididos em duas categorias

Loop FOR é um loop definido, quando eu sei o quanto ele deve ser repetido.
ESTRUTURA:

FOR(inicialição da variavel de controle; Condição de execução - aquilo que é avaliado; controle da variavel ou contador)

--------------------------------------
Loop WHILE e Do WHILE são loops indefinidos, que algo será repetido até que uma condição seja
atendida.

*/











