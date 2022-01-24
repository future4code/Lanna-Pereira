//Interpretação de código//
//1) vai ser impresso 3 arrays, com o nome e apelido
//2) vai retornar o nome dos arrays[Amanda rangel, Lais petra , Leticia chijo]
//3) vai imprimir somente os arrays com apelodo Mandi e Laura



//Escrita de código//

//1--------------------------------------------------
const pets = [
    {nome: "Lupin", raca: "Salsicha"},
    {nome: "Polly", raca: "Lhasa Apso"},
    {nome: "Madame", raca: "Poodle"},
    {nome: "Quentinho", raca: "Salsicha"},
    {nome: "Fluffy", raca: "Poodle"},
    {nome: "Caramelo", raca: "Vira-lata"}
]
//a)*************************************************
function nomePets(pet){
    return pet.nome
}
const pets2 = pets.map(nomePets)
console.log(pets2)

//b)***************************************************
function filtrarSalsicha(tipo, index){
    return tipo.raca === "Salsicha"
}
const salsicha = pets.filter(filtrarSalsicha)
console.log(salsicha)

//c)**************************************************
function cuponParaPoodle(poodle, index){
    return poodle.raca === "Poodle"
}
const cupomPoodle = pets.filter(cuponParaPoodle)

function paraPoodle(mensagem){
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${mensagem.nome}`
}

const poodle = cupomPoodle.map(paraPoodle)
console.log(poodle)



//2 --------------------------------------------------------
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

//a)****************************************************************
const nomeProdutos = produtos.map((produtoNome) => {
    return produtoNome.nome
})
console.log(nomeProdutos)

//b)***************************************************************

const desconto = produtos.map((desconto) => {
    return {nome: desconto.nome, preco:(desconto.preco * 0.95). toFixed(2)}
})
console.log(desconto)

//c)****************************************************************
const bebidas = produtos.filter((produtosBebidas) =>{
    return produtosBebidas.categoria === "Bebidas"
})
console.log(bebidas)

//d)*****************************************************************
const produtoYpe = produtos.filter((limpeza) => {
    return limpeza.nome.includes("Ypê")
})
console.log(produtoYpe)
//e)***************************************************************
const ype = produtoYpe.map((compra) =>{
    return `Compre ${compra.nome} por ${compra.preco}`
})
console.log(ype)



