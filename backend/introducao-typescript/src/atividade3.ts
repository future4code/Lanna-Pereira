function anoBissexto (ano:number): boolean {
    const condicao1 = ano % 400 === 0
    const condicao2 = (ano % 4 === 0) && (ano % 100 !== 0)

    return condicao1 || condicao2
}

console.log(anoBissexto(2004))