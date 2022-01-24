//---- ### INTERPRETAÇÃO DE CÓDIGO ### ---------------

//1. -------------------------------------

//a). realiza o teste para ver se um número é par
//b). números pares
//c). números impares

//2. ------------------------------------

//a). ele serve para dizer o preço de uma fruta
//b). "O preço da fruta Maçã é, R$2.25"
//c).  como o bloco de código não encerra, o preço passa a ser a do default

//3. -----------------------------------

//a). pede para o usuário inserir um número

//b). se o usuário digitar 10 , vai aparecer a mensagem secreta e o erro
  //  se o usuário digitar -10 , vai aparecer o erro

//c). sim, o erro acontece pois a variável mensagem esta dentro do if e não pode ser acessada pelo escopo global


//------------### ESCRITA DE CÓDIGO ###------------------

//1.----------------------------------------------------

/* const idadeUsuario = Number(prompt("Digite sua idade"))

if(idadeUsuario >= 18){
    console.log("Parabéns!!! Você já pode tirar sua CNH.")
}else{
    console.log("Infelizmente, você tem que esperar mais um pouquinho =(")
}
 */

//2. ---------------------------------------------------

//const turno = prompt("Digite de acordo com o seu turno (M)Manhã, (V)Vespertino ou (N)Noite.")

/* if(turno === "M"){
    console.log("Bom dia.")
}else if(turno === "V"){
    console.log("Boa tarde.")
}else if(turno === "N"){
    console.log("Boa noite.")
}else{
    console.log("Error.")
} */

//3. ------------------------------------
/* switch(turno){
    case"M":
     console.log("Bom dia!")
     break
    case"V":
     console.log("Boa tarde!")
     break
    case"N":
     console.log("Boa noite!")
     break
    default:
     console.log("Error!")
} */


//4. --------------------------------------------
// const generoFilme = prompt("Qual o gênero que você quer assistir?")
// const precoIngresso = prompt("Qual o valor do ingresso?")

// if(generoFilme === "fantasia" && precoIngresso <= 15){
//     console.log("Bom filme! Entre e aproveite a sessão.")
// }else{
//     console.log("Escolha outro filme!")
// }

//---------### DESAFIO ###--------------
//1:-------------------------------
/* if(generoFilme === "fantasia" && precoIngresso <= 15){
    const lanchinho = prompt("Qual lanchinho você quer comprar?")
    console.log(`Bom filme! Aproveite a sessão de ${generoFilme} com seu(a) ${lanchinho}!`)
}else{
    console.log("Escolha outro filme!")
} */


//teste//
/* if (generoFilme && precoIngresso <= 15){
    const lanche = prompt("Qual snack que você quer comprar?")
    console.log(`Bom filme! Entre e aproveite sua sessão de ${generoFilme} com seu(a) ${lanche}.`)
}else{
    console.log("Escolha outro filme!")
}
 */

//2:--------------------------------------------------

const nomeComprador = prompt("Digite seu nome completo.")
const tipoJogo = prompt("Digite a catagoria do jogo: (IN)Internacional ou (DO)Doméstico")
const etapaJogo = prompt("Qual a etapa do jogo: (SF)semi-final, (DT)decisão de terceiro lugar, (FI)final?")
const categoria = Number(prompt("Qual é a categoria 1, 2, 3 ou 4?"))
const quantidadeIngresso = Number(prompt("Digite a quantidade de ingresso."))
const formaPagamento = prompt("Qual a forma de pagamento? [D]Débito, [C]crédito, [B]boleto, [P]pix ou [T]transferência")

let textoFormaPagamento
switch(formaPagamento){
    case"D":
     textoFormaPagamento = "Cartão Débito"
     break
    case"C":
     textoFormaPagamento = "Cartão Crédito"
     break
    case"B":
     textoFormaPagamento = "Boleto"
     break
    case"T":
     textoFormaPagamento = "Transferência"
     break
    case"P":
     textoFormaPagamento = "Pix"  
     break
     default:
      textoFormaPagamento = "Selecione uma forma de pagamento." 
}

let precoUnitarioIngresso
let textoEtapaJogo
  switch (etapaJogo) {
        case "SF":
          textoEtapaJogo = "Semi-Final"
          break;
        case"DT":
          textoEtapaJogo = "Decisão Terceiro"
          break
        case"FI":
          textoEtapaJogo = "Final"
          break
      default:
          textoEtapaJogo = "Error!"
          break;
  }
switch (etapaJogo) {
     case"SF":
        switch(categoria){

        case 1:
            precoUnitarioIngresso = 1320
            break;
        case 2: 
            precoUnitarioIngresso = 880
            break
        case 3:
            precoUnitarioIngresso = 550
            break
        case 4:
            precoUnitarioIngresso = 220
            break
        default:
            precoUnitarioIngresso = 0
            break;
        }
     break;  
    case"DT":
        switch(categoria){

            case 1:
                precoUnitarioIngresso = 660
                break
            case 2:
                precoUnitarioIngresso = 440
                break
            case 3:
                precoUnitarioIngresso = 330
                break
            case 4:
                precoUnitarioIngresso = 170
                break
            default:
                precoUnitarioIngresso = 0
                break
        }
     break;   
    case"FI":
        switch(categoria){
            case 1:
                precoUnitarioIngresso = 1980
                break
            case 2:
                precoUnitarioIngresso = 1320
                break
            case 3:
                precoUnitarioIngresso = 880
                break
            case 4: 
                precoUnitarioIngresso = 330
                break
            default:
                precoUnitarioIngresso = 0
                break
        }
     break;   
}

if(tipoJogo === "IN"){
    precoUnitarioIngresso = precoUnitarioIngresso * 4.10
    precoUnitarioIngresso = precoUnitarioIngresso.toFixed(2)
}
let textoTipo
if(tipoJogo === "DO"){
    textoTipo = "Nacional"
}else if(tipoJogo === "IN"){
    textoTipo = "Internacional"
}else{
    textoTipo = "Error!"
}

console.log("------Dados da compra------")
console.log(`Nome do comprador: ${nomeComprador}`)
console.log(`Tipo do Jogo: ${textoTipo}`)
console.log(`Etapa do jogo: ${textoEtapaJogo}`)
console.log(`Categoria: ${categoria}`)
console.log(`Quantidade de Ingresso:${quantidadeIngresso}`)
console.log(`------Valores------`)
console.log(`Valor do ingresso:R$${precoUnitarioIngresso}`)
console.log(`Valor total: R$${precoUnitarioIngresso*quantidadeIngresso}`)
console.log(`------Forma de pagamento------`)
console.log(textoFormaPagamento)







