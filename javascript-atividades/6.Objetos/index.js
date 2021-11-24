//---### INTERPRETAÇÃO DE CÓDIGO ###----

//1.----------------------
//a. vai aparacer: Matheus Nachtergaele, Virginia Cavendish e {Canal: Globo, horario: 14h}
//2. ---------------------------

//a).
    //console 1 - vai exibir as informações dentro do objeto
    //console 2 - vai exibir as informaçoes dentro do objeto cachorro, trocando o nome juca para juba
    //console 3 - vai exibir as onformações dentro do objeto gato, trocando as letras a por o no nome do objeto = jubo

//b). ele faz o espalhamento de um objeto

//3. ----------------------------

//a. vai aparecer false e undefined
//b. nao tem altura declarada no objeto

//-----------### ESCRITA DE CÓDIGO ###----------

//1:----------------------------------------------------

//a. ----------------------------------------
const pessoa = {
    nome: "lanna", 
    apelido: ["Brenda", "Nanna","Himawari"]
}
console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelido}.`)

//b. -----------------------------------------
const pessoa1 = {
    ...pessoa,
    apelido: ["hayashi", "Japinha", "Coreana"]
}
console.log(`Meu nome é ${pessoa1.nome}, mas pode me chamar de: ${pessoa1.apelido}.`)


//2: ----------------------------------------------

//a.-------------------------------
const  person3 = {
    nome: "Brenda",
    idade: 22,
    profissao: "Front-end dev, desenhista e poliglota falante de japonês, coreano, francês e inglês."
}

const person4 = {
    nome: "Hayashi",
    idade: 23,
    profissao: "Back-end dev e influencer motivacional"
}

//b.---------------------------------------------

function informacoes(person1) {
 const array1 = [
 person1.nome,
 person1.nome.length,
 person1.idade,
 person1.profissao,
 person1.profissao.length]
         
 return array1
}
console.log(`${informacoes(person4 )}, 
${informacoes(person3)}`)
//console.log(informacoes(person3), (person4))
console.log(informacoes(person4))
console.log(informacoes(person3))

//3:--------------------------------------------

//a. ----------------------------------------

const carrinho = []

//b.--------------------------------

const cereja = {
    nome: "Cereja",
    disponibilidade: true
}

const morango = {
    nome: "Morango",
    disponibilidade: true
}

const melancia = {
    nome: "Melancia",
    disponibilidade: true
}

//c. -------------------------------------
function listaDeFruta (fruta) {
    carrinho.push(fruta)
}

listaDeFruta(cereja)
listaDeFruta(melancia)
listaDeFruta(morango)

//d. -------------------------------------
console.log(carrinho)


// ---------### DESAFIO ###--------------

//1.------------------------------------

function infoUsuario() {
    const pessoaUsuario = {
    nome: prompt ("Qual é seu nome?"),
    idade: Number(prompt("Qual sua idade?")), 
    profissao: prompt("Qual sua profissão?")
    }

    console.log(pessoaUsuario)
    console.log(typeof pessoaUsuario)
   // return pessoaUsuario
}
//infoUsuario()
/* console.log(infoUsuario())
console.log(typeof infoUsuario(pessoaUsuario)) */


//2:-----------------------------------

function filmes(filme1, filme2) {
    filme1 = {
        nome: "De volta ao jogo", 
        atorPrincipal: "Keanu Reeves",
        genero: "Ação",
        anoDeLancamento: 2014
    }

    filme2 = {
        nome: "Coraline",
        genero: "Animação",
        dubladoraPrincipal: "Dakota Fanning",
        anoDeLancamento: 2009
    }

return `O primeiro filme foi lançado antes do segundo? ${filme1.anoDeLancamento > filme2.anoDeLancamento}.
O primeiro filme foi lançado no mesmo ano do segundo? ${filme1 === filme2}. `
}

console.log(`${filmes()}`)



//3:-------------------

function novaFuncao(fruta){
 const novo = {...fruta, disponibilidade: false}

//const novo2 = {...fruta, disponibilidade: !fruta.disponibilidade}
return novo

}

console.log(novaFuncao(cereja))
console.log(novaFuncao(morango))
console.log(novaFuncao(melancia))



















