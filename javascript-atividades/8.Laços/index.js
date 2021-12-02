//------------ INTERPRETAÇÃO DE CÓDIGOS ----------------//

// 1). vai ser impresso 10
// 2). -------------------
//      a). vai ser impresso 19, 21, 23, 25, 27, 30

//      b). declarar uma variavel com 0; e incrementar a variavel indice
            let indice = 0;
            const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30];
            for(let numero of lista){
                if(numero > 18){
                    console.log(numero, "indice", indice)
                }
                indice++
            }

//  3). vai se impresso: ****

//----------ESCRITA DE CÓDIGO-----------------//
//1).-------------------------------

const quantidadeDePet = Number(prompt("Quantos pets voce tem?"));

if(quantidadeDePet === 0){
    console.log("Que pena! Você pode adotar um pet!");
}
let open = 0
if(quantidadeDePet > 0){
    let arrayPet = []
     for(let i = 0; i < quantidadeDePet; i++){
       arrayPet.push(prompt("Digite o nome dos bichinhos"))
    }
    console.log(`Nomes: ${arrayPet}`);
}

//2)-----------------------------------------------
const arrayOriginal = [15, 32, 45, 100, 18, 11, 51, 24, 98];

function imprimeArray (arrayOriginal){
    for(let array1 of arrayOriginal){
        console.log(array1);
    }
    return arrayOriginal;
}
console.log(imprimeArray(arrayOriginal));

function arrayDivididoPor10(arrayOriginal){
    for(let dividido of arrayOriginal) {
        dividido = dividido / 10
        console.log(dividido);
    }
    return arrayOriginal;
}
console.log(arrayDivididoPor10(arrayOriginal));

function valoresPares(arrayOriginal){
    const arrayPares = []
    for(let pares of arrayOriginal){
        if(pares % 2 === 0){
            arrayPares.push(pares);
        }
       
    }
     return arrayPares;
}
console.log(valoresPares(arrayOriginal));

function indexArray (arrayOriginal){
    let i = 0;
    const arrays =[];
    for(let numeros of arrayOriginal){
        arrays.push(`O elemento do index ${i} do ${numeros}`)
        i++
    }
  console.log(arrays);
}
console.log(indexArray(arrayOriginal));

function maiorOuMaior (arrayOriginal){
    let numeroMaior = 0;
    let numeroMenor = Infinity;
    for(let i = 0; i < arrayOriginal.length; i++){
        if(arrayOriginal[i] < numeroMenor){
            numeroMenor = arrayOriginal[i];
        }else if(arrayOriginal[i] > numeroMaior){
            numeroMaior = arrayOriginal[i];
        }
    }
    console.log(`o maior numero é: ${numeroMaior}.`);
    console.log(`o menor numero é: ${numeroMenor}`);
}
console.log(maiorOuMaior(arrayOriginal));