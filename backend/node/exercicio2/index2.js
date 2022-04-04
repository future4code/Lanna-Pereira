const cores1 = require("colors")

const operacao = process.argv[2]
const numero1 = Number(process.argv[3])
const numero2 = Number(process.argv[4])

let resultado = "Resultado: "

switch(operacao){
	case "soma":
		resultado = cores1.green ( numero1 + numero2)
		break;
	case "subt":
        resultado = cores1.yellow ( numero1 - numero2)
		//seu código aqui
		break;
    case "multi":
        resultado = cores1.magenta ( numero1 * numero2)
        break;
    case "divi":
        resultado = cores1.cyan ( numero1 / numero2)
        break;
        default:
            resultado = cores1.red.italic ("Operação não encontrada!")

}

console.log(resultado)