/* 
Exercicio 1
a) diz se o numero divido é exato

b) numeros divididos sem resto

c) numero que divididos não são exatos

*/

//---------------------------------------------------

/* 
Exercicio 2
a) é uma condicional que faz o codigo tomar um rumo de acordo com as respostas

b) o preço da fruta maçã é R$ 2.25

c) ??

*/

//-------------------------------------------------

 /* 
 Exercicio 3

a) pede para o usuario digitar um numero

b) se um usuario digitar 10 o numero passa pois é maior que 0, e se fosse -10 não apareceria mensagem

c) sim, o console.log de mensagem não vai aparecer porque não tem uma const chamada mensagem

 */

//____________>>__>>__>>___Escrita de codigo_>>__>>__>>__>>____

//------------------Exercicio 1
/*
const idade = Number (prompt("Qual é a sua idade?"))
if(idade >=18){
    console.log("Você pode dirigir")
} else {
    if (idade < 18 ){
        console.log("Você não pode dirigir")
    }
}
*/
//------------------Exercicio 2 ------------------
/*
 const turno = prompt ("digite o turno desejado")
  if (turno === "Manhã") {
      console.log("Bom dia!")
  } else if (turno === "Vespertino"){
      console.log("Boa tarde!")
  } else (turno === "Nortuno") 
      console.log("Boa noite!")
  
 //-----Exercicio 3 -->> switch Case------

 switch(turno) {
    case "Manhã":
        console.log("Bom dia!")
    break

    case "Vespertino": 
       console.log("Boa tarde!")
    break

    case "Noturno":
        console.log("Boa noite!")
    break
    default:
        console.log("Escolha um turno entre Manhã, Verpertino ou Noturno")
}
*/

//--------------Exercicio 4 -------------------

/* const generoFilme = prompt("Digite um genero")
const ticket = Number(prompt("Qual o preço do ticket?"))
function assistirOuNao(genero , preço){
    if((genero === "Fantasia") && (preço <= 15)){
        (console.log("Bom filme :)"))
     } else {
        (console.log("Escolhe outro filme :( "))
     }
    
}
assistirOuNao(generoFilme , ticket) */