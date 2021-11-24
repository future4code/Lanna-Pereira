
//----------### INTERPRETAÇÃO DE CÓDIGOS ###-----------

//1.----------------------------
//a. vai imprimir no console o resultado de 2 * 5 (10) e 5 * 10 (50)
//b. não vai aparecer nada

//2.----------------------------
// a. vai pedir uma informação para o usuario(com o parametro ), dentro da funçao os textos vão ser em caixa baixa e se na frase tem a palavra cenoura
// b. todas serão true

//------------### ESCRITA DE CÓDIGOS ###---------------------

//1. --------------------------------

function infoUser (){
    console.log (`Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante`)
}
infoUser()

function informaçãoUsuario (nome, idade, cidade, profissao) {
    nome = prompt("Digite seu nome")
    idade = prompt("Quantos anos você tem?")
    cidade = prompt("Onde você mora?")
    profissao = prompt("Com o que você trabalha?")

console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)
}

//informaçãoUsuario()

//2.--------------------------------------------------

function questaoA(num1, num2) {
   const soma =  num1 + num2
return soma
}
console.log("A.",questaoA(520, 189))

function questaoB(num1, num2) {
    num1 = prompt("Digite um número")
    num2 = prompt ("Digite um segundo número")
    
    const comparacao = num1 >= num2
return comparacao
}
//console.log("B.", questaoB())

function questaoC(num1) {
    num1 = prompt("Digite um numero e verifique se é par")
    const par = num1 % 2 === 0
    return par
}
//console.log(questaoC())

function questaoD(string) {
    string = prompt("Digite uma frase")
    const tamanho = (`${string.toUpperCase()} e o tamanho é ${string.length}.`)
    return tamanho
}
//console.log(questaoD())

//3.----------------------------------

function soma1(num1, num2){  
const soma = num1 + num2
return soma
}

function subtracao (num1, num2){
   const subtrair = num1 - num2
   return subtrair
} 
function multiplicacao (num1, num2){
    const multi = num1 * num2
    return multi
}
function divisao (num1, num2) {
    const divisao = num1 / num2
    return divisao
}

//const num1 = Number(prompt("Digite um numero"))
//const num2 = Number(prompt("Digite outro numero"))
/* 
console.log(`Números inseridos: ${num1} e ${num2}.`)
console.log(`Soma:`, soma1(num1, num2))
console.log(`Subtração:`, subtracao(num1, num2))
console.log(`Multiplicação:`, multiplicacao(num1, num2))
console.log(`Divisão:`, divisao(num1, num2))
 */
//### DESAFIO ###

//1. 
const parametro1 = (texto) => {
    console.log(texto)
}
parametro1('Hello World!')

const parametro2 = (valor1, valor2) => {
    const soma = valor1 + valor2
parametro1 (soma)
}
parametro2(56, 18)

//2.----------------------------

function teoremaPitagoras(hipo, catOposto, catAdjacente){
    catOposto = prompt("Digite o cateto oposto")
    catAdjacente = prompt("Digite o cateto adjacente")
    //cateto1 = catOposto * catOposto
    //cateto2 = catAdjacente * catAdjacente
    hipo = (catOposto*catOposto) + (catAdjacente*catAdjacente)
    hipotenusa = Math.sqrt(hipo)
    return hipotenusa
}
console.log(`Hipotenusa = ${teoremaPitagoras()}`)














