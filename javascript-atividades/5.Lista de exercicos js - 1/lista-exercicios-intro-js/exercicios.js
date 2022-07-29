// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const alturaRet = Number(prompt("Digite a altura"))
  const larguraRet = Number (prompt("Digite a largura"))
  const calculoRet = alturaRet*larguraRet

  console.log(calculoRet)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Digite o ano atual"))
  const anoNascimento = Number(prompt("Digite o seu ano de nascimento"))
  const idade = anoAtual-anoNascimento

  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

  const imc = peso / (altura*altura)
   /*  peso = prompt("Digite seu peso")
    altura = prompt("Digite sua altura")
    let altura1 = (Number (altura) * Number (altura))
    let imc = peso / altura1 */
  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nomeUsuario = prompt("Digite seu nome")
  const idadeUsuario = prompt("Digite sua idade")
  const emailUsuario = prompt("Digite seu email")

  console.log(`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Digite uma cor")
  const cor2 = prompt("Digite uma segunda cor")
  const cor3 = prompt("Digite uma terceira cor")
  const cores = [cor1, cor2, cor3]

  console.log(cores)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
   const frase = string
   const novaFrase = frase.toUpperCase()
   return novaFrase
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const custo1 = custo
  const ingresso = valorIngresso
  const lucro = custo1 / ingresso
  return lucro
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const palavra1 = string1
  const palavra2 = string2
  const comparacao = palavra1 >= palavra2
  return comparacao
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
const lista = array
return lista[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const lista1 = array
  return lista1[lista1.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
   const igualdade = string1.toLowerCase() >= string2.toLowerCase()
   return igualdade
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
 // implemente sua lógica aqui
  const anoAtual = Number(prompt("Digite o ano atual."))
  const anoNascimento = Number(prompt("Digite o ano do seu nascimento."))
  const anoEmissaoRg = Number(prompt("Digite o ano da emissão do seu RG."))
  const idadeUsuario = anoAtual - anoNascimento
  const rg = anoAtual - anoEmissaoRg

  const renovarCom5Anos = idadeUsuario <= 20 && rg >= 5
  const renovarCom10Anos = idadeUsuario > 20 && idadeUsuario < 50 && rg >= 10
  const renovarCom15Anos = idadeUsuario > 50 && rg >= 15

  const renovar =  renovarCom5Anos || renovarCom10Anos || renovarCom15Anos

  console.log(renovar)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const checar = ano 
  const anoBissexto = checar % 400 === 0
  const anoBissexto1 = checar % 4 === 0 && checar % 100 !== 0 
  const anoNaoBissexto = checar && anoBissexto && anoBissexto1

  const bissexto = anoNaoBissexto||anoBissexto||anoBissexto1
  return bissexto

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const idade = prompt ("Você tem mais de 18 anos?")
  const emCompleto = prompt("tem o ensino medio completo?")
  const disponibilidade = prompt("Você tem disponibilidade de horario?")
  
  const labenu = idade === "sim" && emCompleto === "sim" && disponibilidade === "sim"

  console.log(labenu)
}
checaValidadeInscricaoLabenu()