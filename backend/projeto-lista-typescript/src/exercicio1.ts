const informacoes = (name: string,  date: string): string => {

    const resultado = date.split("/");
    
    return  `Olá me chamo ${name}, nasci no dia ${resultado[0]} do mês ${resultado[1]} do ano de ${resultado[2]}`;
    
    };
     console.log(informacoes("Lanna", "18/04/1999"));