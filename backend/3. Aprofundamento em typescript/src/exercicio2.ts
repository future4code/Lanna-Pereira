
//a)  recebe uma lista de numero e mostra o maior numero, o menor numero e a media entre o dois
//b)  let some recebe number| a function recebe o type Estatisticas como uma tipagem| o array é uma lista de numeros|
function obterEstatisticas(numeros: number[]): Estatisticas {

    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

     
    const estatisticas: Estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

type Estatisticas = {
    maior: number,
    menor: number,
    media: number
}

type AmostrasDeIdades = {
    numero: number[],
    obterEstatisticas: (numero: number[]) => Estatisticas
}

console.log(obterEstatisticas([15,259,253,11,25,347,35,28,89]))