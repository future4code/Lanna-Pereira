import express,{Request, Response} from "express";
import cors from "cors";

//configuração padrao

const app = express();
const port = process.env.PORT || 3018

app.use(express.json());
app.use(cors());

//atividade 1 
app.get('/atividades', (request: Request, response: Response) => {
    //testando as formas de receber dados
    
     response.status(201).send("está tudo OK!testes realizados")
})

//atividade 2 
type Usuario = {
    nome: string,
    id:number,
    telefone: number,
    email: string,
    website: string,
    descricao: string
}

// atividade 3 

const Usuarios: Usuario[] = [
    {
        nome: "alfatech",
        id: 1547896410,
        telefone: 25-986547456,
        email: "contato.alfatech@gmail.com",
        website: "alfatech.com.br",
        descricao: "Loja de importados tecnologicos"
    },
    {
        nome: "Livrarias South",
        id: 4578219340,
        telefone: 47-985647125,
        email: "livrariasouth@gmail.com",
        website: "livrariasouth.com.br",
        descricao: "livraria"
    },
    {
        nome: "Sincronia",
        id: 8264515597,
        telefone: 49-978562341,
        email: "sincronia@contato.com",
        website: "sincronia.com.br",
        descricao: "Loja de instrumentos musicais"
    },
    {
        nome: "Terra Nipponica",
        id: 8879964553,
        telefone: 55-987454412,
        email: "terranipponica@contato.com",
        website: "terranipponica.com.br",
        descricao: "Loja de importados japoneses"
    }

]

//atividade 4 
app.get('/Usuarios',(request:Request, response: Response)=>{
    if(!Usuarios) {
        response.status(201).send("usuário não encontrado!")
    }

    response.status(201).send(Usuarios)
})
// atividade 5
type posts = {
    id: string,
    titulo: string,
    body: string,
    idUsuario: number
}
//ativiadade 6
const Post: posts[] = [
    {
        id:"tech, hardware",
        titulo:"o que são hardwares?",
        body: "hardwares no geral são as partes físicas do computador.",
        idUsuario: 2547899
    },
    {
        id:"NFTs, atualidade, trendtopics",
        titulo:"a febre atual chamada NFT",
        body: "afinal, para que server uma NFT, e porque se tornou uma sensação que faz a maioria das pessoas desejarem ter uma.",
        idUsuario: 1574555
    },
    {
        id:"politica, mundo, informações",
        titulo:"Porque devemos nos interessar por politicas internas e externas?",
        body: "A verdade pode parecer tão clara e ao mesmo tempo tão escondida, mas a resposta é unanime, defender a democracia.Mas afinal, que democracia?",
        idUsuario: 2547899
    }


]
//atividade 7 
app.get('/Post',(request:Request, response:Response)=>{
    if(!Post){
        response.status(201).send("post não encontrado!")
    }
    response.status(201).send(Post)
})

//aqui indica que se caso uma pagina não for encontrada
app.use((request: Request, response:Response)=>{
    response.status(201).send("pagina não encontrada")
})
//não entendi a atividade 8 :(

//sempre a ultima linha
app.listen(port,()=>{
   console.log( `1,2,3 server rodando... 1,2,3...porta ${port}`)
})