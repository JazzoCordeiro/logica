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

/*################################################################################################################
                                MATRIZES
            Assim como na matemática, uma matriz é uma estrutura que armazena múltiplos valores em uma estrutura 
    bidimensional. Em vez de armazenar apenas um valor como uma variável comum, uma matriz armazena uma série de 
    valores que podem ser acessados por índices. 
            A matriz é um array só que bidimensional.
*/

let clientes = [
    ["Carlos", 18, "11-5477-1833", "320.205.708-19", true],   // Linha 1
    ["Karina", 25, "11-5544-3321", "123.456.789-00", false],  // Linha 2
    ["Renato", 30, "11-5333-2233", "987.654.321-00", true]    // Linha 3
];

console.log("o nosso cliente " + clientes[2][0] + " tem " + clientes[2][1] + " anos, enquanto " + clientes[1][0] + " tem " + clientes[1][1])

let matriz = [
    [1, "lista com diversos conjutos de informações"],
    [2, "é considerado uma matriz"],
    [3, "cada grupo de itens fica dentro de colchetes"],
    [4, "e é separado por virgulas."],
    [5, "a matriz é um vetor que contém vetores"],
    [6, "ou um array que contém arrays."]
]

console.log(matriz)

/*##################################################################################################################################
                                    OPERADORES LÓGICOS.
            Lógica é um conhecimento da filosofia e é usado em matemática e em linguagens, além da programação.
    É preciso compreender que a programação vai se utilizar de simbolos para fazer o que a filosofia faz com palavras, assim como
    na matemática.

+ Adição
- Subtração
* Multiplicação
/ Divisão
% Módulo (resto da divisão)
** Exponenciação (disponível no ES6)
== Igualdade (compara apenas os valores)
=== Igualdade estrita (compara valores e tipos)
!= Desigualdade (compara apenas os valores)
!== Desigualdade estrita (compara valores e tipos)
> Maior que
< Menor que
>= Maior ou igual a
<= Menor ou igual a
= Atribuição simples
+= Atribuição com adição
-= Atribuição com subtração
*= Atribuição com multiplicação
/= Atribuição com divisão
%== Atribuição com módulo
**= Atribuição com exponenciação (ES6)
*/

let age = 30

console.log(age)

age = age + 6

console.log(age)

age = 36 - 6

console.log(age)

age += 6

console.log(age)

let marca = "apple"

console.log(marca == "samsung")

//Exercicio: Condições para vencer um jogo, ter 100 moedas ou mais e coletar o objeto estrela.

let moedasColetadas = 101
let item = "estrela"
let resultado = (moedasColetadas >= 100) && (item === "estrela")
console.log(resultado)

/*########################################################################################################################
                                Condicionais IF, ELSE, ELSE IF
        Os condicionais executam o código quando uma certa condição é atingida, por exemplo:
        SE a Camila for mais velha que Helena, ele vai dizer que Camila é mais velha.
        SENÃO ele vai dizer que Helena é mais velha.
*/
 
let maioridade = ""
let camila = 20
let helena = 15

if (camila > helena) {maioridade = "Camila é mais velha que Helena"}

else {
    maioridade = "Helena é mais velha que camila."
}

console.log(maioridade)

//-------------------------------------------------------------------------------------------------------

function calcularMedia() {

let nota1 = parseFloat(document.getElementById("nota1").value)
let nota2 = parseFloat(document.getElementById("nota2").value)
let nota3 = parseFloat(document.getElementById("nota3").value)
let nota4 = parseFloat(document.getElementById("nota4").value)

let letivo = ""
let media = (nota1 + nota2 + nota3 + nota4) / 4

if (media < 5){
    letivo = "O aluno foi reprovado pois sua média geral é de" + media
}

else if (media === 5){
    letivo = "O aluno está em recuperação pois sua média geral foi de" + media
}

else if (media > 5 && media < 9){
    letivo = "O aluno foi aprovado pois sua média geral foi de" + media
}

else if (media >= 9){
    letivo = "O aluno foi aprovado com mérito pois sua média geral é de" + media
}
alert(letivo)
}


/*########################################################################################################################
                                Condicionais SWITCH CASE
        O switch case serve para substituir o if else, principalmente quando há muitas opções.
    Ele é uma estrutura de decisão e precisa de um break para não entrar em looping assim como precisa de uma resposta padrão
    chamada de DEFAULT para quando nenhuma opção se aplicar.
*/

function vitaSuco() {

let fruta = document.getElementById('fruta').value

switch (fruta){
    case "laranja":
    case "limão":
    case "jabiticaba":
    case "melancia":
    case "melão":
    alert("a fruta escolhida é " + fruta + " e ela é boa para fazer suco.")
    break

    case "banana":
    case "mamão":
    case "graviola":
    case "manga":
    case "abacate":
    alert("a fruta escolhida é " + fruta + " e ela é boa para fazer vitamina.")
    break

    case "morango":
    case "pera":
    case "abacaxi":
    case "maçã":
        alert("a fruta escolhida é " + fruta + " e ela é boa para fazer vitaminas e sucos.")

}
}

/*########################################################################################################################
                                        FOR, WHILE E DO WHILE
        São laços de repetição, eles servem para que uma ção seja repetida infititamente ou até que uma condição especifica 
    seja alcançada.
*/

for (let contador = 0; contador < 4; contador ++){console.log(contador + " somando mais 1 ao contador")} 
/*declaro a variavel contador com valor 0, o FOR manda ela adicionar +1 cada vez que rodar o código enquanto ela for menor que 4.*/


let ganho
//FOR (VARIAVEL QUE VAI RECEBER O LOOP + CONDIÇÃO PARA SAIR DO LOOP + COMO INCREMENTAR O CONTADOR){DELIMITAR O ESCOPO DO FOR}
  for (let conta = 0; conta < 11; conta++){ ganho += 1 
    console.log(conta + " e somando +1 vai aumentar para:")}

//----------------------------------------------------------------------------------------------------------------------------

let saudacao = 0

while (saudacao < 3) {
    console.log("repetir o olá 3 vezes")
    saudacao++
} 


let passos = 1

while (passos < 6) {
    console.log(`passo ${passos}`)
    passos++
    
}


/*Enquanto o FOR vai repetir uma condição e adicionar isso à variável, o WHILE vai repetir a variável até chegar na 
condição. O DO WHILE vai executar ao menos uma vez o que for de seu escopo, enquanto o while não.*/


//DESAFIO DO FELIPÃO



function rankHeroi() {
    let heroi = document.getElementById('nomeHeroi').value
    let exp = parseFloat(document.getElementById('xpHeroi').value)

    if (exp <= 1000) {
        alert(`O herói ${heroi} é de rank Ferro`)
    }

    else if (exp >= 1001 && exp <= 2000){
        alert(`O herói ${heroi} é de rank Bronze`)
    }

    else if (exp >= 2001 && exp <= 5000){
        alert(`O herói ${heroi} é de rank Prata`)
    }

    else if (exp >= 5001 && exp <= 7000){
        alert(`O herói ${heroi} é de rank Ouro`)
    }

    else if (exp >= 7001 && exp <= 8000){
        alert(`O herói ${heroi} é de rank Platina`)
    }

    else if (exp >= 8001 && exp <= 9000){
        alert(`O herói ${heroi} é de rank Ascendente`)
    }

    else if (exp >= 9001 && exp <= 10000){
        alert(`O herói ${heroi} é de rank Imortal`)
    }
    
    else if (exp >=10001){
        alert(`O herói é ${heroi} é de nivel Radiante`)
    }

    else {
        alert("Aparentemente você colocou alguma informação errada, por favor verifique novamente.")
    }
}

/*###########################################################################################################################
                                    FUNÇÕES
            Uma função pode ter uma entrada (input), uma ação e uma saída (output), mas somente a ação é obrigatória.

            Primeiro eu chamo a função, ou seja, eu peço que ela seja executada em algum lugar do meu código.
Declaro a função - nomeio a função(insiro paramêtros ou não) {insiro a ação que a função deve exercer}
posso usar essa função quantas vezes eu quiser.

            É possível chamar uma função dentro de outra função.

            Usar sempre um nome ligado à ação que a função faz para facilitar o seu entendimento.

            Uma função por ação.
*/

torradeira()  //estou pedindo para a função ser executada

//declaro func. nomeio func. (não passei parametros/input) {dei uma ação para ela que ao mesmo tempo é um output e é mostrada quando peço para executar}
function torradeira(){
    console.log("preparar torrada")
    avisar()
}

function avisar() {
    console.log("a torrada está pronta")
    console.log("fim do processo")
}

//parando com o curso da DIO.ME para dar uma olhada no curso do Guanabara e comparar os conteúdos.

function parimp(numero) {
    if (numero%2==0){
        return "par";
    } else {
        return "impar";
    }}

    let res = parimp(11)
    console.log(res)