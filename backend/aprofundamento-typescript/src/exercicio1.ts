//exercicio 1
// a)

const minhaString : string = "valor"
// O tipo 'number' não pode ser atribuído ao tipo 'string';

// b)

let meuNumero : string | number = 54 
meuNumero = "54"

// c)

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

enum cores {
    ROSA = "Rosa",
    LILAS = "Lilás",
    AMARELO = "Amarelo",
    LARANJA = "Laranja"
}

const pessoa1: Pessoa = {
    nome: "Rafaela",
    idade: 24,
    corFavorita: cores.ROSA
}

const pessoa2: Pessoa = {
    nome: "Regina",
    idade: 43,
    corFavorita: cores.AMARELO
}

const pessoa3: Pessoa = {
    nome: "Luciana",
    idade: 29,
    corFavorita: cores.LARANJA
}