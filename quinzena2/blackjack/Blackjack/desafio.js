/* /**
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

/*function contador (cartas){
   let acumulador = 0
   for(let i=0;i<cartas.length;i++){
     acumulador+=cartas[i].valor 
   }
   return acumulador
}

function resultadoJogo(valorUsuario, valorComputador){
   if(valorUsuario>21&&valorComputador>21){
      return "Empate!"
   }
   if(valorUsuario>21&&valorComputador<=21){
      return "Computador venceu!"
   }
   if(valorUsuario<=21&&valorComputador>21){
      return "Usuário venceu!"
   }
   if(valorUsuario>valorComputador){
      return "Usuário venceu!"
   }
   else if(valorUsuario===valorComputador){
      return "Empate!"
   }
   else{
      return "Computador venceu!"
   }
}

function textoCartas(cartas){
   let texto =""
   for(let i=0;i<cartas.length;i++){
      texto+=`${cartas[i].texto} `
   }
   return texto
}

    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    let cartasUsuario = []
    let cartasComputador = []
    let usuario = 0
    let computador = 0
    let rodada = 0
    let escolha = window.confirm("Deseja iniciar uma rodada?")
    if(escolha){
      cartasUsuario.push(comprarCarta(), comprarCarta())  
      cartasComputador.push(comprarCarta(), comprarCarta())
      if(contador(cartasUsuario===22)){
         cartasUsuario = []
         cartasUsuario.push(comprarCarta(), comprarCarta())
      }
      if (contador(cartasComputador===22)){
         cartasComputador = []
         cartasComputador.push(comprarCarta(), comprarCarta())
      }
      while(true){
         if(usuario>=21){
            window.alert(`Usuário - Cartas: ${textoCartas(cartasUsuario)} - Pontuação: ${usuario}\nComputador - Cartas: ${textoCartas(cartasComputador)} - Pontuação: ${computador}\n ${resultadoJogo(usuario, computador)}`)
            break
         }
         if(computador>=21){
            window.alert(`Usuário - Cartas: ${textoCartas(cartasUsuario)} - Pontuação: ${usuario}\nComputador - Cartas: ${textoCartas(cartasComputador)} - Pontuação: ${computador}\n ${resultadoJogo(usuario, computador)}`)
            break
         }
         let escolha = window.confirm(`Suas cartas são ${cartasUsuario[rodada].texto}${cartasUsuario[rodada+1].texto}. A carta revelada do computador é ${cartasComputador[rodada].texto}.\nDeseja comprar mais uma carta?`)
         usuario = contador(cartasUsuario)
         computador = contador(cartasComputador)
         if(escolha){
            if(usuario>=21){
               window.alert(`Usuário - Cartas: ${textoCartas(cartasUsuario)} - Pontuação: ${usuario}\nComputador - Cartas: ${textoCartas(cartasComputador)} - Pontuação: ${computador}\n ${resultadoJogo(usuario, computador)}`)
               break
            }
           cartasUsuario.push(comprarCarta())
           cartasComputador.push(comprarCarta()) 
           usuario = contador(cartasUsuario)

           if(computador>=21){
            window.alert(`Usuário - Cartas: ${textoCartas(cartasUsuario)} - Pontuação: ${usuario}\nComputador - Cartas: ${textoCartas(cartasComputador)} - Pontuação: ${computador}\n ${resultadoJogo(usuario, computador)}`)
            break
         }
           
           computador = contador(cartasComputador)
           
         }
         else{
            window.alert(`Usuário - Cartas: ${textoCartas(cartasUsuario)} - Pontuação: ${usuario}\nComputador - Cartas: ${textoCartas(cartasComputador)} - Pontuação: ${computador}\n ${resultadoJogo(usuario, computador)}`)
            break
         }
         rodada++
       }
      
   
   }
    else{
      console.log("Partida cancelada")
    }
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 */