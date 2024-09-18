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
//function addTexto(){
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
const carror = []

carror[0] = "fusca"
carror[1] = "volto"
carror[2] = "chevetão"
carror[3] = "fiat 147"
carror[4] = "brasilia"


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

/*##############################################################################################################################
                        MÉTODOS PARA ARRAYS
Os métodos de array em JavaScript são funções predefinidas que permitem manipular, modificar e interagir com os elementos de um 
array de forma eficiente. 

métodos:
join: substitui as virgulas pelo que eu quiser.
ex.
nomeDoArray.join("adiciono o que eu quiser aqui")

pop: Remove o ultimo item da matriz.
ex.
nomeDoArray.pop();

push: Adiciona um novo valor na matriz no ultimo lugar.
ex.
nomeDoArray.push(insiraONovoValorAqui)

shift: Remove o primeiro item da Matriz, o item que antes ocupava o espaço 1 passa a ocupar o espaço 0.
ex.
nomeDoArray.shift();

unshift: adiciona um novo PRIMEIRO ITEM na matriz SEM APAGAR o que antes ocupava este lugar.
ex.
nomeDoArray.unshift(novoValorAOcuparAPosiçãoZero);

delete: remove o valor na posição indicada, mas não altera o comprimento do array nem renumera os índices. Isso significa 
que, após o uso de delete, a posição do array será deixada com o valor undefined, mas o comprimento do array não é alterado.
ex.
delete nomeDoArray[númeroDaPosiçãoASerEliminada]

splice: pode ser usado para remover ou adicionar elementos de um array, e ele ajusta o comprimento do array corretamente, 
além de mover os elementos subsequentes para preencher o espaço.
ex.

nomeDoArray.splice(numeroQueIndicaAPosiçãoNoArray, 0 para adicionar e 1 ou mais números para deletar a partir da posição previamente escolhi, valores/itens adicionados)

const abecedario ["a", "b", "c", "d", "i"]

abecedario.splice(4, 0, "e", "f", "g", "h")  ---> estou ADICIONANDO LETRAS AO ARRAY, pois usei o ZERO que indica que vou adicionar.

abecedario.splice(3, 1, "L") ----> eliminei aqui a letra D e adicionei o L na posição em que ela estava.

abecedario.splice(3, 1) ----> eliminei aqui a letra D e a letra E passou a ocupar o espaço 3.

abecedario.splice(1, 3) eliminei as casas 1, 2 e 3 (letras b, c, d) e letra i passou a ocupar o 1 espaço.

abecedario.splice(1, 3, "k", "m", "n") eliminei as casas 1, 2 e 3 (letras b, c, d) e as letras K, M e N entraram 
em seus respectivos lugares.


concat: Serve para concatenar duas matrizes.

slice: serve para cortar uma matriz e criar outra a partir de uma posição especifica numerada e pode ir até um limite ou
até o fim do array.
ex. indo até o fim do array.
const novaMatriz = matrizAntiga.slice(3)

ex. sendo limitada até a posição 7
const novaMatriz = matrizAntiga.slice(3,7)


sort: serve para ordenar por ordem alfabética os valores dentro da matriz.
ex.
matriz.sort()

Quando usado com número ele vai agrupar da seguinte forma 1, 10, 11, 12, 13...2, 20, 21, 22. Para organizar corretamente
os números de forma crescente, precisamos colocar uma função dentro de sort.
ex.
numeros.sort((a, b) => a - b);

Se quiser ordenar números de forma decrescente, é só invernet a subtração na função
ex.
numeros.sort((a, b) => b - a);

reverse: Serve para inverter a ordem dentro da matriz.
ex.
matriz.reverse()

forEach(): Executa uma função em cada item do array.
ex.
const conta = [1, 2, 3];
conta.forEach(item => console.log(item)); 

map(): Cria um novo array com os resultados da execução de uma função em cada item do array.

some(): Verifica se pelo menos um elemento no array satisfaz a condição fornecida.

every(): Verifica se todos os elementos no array satisfazem a condição fornecida.

find(): Retorna o primeiro elemento que satisfaz a condição fornecida.

includes(): Verifica se um determinado elemento existe no array.

const arr = [1, 2, 3, 4];


################################################################################################################################
*/

document.getElementById("teste").innerHTML = lista.join(" - ");

//concatenando Matrizes

const lista1 = ["alface", "couve", "rúcula"]
const lista2 = ["brócolis", "repolho", "milho"]
const lista3 = ["laranja", "limão"]

const doubleLista = lista1.concat(lista2, lista3)
document.getElementById("teste1").innerHTML = doubleLista.join(", ")

const fruta = doubleLista.slice(5)

//funções para numerais.

const numerado = [1, 14, 2, 7, 10, 30, 54, 19]


//função para pegar o maior número de um array
function maiorNumero(array) {
    return Math.max.apply(null, array)
}


//função para pegar o menor número de um array
function menorNumero(array) {
    return Math.min.apply(null, array)
}

//função para pegar números especificos, é preciso declarar uma variavel antes e filtrar usando a função criada.
const contagem20 = numerado.filter(filtragem) 

function filtragem(value, index, array){
    return value > 20
}

document.getElementById("teste2").innerHTML = maiorNumero(numerado)

document.getElementById("teste3").innerHTML = menorNumero(numerado)

document.getElementById("teste4").innerHTML = contagem20.join(", ")


/*#####################################################################################################################
revisão de laços de repetição.

#######################################################################################################################
*/

var ano = new Date().getFullYear();

for(let nascimento = ano; nascimento >= 1900; nascimento--)
    document.getElementById("ano").innerHTML += "<option value = '" + nascimento +"'>" + nascimento + "</option>"

/*######################################################################################################################
                                Eventos de tempo
setTimeout: Executa uma função APENAS UMA VEZ depois de um tempo pré-determinado em milissegundos.

setInterval: Executa uma função CONTINUAMENTE em intervalo de tempo pré-determinado.

Ambos podem ser usados para jogos e também para atualizar as informações extraidas de uma API ou ainda para manter um 
token de login.




let temporal, temporal2

function ativar() {
    temporal = setInterval(function(){
        document.body.style.backgroundColor = "blue"
    }, 2000);
    temporal2 = setInterval(function(){
        document.body.style.backgroundColor = "white"
    }, 3000)
}

ativar()

function parar() {
    clearInterval(temporal, temporal2)
}
########################################################################################################################
*/

let cronometro

function cronometrar(){
    cronometro = setInterval(function(){
    cronada = document.getElementById("cronando").innerHTML
    tempando = parseInt(cronada) +1
    document.getElementById("cronando").innerHTML = tempando
}, 1000)
}

function para(){
    clearInterval(cronada)
}

/*
   let cronometro;
        let tempoRestante = 10; // Tempo inicial em segundos (você pode alterar)

        function cronometrar() {
            cronometro = setInterval(function() {
                // Verifica se o tempo chegou a 0 ou menos
                if (tempoRestante <= 0) {
                    document.getElementById("cronando").innerHTML = "Tempo acabou!";
                    clearInterval(cronometro); // Para o cronômetro
                } else {
                    // Atualiza o tempo restante
                    document.getElementById("cronando").innerHTML = tempoRestante + " segundos restantes";

                    // Exibe uma mensagem especial quando faltar 10 segundos
                    if (tempoRestante === 10) {
                        document.getElementById("mensagem").innerHTML = "Faltam apenas 10 segundos!";
                    } else {
                        document.getElementById("mensagem").innerHTML = ""; // Limpa a mensagem quando não faltar 10 segundos
                    }

                    // Decrementa o tempo
                    tempoRestante--;
                }
            }, 1000); // Decrementa a cada 1 segundo
        }

        function parar() {
            clearInterval(cronometro); // Para o cronômetro
        }

*/

/*############################################################################################################################
                        CLASSES
    No javascript as CLASSES usam um método chamado construtor() para criar objetos de forma mais estruturada e com sintaxe de 
orientação a objetos. A classe serve como um molde para criar objetos com atributos e comportamentos/métodos.

            AO DECLARAR UMA CLASSE, A PRIMEIRA LETRA SEMPRE SERÁ MAIUSCULA, DIFERENTE DE ARRAYS E OBJETOS.

            UMA CLASSE DEVE SEMPRE SER CHAMADA ABAIXO DE ONDE ELA FOI DECLARADA.

    O constructor() é um método especial dentro de uma classe, utilizado para inicializar os valores de uma nova instância dessa 
classe. Esse método é chamado automaticamente quando você cria um novo objeto com a palavra-chave new. Dentro do constructor(), 
você pode definir valores iniciais para as propriedades do objeto ou executar qualquer outro código necessário para a criação do 
objeto.
    Quando o constructor() deve ser usado?

    O constructor() deve ser utilizado quando você precisa inicializar as propriedades de um objeto ao criar uma instância da 
classe. Ele é chamado automaticamente quando você cria um novo objeto com a palavra-chave new.

    Use o constructor() quando precisar:

    Inicializar propriedades: Definir valores iniciais para as variáveis que fazem parte do objeto.

    Executar código de configuração: Por exemplo, quando é necessário configurar algo no momento da criação do objeto, como abrir 
    uma conexão com banco de dados, carregar dados, etc.

    Esse mecanismo torna o código mais legível e reutilizável, ajudando na organização e manutenção do código.

##############################################################################################################################
*/

class Carroca{
    constructor(valor1, valor2, valor3, valor4){
        this.marca = valor1;
        this.modelo = valor2;
        this.cor = valor3;
        this.anos = valor4;
    }
    //O método vai fora do constructor
    freada() {
        return this.modelo + " freou";
    }
}

const uno = new Carroca("Fiat", "Uno", "Vermelho", 1998)
const gol = new Carroca("volkswagen", "Gol", "branco", 1996 )

console.log(uno)
console.log(gol.freada())

/*###############################################################################################################################
                    MANIPULAÇÃO DE DATAS.
    DATE é um objeto especifico para trabalhar com datas em javascript, servindo para segundos, horas, dias, meses e anos.

#################################################################################################################################
*/

// let data = new Date    COMENTEI ESSA PARTE DO CÓDIGO POIS JÁ O UTILIZEI ANTES NESTE DOCUMENTO.

//let anual = data.getFullYear();                //mostra ao ano
//let mes = data.getMonth()   //mostra de 0 a 11
//let dia = data.getDay()   //mostra o dia da semana de 0 a 6
//let hora = data.getHours() //de 0 até 23
//let min = data.getMinutes() // de 0 até 59
//let sec = data.getSeconds() // de 0 até 59
//let miliSec = data.getMilliseconds()// de 0 até 999
//let dataBR = data.toLocaleString('pt-BR', {timeS tyle:'short'}) /* {datastyle:'short'} vai mostrar só a data || 
//{timestyle} vai mostrar só a hora br. mostra data e hora de acordo com o que é usado em determinado país.*/

// comparar datas

var hoje = new Date();
var vencimento = new Date(2022, 0, 15)

if (hoje > vencimento) {
    console.log("sua conta tá vencida")
}else{
    console.log("ainda não venceu, vá pagar")
}

// diferença entre duas datas.

var dataInicial = new Date()
var dataFinal = new Date(2026, 0, 1)

var difTemp = dataFinal.getTime() - dataInicial.getTime()

var tempTotal = Math.ceil(difTemp / (24 * 60 * 60 * 1000)) //nesta variavel tem a conta para transformar milisegundos em dias

/*###############################################################################################################################
                                JSON
    JSON é um modo simples de converter um objeto em texto ou vice versa.

    JSON.paser()          -> converte texto no padrão JSON em objetos
    JSON.stringify()      -> converte objetos em texto padrão JSON
#################################################################################################################################*/



const peixe = {
    especie: "tilapia",
    tamanho: 15,
    tipo: "de rio"
   }

let texto = JSON.stringify(peixe)

document.getElementById('area').innerHTML = texto

let obj = JSON.parse(texto);

console.log(obj.tamanho)


function cep(){
    let textoCep = document.getElementById('cepado').value
    const ajax = new XMLHttpRequest()     //faz uma requisição ao site, sem precisar acessar pelo navegador
ajax.open('GET', 'https://viacep.com.br/ws/' + textoCep + '/json')
ajax.send()
ajax.onload = function(){
    document.getElementById('aria').innerHTML = this.responseText

//texto foi transformado em objeto
    let objec = JSON.parse(this.responseText)

//os valores especificos foram escolhidos.
    let logradouro = objec.logradouro
    console.log("logradouro" + logradouro)
}
}


/*@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                    CONTINUAÇÃO JSON

   JSON (JavaScript Object Notation) é uma forma simples e leve de representar dados como objetos, utilizando o formato 
chave: valor. Ele é amplamente usado para transferência de dados entre sistemas, como entre o front-end e o back-end de 
uma aplicação.
A estrutura for...in é muito útil para percorrer propriedades de um objeto em JavaScript. Com ela, é possível acessar 
dinamicamente todas as chaves e valores de um objeto JSON.
O JSON é um formato universal, amplamente aceito por diferentes linguagens de programação. Ele facilita a integração de 
sistemas através de APIs REST (Representational State Transfer), que são padrões modernos de comunicação entre aplicações 
na web.
Antes do JSON, o XML era muito utilizado, mas por ser mais verboso e complexo, caiu em desuso em muitos cenários.

Outra alternativa moderna ao JSON é o GraphQL, que oferece uma abordagem mais flexível e eficiente, permitindo que o 
cliente escolha exatamente quais dados deseja receber da API.
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*/

let invoice = {
    name: "Felipe",
    age: 28,
    products: {
        0: ["mouse ", "29.90"],
        1: ["teclado ", "129.99"],
        2: ["monitor ", "899.99"]
    }, taxes: "98.90"
}
function generateInvoice(invoice){
console.log(`O comprador é ${invoice.name}`)
console.log(`A idade do comprador é ${invoice.age}`)
console.log("----------------------------------------------------------------------------");
console.log("Produtos:");


for(let index in invoice.products){
    let [productName, productPrice] = invoice.products[index]
    console.log(`- ${productName}: R$ ${productPrice}`)
}
}

generateInvoice(invoice)


/*################################################################################################################################## 
                        CLASSES E OBJETOS
        Classe é a padronização de uma estrutura de dados.
        Objeto mantém a padronização da forma (classe) e emplementa seus valores das propriedades.


##################################################################################################################################*/

















