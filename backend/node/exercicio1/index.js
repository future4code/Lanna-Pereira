const cores = require("colors")

const nome = process.argv[2]
const idade = Number(process.argv[3])




console.log(cores.green.bold (`Olá, ${nome}! Você tem ${idade} anos.`))

console.log(cores.red.italic (`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade+7}`))
