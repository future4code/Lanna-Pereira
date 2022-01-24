//------#### INTERPRETAÇÃO DE CÓDIGO ###------
/* ....atividade 1 ......
                    const bool1 = true
                    const bool2 = false
                    const bool3 = !bool2

                    let resultado = bool1 && bool2
                    console.log("a. ", resultado)

                    resultado = bool1 && bool2 && bool3 
                    console.log("b. ", resultado) 

                    resultado = !resultado && (bool1 || bool2) 
                    console.log("c. ", resultado)

                    console.log("d. ", typeof resultado)
 */
/*------resposta------------------------
    o const bool3 = !bool2 - retorna o resultado oposto (False -> vira -> true)

   console (a) retorna false, ja que bool1 é true e bool2 é false (&& -> T && F = F
      
   console (b) retorna false

   console (c) retorna true,

 ja que no console b o resultado é false
o !resultado = true
bool1(true) || bool2(false) = true
!resultado(true) && (Bool1 || bool2 (True))
   true        &&(ou)  true  
   resultado = True


   console (d) retorna o tipo da variavel (que é um boolean)
*/
//.......atividade 2 e 3 .............

                    /* let primeiroNumero = prompt("Digite um numero!")
                    let segundoNumero = prompt("Digite outro numero!")

                    const soma = primeiroNumero + segundoNumero

                    console.log(soma)*/

// no console vai juntar os dois numero pois serão consideradas como string("15" + "15" = 1515  *tudo que vem de prompt é string*), para resolver esse problema teria que declarar o prompt como number

/* let primeiroNumero = Number (prompt("Digite um numero!"))
   let segundoNumero = Number (prompt("Digite outro numero!"))

   const soma = primeiroNumero + segundoNumero

   console.log(soma)
 */

//------#### ESCRITA DE CÓDIGO ###------

//........ Atividade 1........
/* 
const idadeUsuario = prompt ("Qual é a sua idade?")
const idadeAmigoUsuario = prompt ("Qual é a idade do seu(a) melhor(a) amigo(a)") 
*funciona se não declarar como number

console.log(idadeUsuario >= idadeAmigoUsuario)
 */
 // (a) e (b)
                  /*   const numeroUsuario = Number(prompt("Digite um numero"))

                    const resto = numeroUsuario % 2

                    console.log(resto)*/

 //(c)--> aparece como 0 (já que não existe resto com divisão de numeros pares)
 //(d)--> o resultado sempre aparece como 1 (existe resto com divisão de numeros impares )

//......... Atividade 2 ........
/* 
            const nome = prompt ("Digite seu nome")
            const idadeUsuario = Number(prompt("Digite sua idade"))

            const idadeMeses = idadeUsuario * 12
            const idadeDias = idadeUsuario * 365
            const idadeHoras = idadeUsuario * 8760

            console.log(`Olá, ${nome}`)
            console.log(`Sua idade em meses é : ${idadeMeses}`)
            console.log(`Sua idade em dias é : ${idadeDias}`)
            console.log(`Sua idade em horas é : ${idadeHoras}`)
 */


//......... Atividade 3 ...........
 
            /* const numeroUsuario1 = prompt("Digite um número")
            const numeroUsuario2 = prompt("Digite outro número")

            const maior = numeroUsuario1 > numeroUsuario2
            const igual = numeroUsuario1 === numeroUsuario2
            const div1 = numeroUsuario1 % numeroUsuario2 === 0
            const div2 = numeroUsuario2 % numeroUsuario1 === 0 

            console.log("O primeiro numero é maior que segundo?", maior)
            console.log("O primeiro numero é igual ao segundo?", igual)
            console.log("O primeiro numero é divisível pelo segundo?", div1)
            console.log("O segundo numero é divisível pelo primeiro?", div2) */

//const divisão1 = numero1 % numero2 === 0 // para comparar se (divisão )é possivel


// ---------- DESAFIOS -----------

//.......... Atividade 1 ...............

//(a)-----------------------------------------------
/* 
   const fahrenheit = 77 
   const kelvin = (fahrenheit - 32)*(5/9) + 273.15

   console.log(`77º em fahrenheit é ${kelvin} em graus kelvin`)

 */

//(b)--------------------------------------------------
/* 
   const celsius = 80
   const fahrenheit = (celsius)*(9/5)+32

   console.log(`80º(celsius) em graus fahrenheit é ${fahrenheit}º `)
*/


//c)--------------------------------------------------------
 
/* const celsius = 30
   const kelvin = (celsius) + 273.15
   const fahrenheit = (celsius)*(9/5) + 32

   console.log(`O resultado é ${kelvin}º kelvin`)
   console.log(`o resultado é ${fahrenheit}º fahrenheit`)
*/
 

// d)-----------------------------------------------------

/* const temperaturaUsusario = Number(prompt("Digite uma temperatura(celsius)"))
   const kelvin = temperaturaUsusario + 273.15 
   const fahrenheit = temperaturaUsusario * (9/5) + 32

   console.log(`a temperatura ${temperaturaUsusario}º(C) em kelvin é ${kelvin}º, e em fahrenheit é : ${fahrenheit}º.`)
 */

//...... Atividade 2 ......

//a)---------------------------------------------------

/* const custoQuilowatt = 0.05
   const consumoKw = 280
   const resultado = 280*0.05

   console.log(`O consumo de 280 Kw/h é: R$${resultado}`) */


//b)-------------------------------------------------------

/* const consumoResidencia = Number(prompt("Qual foi o consumo(kw) da sua residência?"))
   const valorkw = 0.05
   const desconto = 1 - 15/100
   const calculoTotal = consumoResidencia * valorkw
   const calculoComDesconto = consumoResidencia * valorkw * desconto
   const valorDoDesconto = calculoTotal - calculoComDesconto
   const total = valorDoDesconto.toFixed(2)

   console.log(`Seu consumo real é ${consumoResidencia}Kw.`)
   console.log(`O valor do seu consumo total é de R$${calculoTotal}`)
   console.log(`O total do seu desconto é de R$${total}`)
   console.log(`O valor total do seu consumo com 15% de desconto é: R$ ${calculoComDesconto}.`)

*/
//coloquei o codigo para somente mostrar 2 casas decimais


//........ Atividade 3 .......

//(a)-----------------------------

/* const pesoLb = 20
   const peso = 0.453592
   const total = pesoLb*peso
   const total2 = total.toFixed(2)
   
   console.log(`20lb equivalem a ${total2}kg`) 
*/


//(b)-----------------------------
/* const oz = 10.5
   const kg = 0.0283495
   const total = oz*kg
   const total2 = total.toFixed(2)

   console.log(`10.5oz é equivalente a ${total2}kg.`)
*/

//o valor esta sendo arredondado 


//(c)---------------------------------
/* 
   const milha = 100
   const metro = 1609.34
   const total = milha*metro

   console.log(`100mi é equivalente a ${total}m.`)
*/


//(d)---------------------------------
/* 
   const ft = 50
   const metro = 0.3048
   const total = ft * metro

   console.log(`50ft é equivalente a ${total}m.`)
*/


//(e)------------------------------------
/* 
   const gal = 103.56
   const litros = 3.78541
   const total = gal * litros
   const total2 = total.toFixed(3)

   console.log(`103.56gal é equivalente a ${total2} litros`)
 */

//(f)-------------------------------------
/* 
      const xicara = 450
      const litros = 0.284131
      const total = xicara * litros
      const total2 = total.toFixed(3)

      console.log(`450xic equivalem a ${total2} litros.`)
 */


//(g)-----------------------------
/* 
      const peso = Number(prompt("Digite seu peso"))
      const libra = peso / 0.453592
      const libras = libra.toFixed(2)
      
      console.log(`${peso}kg é equivalente a ${libras}(lbs)`)

 */

