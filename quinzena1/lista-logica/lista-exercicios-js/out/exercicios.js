// Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}

// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
 // escreva seu código aqui
 const altura = prompt ("Altura") 
 const largura = prompt ("largura")
 const resultado = (Number(altura) * Number(largura))

 console.log (resultado)
}

// Exercício 2
function imprimeIdade() {
  // escreva seu código aqui
const anoAtual = prompt ("Ano atual")
const anoDeNascimento = prompt("ano nascimento")
const idade = (Number(anoAtual) - Number(anoDeNascimento))

console.log(idade)


}
 

// Exercício 3
function calculaIMC() {
  // escreva seu código aqui
  const peso = prompt ('Digite seu peso')
  const altura = prompt ('digite sua idade')
  const altura2 = (Number (altura) * Number (altura))
  const imc = (Number(peso) / Number(altura2))

  console.log(imc)
}

// Exercício 4
function imprimeInformacoesUsuario() {
  // escreva seu código aqui
  const nome = prompt('Digite seu nome')
  const idade = prompt ('Digite sua idade')
  const email = prompt ('Digite seu email')
  const frase = "Meu nome é " + nome + ", tenho " + idade + " anos, e o meu email é " + email + "."
  
  console.log(frase)

}

// Exercício 5
function imprimeTresCoresFavoritas() {
  // escreva seu código aqui
  const cor1 = prompt (' Digite uma cor 1')
  const cor2 = prompt ('Digite uma cor 2')
  const cor3 = prompt ('Digite uma cor 3')

  const cores = [cor1, cor2, cor3]

  console.log(cores)
}

// Exercício 6
function retornaStringEmMaiuscula() {
  // escreva seu código aqui
  const oi = prompt ('digite algo')
  const frase = oi.toUpperCase()

  console.log(frase)
}

// Exercício 7
function calculaIngressosEspetaculo() {
  // escreva seu código aqui
  const custo = prompt(" Qual é o custo?")
  const valorDoIngresso = prompt(" Qual é o valor do ingresso?")

  const valor = (Number(custo) / Number (valorDoIngresso))
  console.log(valor)
}

// Exercício 8
function checaStringsMesmoTamanho() {
  // escreva seu código aqui
  const string1 = prompt('Digite algo')
  const string2 = prompt('Digite novamente')

  console.log(string1 >= string2)

}

// Exercício 9
function checaIgualdadeDesconsiderandoCase() {
  // escreva seu código aqui
  const string1 = prompt('digite algo')
  const string2 = prompt('digite novamente')
  const result = string1.toLowerCase() >= string2.toLowerCase()
  console.log(result)
}

// Exercício 10
function checaRenovacaoRG() {
  // escreva seu código aqui
  const anoAtual = Number(prompt('Digite o ano atual'))
  const anoDeNascimento = Number(prompt('Digite o ano do nascimento'))
  const anoDeEmissaoDoRg = Number(prompt('Digite o ano da emissão do RG'))
  const idadeDoUsuario = anoAtual - anoDeNascimento
  const rg = anoAtual - anoDeEmissaoDoRg
  const renovarCom5 = idadeDoUsuario <= 20 && rg >= 5
  const renovarCom10 = idadeDoUsuario > 20 && idadeDoUsuario < 50 && rg >= 10
  const renovarCom15 = idadeDoUsuario > 50 && rg >= 15
  const renovandoRg = renovarCom5 || renovarCom10 || renovarCom15
console.log(renovandoRg)
}

// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
  const checagemAno = prompt ('Digite ano')
  const bissexto1 = checagemAno % 400 === 0
  const bissexto2 = checagemAno % 4 === 0 && checagemAno % 100!==0
  const naoBissexto= checagemAno&&bissexto1&&bissexto2
  console.log(naoBissexto||bissexto1||bissexto2)


}

// Exercício 12
function checaValidadeInscricaoLabenu() {
  // escreva seu código aqui
  const idade = prompt ('digite sua idade')
  const ensMedio = prompt ('Já concluiu o ensino médio?')
  const disHorario = prompt ('Tens disponibilidade de horario?')

  