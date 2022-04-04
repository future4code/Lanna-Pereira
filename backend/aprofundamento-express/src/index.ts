import express, {Request, Response} from 'express';
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
    userId: number,
    id: string,
    title: string,
    completed: boolean
}
//atividade 3
const listaAfazeres: Afazer[] = [
    {
        userId: 1,
        id: "estudos",
        title: "Estudar matemática",
        completed: true
    },
    {
        userId: 2,
        id: "idiomas",
        title: "revisar cartões do anki em japonês",
        completed: false
    },
    {
        userId: 3,
        id: "hobbys",
        title: "30 min - treinar lettering",
        completed: false
    }
]
//atividade 4

app.get('/listaAfazeres',()=>{})

const port = process.env.PORT || 3003
app.listen(port,()=> console.log (`Server is running port ${port}`))