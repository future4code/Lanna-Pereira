const minhaString: string = "number"
//a) - mostra um erro ao atribuir um number a uma string

let meuNumero: number | string = 15
meuNumero = "43"
//b) - usar o | para dizer que pode receber um number ou uma string

//C 
type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: string

}
enum cores {
    LILAS = "Lilás",
    ROSA = "Rosa",
    VERDE = "Verde",
    AMARELO = "Amarelo",
    AZUL = "Azul",
    VERMELHO = "Vermelho"
}

const pessoa1: Pessoa = {
    nome: "a1",
    idade: 55,
    corFavorita: cores.AMARELO
}

const pessoa2: Pessoa = {
    nome: "Tiffany",
    idade: 24,
    corFavorita: cores.AZUL
}

const pessoa3: Pessoa = {
    nome: "Treasure",
    idade: 22,
    corFavorita: cores.VERDE
}