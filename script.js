/*##############################################################################################################
                           VARIÁVEIS
Variáveis são informações que PODEM MUDAR OU RECEBER NOVOS VALORES de acordo com o input ou circunstancias do próprio código.
*/

const { setImmediate } = require("timers/promises")

console.log("digite o nome do seu jogador.")

let nomeJogador = "jazao"

console.log("Bem vindo " + nomeJogador)


/* ###############################################################################################################
                            CONSTANTES
Constante sãos informações que NÃO PODEM MUDAR E NEM RECEBER NOVOS VALORES e podem ser chamadas a qualquer instante.
*/

const notificacao = "Poke go diz:"

console.log(notificacao + "Tem um novo Pokemon na região.")

console.log(notificacao + "Você foi derrotado.")

/*################################################################################################################
                            EXERCÍCIOS
        Assim como na matemática, constantes são valores imutáveis, que não dependem de contexto e variáveis são valores que 
    vão depender e mudar de acordo com as condições ou da equação.
        Portanto, a principal diferença é que uma constante tem um valor fixo e imutável, enquanto uma variável pode assumir 
    diferentes valores.
        Quando atribuo NOVO VALOR a uma variável, não é preciso declarar ela usando LET.

        Há também o VAR: Quando declarado fora de uma função, o escopo é global, mas quando declarado dentro de uma função
    o escopo é local, de resto ela permite redeclaração e reatribuição.
*/

const mensagem = "Uma constante não pode ser alterada depois de declarada, seu valor não muda, porém "

let varia = "uma variável pode ser alterada depois de declarada"

console.log(mensagem + varia)

varia = "a variável pode ser alterada de acordo com a necessidade do programa e ao atribuir um novo valor, não preciso declarar ela novamente usando o LET, uso apenas seu nome"

console.log(mensagem + varia)


/*##########################################################################################################################
                            TIPOS DE DADOS 
String:  Sequência de caracteres (texto).
        Exemplo: "Olá, mundo!", 'JavaScript'

Number:   Representa valores numéricos, tanto inteiros quanto decimais.
        Exemplo: 10, 3.14, -5

BigInt:  Usado para representar números inteiros muito grandes, que ultrapassam o limite do tipo Number.
        Exemplo: 1234567890123456789012345678901234567890n

Boleano:   Representa um valor lógico, podendo ser true (verdadeiro) ou false (falso).
        Exemplo: true, false

Indefinido: Representa uma variável que foi declarada, mas ainda não foi atribuída a um valor.
    Exemplo: let x; console.log(x); // undefined

Nulo:      Representa a ausência de valor ou um valor nulo. É um tipo primitivo especial.
    Exemplo: let x = null;

Simbolo:   Representa um valor único e imutável, muitas vezes usado como identificador de propriedades de objetos.
    Exemplo: let id = Symbol('id');

Objeto:     Objetos são coleções de dados (como propriedades e métodos) e permitem armazenar dados estruturados. 
Pode ser um objeto simples, um array, uma função ou até mesmo uma instância de uma classe.
    Exemplo: let pessoa = { nome: "João", idade: 30 };
-----------------------------------------------------------------------------------------------------------------------
EXERCÍCIO: Faça um caderno de endereços onde conste nome, idade, telefone, cpf e se está devendo na loja 
ou não, além disso, coloque o tipo de variável.
*/

let nome = "Carlos"                      //string
let idade = 18                           //int
let telefone = "11-5477-1833"            //string
let cpf = "320.205.708-19"               //string
let devedor = true                       //booleana

/*##########################################################################################################
                                VETORES
        é uma estrutura de dados que armazena uma sequência de elementos do mesmo tipo e podem ser acessados
    usando um índice, são semelhantes a listas.
        Existem vários comandos chamados ---MÉTODOS--- que podem alterar arrays, eles são principalmente importantes 
    quando estamos tratando os dados ou usando APIs, há o POP, MAP, PUSH, LENGHT, SHIFT, FOREACHE e outros. O link 
    completo para a documentação de arrays e seus métodos é: 
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

let carlos = ["Carlos", 18, "11-5477-1833", "320.205.708-19", true]

// ou

let pessoa = ["Carlos", "Karina", "Renato", "João"]

//para pegar apenas uma informação dentro de um ARRAY ou VETOR eu devo dizer em que posição está essa informação contando a partir de zero.

console.log(pessoa[1])

pessoa.push("Lilian")

console.log(pessoa)

