
/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

 function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}  
function pontuacao (escolha1, escolha2){
   let resultado1 = escolha1[1]
   let resultado2 = escolha2[1]

   if(resultado1==="A"){
      resultado1 = 11
   }
   if(resultado1==="J"||resultado1==="Q"||resultado1==="K"){
      resultado1 = 10
   }
   if(resultado2==="A"){
      resultado2 = 11
   }
   if(resultado2==="J"||resultado2==="Q"||resultado2==="K"){
      resultado2 = 10
   }
   return resultado1 + resultado2
}

function escolhas(naipes, cartas){
   return [naipes[getRandomInt(0, 3)], cartas[getRandomInt(0, 11)]]
}

console.log("Bem vindo ao jogo blackjack")

let resultado = window.confirm("Deseja iniciar uma rodada?")
let naipes = ["♥️", "♣️", "♦️", "♠️"]
let cartas = ["A", 2, 3, 4, 5, 6, 7, 8, 9, "J","Q", "K"]
let escolhaUsuario = escolhas(naipes, cartas)
let escolhaUsuario2 =  escolhas(naipes, cartas)    //[naipes[getRandomInt(0, 3)], cartas[getRandomInt(0, 11)]]
let escolhaComputador = escolhas(naipes, cartas)   //[naipes[getRandomInt(0, 3)], cartas[getRandomInt(0,11)]]
let escolhaComputador2 = escolhas(naipes, cartas)  //[naipes[getRandomInt(0, 3)], cartas[getRandomInt(0, 11)]]
let resultadoUsuario = pontuacao(escolhaUsuario, escolhaUsuario2)
let resultadoComputador = pontuacao(escolhaComputador, escolhaComputador2)

if (resultado){
   console.log(`Usuário - cartas: ${escolhaUsuario[1]}${escolhaUsuario[0]} ${escolhaUsuario2[1]}${escolhaUsuario2[0]} - ${resultadoUsuario}`)
   console.log(`Computador - cartas: ${escolhaComputador[1]}${escolhaComputador[0]} ${escolhaComputador2[1]}${escolhaComputador2[0]} - ${resultadoComputador}`)
   
   if(resultadoUsuario>resultadoComputador){
      console.log("Usuário venceu!")
   }
   else if(resultadoUsuario===resultadoComputador){
      console.log("Empate!")
   }
   else{
      console.log("Computador venceu!")
   }
}
else{
   console.log("O jogo acabou!")
} 