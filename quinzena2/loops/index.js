//Exercicio 1 - vai ser impresso o número 10
// exercicio 2 - a) vai imprimir numeros maiores que 18
//Exercicio 3 - 



//-------------Exercicio 1 - Códigos -------------------------
const quantidadePet = Number(prompt("Quantos pets você tem?"))
const listaNomes = []
if (quantidadePet ===0 ){
    console.log("Que pena! você pode adotar um bichinho")
} else { (quantidadePet > 0)
        nomePet = prompt("digite o nome dos seu pet");
        listaNomes = listaNomes.push(nomePet);
        console.log(nomePet)
    }
    
