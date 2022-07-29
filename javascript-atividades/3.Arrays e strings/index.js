//-----------### INTERPRETAÇÃO DE CÓDIGOS ###------------------

//...........atividade 1 ............
 
/* 
        let array
        console.log('a. ', array)

        array = null
        console.log('b. ', array)

        array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
        console.log('c. ', array.length)

        let i = 0
        console.log('d. ', array[i])

        array[i+1] = 19
        console.log('e. ', array)

        const valor = array[i+6]
        console.log('f. ', valor) */

//a. vai mostrar undefined pois o array nao esta definido
//b. vai mostrar null porque o array = null
//c. vai mostrar a quantidade dos itens dentro do array que são 11 numeros.
//d. vai mostrar o 3 - que é a posição 0 do array(o i esta declarado com 0)
//e. mostra um array alterado(com um item trocado por 19) troca o item da posição 1 (0 + 1 = 1), a nova lista de array é [3,19,5,6,7,8,9,10,11,12,13]
//e.[i+6] vai somar o i = 0 + 6 e vai mostrar a posição 6 do array

/*  const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) */

// vai deixar a frase em caixa alta, trocar a letras A por I e mostrar o tamanho da frase
//a frase vai ficar *SUBI NUM ONIBUS EM MIRROCOS*


//-------### ESCRITA DE CÓDIGOS ##---------

//........ATIVIDADE 1 .................
/* 
    let nomeUsuario = prompt ("Digite seu nome")
    let emailUsuario = prompt("Digite seu email")

console.log(`O email ${emailUsuario} foi cadastrado com sucesso. Seja bem-vindo(a), ${nomeUsuario}.`)
*/

//........ATIVIDADE 2 .................

/* const comidasFavoritas = [
    "Lasanha",
    "Carbonara",
    "Churrasco",
    "Pizza",
    "Doces e Salgados"
]

console.log(comidasFavoritas)
console.log(`Essas são as minhas comidas favoritas ${comidasFavoritas}.`)
console.log(`Essas são as minhas comidas favoritas:`)
console.log(comidasFavoritas[0])
console.log(comidasFavoritas[1])
console.log(comidasFavoritas[2])
console.log(comidasFavoritas[3])
console.log(comidasFavoritas[4])

const comidaUsuario = prompt("Digite sua comida favorita.")
comidasFavoritas[1] = comidaUsuario
console.log(comidasFavoritas) */

//........ATIVIDADE 3 .................
 /* 
const listasDeTarefas = []
const tarefa1 = prompt("Digite uma tarefa")
const tarefa2 = prompt("Digite uma segunda tarefa")
const tarefa3 = prompt("Digite uma terceira tarefa")

listasDeTarefas.push(tarefa1)
listasDeTarefas.push(tarefa2)
listasDeTarefas.push(tarefa3)


console.log(`0.${tarefa1}`)
console.log(`1.${tarefa2}`)
console.log(`2.${tarefa3}`)

const tarefaConcluida = prompt("Digite o indice(numero) da tarefa concluida 0, 1 ou 2")
 
listasDeTarefas.splice(Number(tarefaConcluida), 1)

console.log(listasDeTarefas)
 */ 

//----------------### DESAFIO ###------------------

//1................
/* const frase = prompt("Digite uma frase")
const fraseArray = frase.split(" ")
console.log(fraseArray)
 */


//2.................................
/* 
const frutas = ["Banana", "Morango","Abacaxi","Laranja", "Ameixa"]
const abacaxi = frutas.indexOf("Abacaxi")
const array = frutas.length

console.log(`indice do abacaxi:${abacaxi}, O tamanho do array é:${array}`)
 */