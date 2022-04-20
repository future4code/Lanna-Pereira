import express, { Request, Response} from 'express';
import cors from 'cors';

const app = express();

app.use(express.json())
app.use(cors())

//atividade 1 
app.get('/PING',(request: Request, response: Response)=>{
    response.status(201).send("PONG!")
})

//atividade 2 
type Afazer = {
    idUsuario: number,
    id: string | number,
    title: string,
    completed: boolean 
}
//atividade 3
const listaAfazeres: Afazer[] = [
    {
        idUsuario: 1,
        id: "estudos",
        title: "Estudar matemática",
        completed: true
    },
    {
        idUsuario: 2,
        id: "idiomas",
        title: "revisar cartões do anki em japonês",
        completed: false
    },
    {
        idUsuario: 3,
        id: "hobbys",
        title: "30 min - treinar lettering",
        completed: false
    }
]
//atividade 4

app.get("/listaAfazeres/completed/:isCompleted", (request:Request, response:Response) => {
  let isCompleted: any = request.params.isCompleted

  if (isCompleted === "true") {
    isCompleted = true
  } else if (isCompleted === "false") {
    isCompleted = false
  } else {
    response.status(201).send("Path param da tarefa deve ser 'true' ou 'false'")
  }

  const result = []

  for (let i = 0; i < listaAfazeres.length; i++) {
    if (listaAfazeres[i].completed === isCompleted) {
      result.push(listaAfazeres[i])
    }
  }

  response.status(201).send(result)
})

// Exercício 5
 app.post("/listaAfazer", (request:Request, response: Response) => {
   const idUsuario = request.body.idUsuario
   const title = request.body.title

  const novosAfazeres: Afazer = {
    idUsuario,
    id: Date.now(),
    title,
    completed: false
}

listaAfazeres.push(novosAfazeres)

   response.send(listaAfazeres)
})
//Exercicio 6
app.post("/listaAfazer", (request: Request, response: Response) => {
  const id = Number(request.params.id)
  for (let paraFazer of listaAfazeres) {
    if(paraFazer.id === id){
      paraFazer.completed = !paraFazer.completed
    }
  }
  response.send(listaAfazeres)
})

//Exercicio 7
app.delete("/listaAfazeres/:id", (request: Request, response: Response) => {

  const id = Number(request.params.id)

  for (let i = 0; i < listaAfazeres.length; i++) {
    if (listaAfazeres[i].id === id) {
      listaAfazeres.splice(i, 1)
    }
  }

  response.send(listaAfazeres)
})
// exercicio 8
app.get("/users/:idUsuario/listaAfazeres", (request: Request, response: Response) => {
  const idUsuario = Number(request.params.idUsuario)

  const resultado = []

  for (let paraFazer of listaAfazeres) {
    if (paraFazer.idUsuario === idUsuario) {
      resultado.push(paraFazer)
    }
  }

  response.send(resultado)
})


const port = process.env.PORT || 3003
app.listen(port,()=> console.log (`Server is running port ${port}`))