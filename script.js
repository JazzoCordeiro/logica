/*##############################################################################################################
                           VARIÁVEIS
Variáveis são informações que PODEM MUDAR OU RECEBER NOVOS VALORES de acordo com o input ou circunstancias do próprio código.
*/

//const {setImmediate} = require("timers/promises")
//const {parseArgs} = require("util")

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

//------------ Voltando para fazer mais exercicios de repetição


function contar(){
    let inicio = document.getElementById('inicio').value
    let fim = document.getElementById('fim').value
    let passo = document.getElementById('passo').value
    let results = document.getElementById('results')

    if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        let ini = Number(inicio)
        let fini = Number(fim)
        let pas = Number(passo)

        if (ini < fini) {
            for(let contagem = ini; contagem <= fini; contagem += pas) {
                results.innerHTML += `${contagem}`
            }
        } else {
            for(let contagem = ini; contagem >= fini; contagem -= pas){
                results.innerHTML += `${contagem}`
            }
        }


        }       
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

    console.log(parimp(46))

    //-----------

    function soma (n1, n2) {
        return n1 + n2
    }

    function subtra (n1, n2) {
        return n1 - n2
    }

    console.log(soma(7, 3))
    console.log (subtra(7, 3))

    //--------

    let multi = function(incog) {
        return incog * 2
    }
    console.log (multi(5))

//-------------------------

function fatorial(n) {
    if (n==1) {
        return 1;
    } else {
        return n* fatorial(n-1)
    }
}

console.log(fatorial(5))

//-------------------------------VOLTANDO AO CURSO DA DIO.ME

torrar("pão de forma", "Maria", 10.90)

function torrar(pao, nome = "Cliente", valor){
    console.log("torrada feita com " + pao + " para " + nome)
    console.log("a conta deu: " + valor)

}

/*-------------------
exemplo de interpolação de string é quando você usa no js o ${e coloca aqui uma variavel}, esta estrutura é boa 
para pegar várias informações de diferentes e reutiliza-las.*/

createStringConnection("db_products", "Ricardo", "55986")

function createStringConnection(dataBaseName, user, password) {
    console.log(`connect:DBCONNECT;user=${user};password=${password};initial_database=${dataBaseName}`)
}


//----------funções com retorno/output
let result = soma(5, 10)

console.log("o resultado dessa função é: " + result)

function soma(numA, numB){
    let somatorio = numA + numB
    return somatorio
}

let userName = getName("Maria dos Anjos")
console.log("sejam bem vindo(a) " + userName)
userName = getName("Renato-Augusto-Silva", "-")
console.log("sejam bem vindo(a) " + userName)


function getName(name, splitchar = " "){
    let firstName = name.split(splitchar)[0]
    return firstName
}

/*-------------------------------------------------
Desafio de código do Felipão da DIO.
 # 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)
Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal
*/


function vitHeroi(){
let vit = parseFloat(document.getElementById('winHeroi').value)
let lose = parseFloat(document.getElementById('loseHeroi').value)
let char = document.getElementById('nameHeroi').value

function ranked(vit, lose){
    return vit - lose
}

var ranking = ranked(vit, lose)

if (ranking <= 10) {
    alert(`${char}` + " é do rank Ferro e conta com " + `${ranking}` + "vitórias!")
}else if(ranking > 11 && ranking <= 20){    
    alert(`${char}` + " é do rank Bronze e conta com " + `${ranking}` + "vitórias!")
}else if(ranking > 21 && ranking <= 50){
        alert(`${char}` + " é do rank Prata e conta com " + `${ranking}` + "vitórias!")
}else if(ranking > 51 && ranking <= 80){    
    alert(`${char}` + " é do rank Ouro e conta com " + `${ranking}` + "vitórias!")
}else if(ranking > 81 && ranking <= 90){    
    alert(`${char}` + " é do rank Diamante e conta com " + `${ranking}` + "vitórias!")
}else if(ranking > 91 && ranking <= 100){    
    alert(`${char}` + " é do rank Lendário e conta com " + `${ranking}` + "vitórias!")
}else if(ranking >= 101){    
    alert(`${char}` + " é do rank Imortal e conta com " + `${ranking}` + "vitórias!")
}else if(ranking < 0){
    alert(`${char}` + " deveria se aposentar...")
}
else{
    alert("Dados inválidos")
}
}

/*##############################################################################################################
                            Resolvendo exercícios
*/

//contagem de experiência vem após a derrota do inimigo.

//const xpganho = nivelDoMonstro + dificuldade * 100

//revendo vetores.

let num = [5 , 8, 1, 9, 3, 7, 2]

console.log(`Este vetor tem ${num.length} posições.`)

console.log(`Para conseguir o segundo valor do vetor que é ${num[1]} preciso colocar 1 entre chaves, indicando que é a segunda casa`)

console.log(`Já que começamos a contar por 0 o numero de casas, assim o nº ${num[0]}, é o primeiro valor do vetor e está na casa 0.`)

num.push(1)
console.log(`Acabamos de acidionar um elemento ao array usando push, o array agora tem ${num.length} posicções e ${num[num.length - 1]} é o último número dentro do array`)

console.log("O nosso vetor/array está com a seguinte ordem " + num)
num.sort()
console.log("E depois de usar o sort ele ficou na seguinte ordem " + num)

for(let pos=0; pos<num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

for(let pos in num) {
    console.log("Agora usando o FOR IN que é para objetos e vetores/arrays " + num[pos])
}


function parimp(n) {
    if(n%2 == 0){
        console.log("par")
    }else{console.log("impar")}
}

let resu = parimp(11)

//EXERCICIOS DIFERENTES.

function calcPeso(){

let altura = document.getElementById('altura').value

let pesoIdeal = (72.7 * altura) - 58

alert(`O seu peso ideal é ${pesoIdeal}`)
}

//=======


function digaMeuNome(nomear){
    console.log(nomear)
}

digaMeuNome("Joaquim")
digaMeuNome("Aline")
digaMeuNome("Henrique")
//---------

function numerada(nume1, nume2){
    const resultado = nume1 + nume2
    console.log(resultado)
}

numerada(8, 6)
numerada(15, 25)

//=====

function somei(numa1, numa2){
let resulta = numa1 + numa2
return resulta
}

let resultei = somei(10, 7)

console.log(resultei)

function divida(receita, gastos){
    if(receita > gastos){
        return "está tudo bem"
    }else{
        return "Xi, ferrou!"
    }
}

let jana = divida(3000, 1800)

console.log(`Jana, ${jana}`)

//-------- ARROW FUNCTION

let nomeie = () => {
    console.log("carlota")
}

nomeie()




//------

/* funções tem ações que podem ser desde um if else, até dar novo valor a variaveis. Ela ajuda a manter o código limpo, ela pode
ser reutilizada, ela serve como uma forma de abstração para encapsular lógica complexa. Isso significa que você pode dividir 
o seu código em pequenos blocos independentes e reutiliza-los mesmo dentro de outras funções. 
*/


/*exemplo de arrow function: ela cria a variavel e a função ao mesmo tempo. Excelentes para Preservar o valor de this,
Quando você precisa preservar o valor de this no contexto em que a função foi criada (ex.: dentro de métodos de objetos 
 ou callbacks em eventos assíncronos), as Arrow Functions são ideais. Funções de array: Ao usar métodos como map(), filter()
  ou reduce(), as Arrow Functions são muito úteis, tornando o código mais enxuto e legível.
  Quando NÃO usar Arrow Functions?

    Funções com this dinâmico: Se você precisa de uma função onde o valor de this seja dinâmico e alterado pelo contexto de 
    execução (como em métodos de objetos que usam this), você deve usar uma função tradicional. A Arrow Function não 
    funciona bem quando o this precisa ser alterado dinamicamente.

    Na arrow function eu não preciso criar um return, ela naturalmente irá retornar.
  */

const nomeDaFuncao = (parametros) => {
    // corpo da função
    return resultado;
};

/*######################################################################################################################
Revendo operadores
revendo if else simplificado com operadores ternarios
*/

var idad, eleitor, resultas;

idad = 71
eleitor = (idad < 18) ? "Não pode votar" : "Sim, já pode votar"

results = (idad === 65 || idad === 72)

console.log(eleitor)

/*#########################################################################################################################
continuando revisão de função
*/

function paraCelsius(valorFahrenheit){
    return(5/9) * (valorFahrenheit - 32)
}
var fahr = paraCelsius(77)

console.log("A temperatura é de " + fahr + "graus")


/*repassando informações
primeiro eu coloco a palavra function  + o nome da função, dai entre parenteses eu coloco os parametros, parametros são 
valores, depois eu coloco a ação que eu quero que aquela função execute. Por fim, eu posso chamar a função onde eu quiser.
*/

function teste(valor1, valor2){
    return  valor1 + valor2
}

console.log(teste(2,3))

console.log(teste("pode ser texto ", "também"))

/*Se usar LET ou CONST dentro de uma função, eu não poderei altera-la em escopo global. Se eu usar VAR e declarar ela FORA da função,
ou seja, no escopo GLOBAL, eu consigo alterar depois e por fim, eu consigo utilizar/modificar o VAR também se for uma função dentro
de outra.
*/


/*#########################################################################################################################
A grosso modo, um objeto é basicamente uma variavel com muitos valores dentro, mas, ao invés de serem armazenados de 
forma sequencial como em um array, os valores são armazenados com chaves (ou propriedades) que permitem identificar e 
acessar cada valor. Em outras palavras, um objeto é uma coleção de pares chave-valor.
Geralmente usamos CONST em objetos.
Este é um objeto literal, com as propriedades já definidas, existem objetos cujos valores serão definidos de forma dinamica.
Você pode adicionar novas propriedades a um objeto a qualquer momento, usando a notação de ponto ou a notação de colchetes.
Dentro de um objeto podemos ter o método. O método é quando criamos uma propriedade que tem uma função dentro dela, essa 
função pode ser vazia ou não.
Podemos também criar um método dinamico para o objeto, ou seja, do lado de fora chamamos como no exemplo:

function nomeDaFunção(){
console.log("mensagem")
}

nomeDoObjeto.NomeDoMetodo = nomeDaFunção 

posso usar o THIS para pegar apenas uma propriedade do meu objeto.

exemplo:

propriedade: function() {
return "retornar apenas uma infor" + this.propriedadeQueEuQuero}


Os valores dentro de um objeto são chamados PROPRIEDADES
As funções dentro de um objeto são os MÉTODOS

ex:

const carro = {
    marca: "ford",
    modelo: "ka",
propriedade                metodo
buzina:                    function() { console.log("bibi"); },                   


as formas de adicionar entradas a um objeto são:

nome do objeto.propriedade = valor da notação de ponto
carro.cor = "vermelho"

nome do objet[propriedade] = valor a ser adicionado

é possível criar um método dentro do objeto para retornar duas propriedades ou mais usando o THIS.
ex. 

propriedade:  Metodo  {return this.propriedadeDesejada + thispropriedadeDesejada2;}


###########################################################################################################################
*/ 

function freiada(){
     console.log("freiou!")
    return "O freio foi acionado";  

}

const carro = {
    marca: "ford",
    modelo: "ka",
    ano: "2015",
    placa: "DFA1530",
    buzina: function() {alert("bibi");}, //método dentro do objeto
    completo: function(){return "a marca é " + this.marca + " e o modelo é " + this.modelo}
}

console.log(carro)

carro.cor = "vermelho"  //notação de ponto

carro["estado"] = "novo"     //notação de colchetes.

console.log(carro)

carro.buzina()     //chamando o método

carro.freio = freiada

console.log(carro.freio())

console.log(carro.completo())


/*#####################################################################################################################
Existem muitos EVENTOS que nos ajudam tanto a criar websites como jogos também, eles servem para todo tipo de coisas.
Um evento pode chamar uma função no JAVASCRIPT ou até uma modificação no CSS.

onclick -> Dispara uma função quando um botão é clicado.
ondblclick -> Dispara uma função quando há duplo clique.
onmouseover -> Dispara quando o mouse passa por cima do elemento, geralmente usado no CSS.
onmouseout -> Disparado quando o mouse é movido para FORA do elemento.
onmousemove -> Disparado quando o mouse é movido dentro do elemento. Ele repete a função várias vezes por segundo enquanto o mouse se mexer.
onmousedown -> Disparado quando o clique é pressionado e antes de soltar, por exemplo, pode ser usado para pulos em jogos.
onmouseup -> Disparado apenas quando o clique é soltado, por exemplo em um jogo, se usar o mousedown para puxar um estilingue e o onmouseup para soltar a pedra e aplicar a força.
onmouseenter -> Dispara quando o mouse entra no elemento.
onmouseleave -> Dispara quando o mouse SAI do elemento.
onfocus -> Disparado quando o elemento recebe é selecionado ou ativado pelo usuário.
onchange -> Disparado quando existe uma mudança de conteúdo. Por exemplo a pessoa muda alguma info e esquece de salvar, dai aparece uma mensagem perguntando se a pessoa quer sair sem salvar.
onblur -> Disparado quando o elemento perde foco.
onkeydown -> Disparado quando uma tecla é pressionada e antes de ela ser solta.
onkeypress -> Disparado quando uma tecla é pressionada e solta.
onkeyup -> Disparado quando uma tecla pressionada é solta.
onload -> Disparado quando a página termina de ser carregada.
onresize -> Disparado quando há um redimensionamento da janela.
########################################################################################################################
*/

function clicada(){
    alert("funcionou o evento onclick")
}

function doubleClick(){
    alert("funcionou o evento de DBLlick")
}

/*
function addTexto(){
    let p = document.getElementById("texto")
    p.append('o texto muda se você continuar mexendo o mouse.')
}
*/

/*###############################################################################################################################
Um array ou matriz é uma variável com várias propriedades só que sem métodos.
Um item dentro de uma matriz é encontrado pela sua posição dentro daquele array.

Ao invés de criar muitas váriaveis com diferentes valores, basta criar uma variável com diferentes valores que são agrupáveis, 
ou seja, que se encaixem juntos, um bom exemplo pode ser as caracteristicas de um carro ou ainda uma lista de compras.

É sempre mais indicado usar um array literal do que um array com construtor, porém, podem existir momentos em que ele é exigido.

#################################################################################################################################
*/

//estrutura de uma matriz ou array LITERAL - MELHOR FORMA DE FAZER UM ARRAY

const lista = [
    "arroz",
    "feijão",
    "legumes",
    "leite"
]


//estrutura de matriz ou array unidimensional ou de VETOR
const carro = []

carro[0] = "fusca"
carro[1] = "volto"
carro[2] = "chevetão"
carro[3] = "fiat 147"
carro[4] = "brasilia"


//estrutura de uma matriz ou array com CONSTRUTOR Pode ser útil em situações em que você precisa criar um array 
// de tamanho específico ou trabalhar com parâmetros variáveis.
const frutas = new Array("uva", "maçã", "melão")

/*
Diferença de matriz e de objeto.


Em JavaScript, tanto arrays quanto objetos são estruturas de dados que ajudam a armazenar e organizar informações.

Um array em JavaScript é uma estrutura de dados ordenada, usada para armazenar múltiplos valores em uma única variável. 

Um objeto em JavaScript é uma estrutura de dados não ordenada que armazena pares de chave-valor (também chamados de 
propriedades e valores). Cada valor é associado a uma chave (ou nome), e você acessa os valores por essas chaves, não 
por índices numéricos.

Armazenar dados com diferentes tipos e identificadores: Quando você precisa representar dados estruturados com diferentes 
características que precisam ser acessados por nomes ou identificadores.

Entidades complexas: Objetos são úteis quando você quer representar algo mais complexo, como uma pessoa, um produto ou 
um carro, com diferentes características (nome, idade, cor, etc.).

Quando escolher entre um Array ou um Objeto:

    Array:

        Quando você tem uma coleção de itens ordenados e o índice numérico faz sentido para acessar esses itens.

        Quando você precisa percorrer os elementos de forma sequencial (usando loops como for ou forEach).

    Objeto:

        Quando você precisa representar uma entidade com características específicas (como uma pessoa ou produto) e precisa 
        acessar essas características por um nome.

        Quando você precisa de um mapeamento de chave-valor, onde a ordem dos itens não é importante.


Array de objetos: Um caso comum é quando você tem uma lista de entidades (como usuários ou produtos) e cada item dessa lista 
é representado por um objeto:
const usuarios = [
  { nome: "João", idade: 25 },
  { nome: "Maria", idade: 30 },
  { nome: "Pedro", idade: 20 }
];
console.log(usuarios[0].nome); // "João"

Objeto com array: Às vezes, um objeto pode ter um ou mais arrays como valores das suas propriedades:
const pessoa = {
  nome: "João",
  interesses: ["música", "programação", "futebol"]
};
console.log(pessoa.interesses[0]); // "música"



EXEMPLOS

                matriz/array

const pessoa = [
Dimitri", 
"Teixeira", 
30
]  

                Objeto

const pessoa = {
nome: "Dimitri",
sobrenome: "Teixeira",
idade: 30
}
*/