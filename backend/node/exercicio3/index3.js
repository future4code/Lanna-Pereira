const cores3 = require("colors")

const tarefas = [
    "organizar rotina",
    "aprender ux/ui design"
]
const listaTarefas = process.argv[2]
tarefas.push(listaTarefas)

const tarefas2 = cores3.cyan.italic(tarefas)


console.log(`tarefa: ${listaTarefas} adicionada com sucesso!`)
console.log(tarefas2)