//-> so vai aparecer o resultado bool1 e bool2
// -> declarar como Number e usar const

// exercicio Nº 1
//a

/*
const suaIdade = Number (prompt ("Qual é sua idade?"))
const idadeDeSuaAmiga = Number (prompt (" Qual a idade de seu amigx?"))

const resultado = suaIdade >= idadeDeSuaAmiga
const diferença = suaIdade - idadeDeSuaAmiga

console.log(resultado)
console.log(diferença)
*/

//Exercico Nº 2

/*
const numeroPar = Number (prompt("Digite um número par"))

const Resultado = numeroPar / 2

console.log(Resultado)

// --> d - ele divide normalmente
*/


//Exercicio Nº3

/*
const suaIdade = Number (prompt (" Qual é sua idade?"))

console.log(" Sua idade em meses", suaIdade * 12)
console.log(" Sua idade em dias", suaIdade *365)
console.log(" Sua idade em horas", suaIdade *8760)
*/


//Exercicio Nº4

const primeiroNumero = Number (prompt (" Digite um número"))
const segundoNumero = Number (prompt (" Digite um segundo número"))



console.log("O primeiro número é maior que o segundo?", primeiroNumero>segundoNumero)

console.log("O primeiro número é igual ao segundo?", primeiroNumero===segundoNumero)

console.log("O primeiro número é divisivel pelo segundo?", primeiroNumero%segundoNumero === 0)

console.log("O segundo número é divisivel pelo primeiro número?", segundoNumero%primeiroNumero === 0 )