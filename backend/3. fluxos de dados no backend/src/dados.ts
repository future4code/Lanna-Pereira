//exercicio 2
import {v4 as generateId} from "uuid";

export type Produtos = {
    id: string|number,
    nome: string,
    preco: number
}

export const listaProdutos: Produtos[] = [
    {id:generateId(),
    nome: "trono de vidro - Sarah J maas",
    preco: 45},

    {id:generateId(),
    nome: "Talvez um dia - Colleen Hoover",
    preco: 28},

    {id:generateId(),
    nome: "It, a coisa - Stephen king",
    preco: 55},

    {id:generateId(),
    nome: "Lolita - Vladmir Nabokov",
    preco: 38},

    {id:generateId(),
    nome: "Jogos Vorazes - Suzane Collins",
    preco: 60}
]