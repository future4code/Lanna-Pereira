//* Output : { maior: 74, menor: 5, media: 28.5 }; a saida botei "any" e as entradas um array de números.
function obterEstatisticas(numeros: number[]): Estatisticas {

    const numerosOrdenados :number[]= numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }
//b?
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



//c

type AmostraDeIdades = {
    numeros: number[],
    obterEstatisticas: (numeros:number[])=> Estatisticas
}
console.log(obterEstatisticas([15,22,44,32,25,74,11,5,]))