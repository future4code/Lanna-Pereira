import express, { Request, Response} from "express"
import cors from "cors"
import {v4 as generateId} from "uuid";
import { Produtos , listaProdutos } from "./dados"

const app = express()
app.use(express.json())
app.use(cors())

//exercicio 1 
app.get("/test", (request: Request, response: Response)=>{
    response.status(210).send("Api funcionando!")
})
 
//exercicio 3

const Errors: { [chave: string]: {status: number, message: string} } = {
    
    BAD_REQUEST: {status:400, message:"Valores incorretos"},
    AUTHORIZATION_NOT_FOUND: {status: 401, message: "Favor enviar header authorization"},
    PRODUCT_NOT_FOUND: {status: 404, message: "Produto não encontrado"},
    PRODUCT_EXISTS: {status: 409, message: "Esse produto já existe"},
    MISSING_PARAMETERS: {status: 422, message: "Alguma informação está faltando. Consulte a documentação."},
    SOMETHING_WENT_WRONG: {status: 500, message: "Algo deu errado"},
}


app.post("/produtos/criar", (request: Request, response:Response) => {
    try {
    const {nome, preco } = request.body;

    if (!nome || !preco) {throw Error(Errors.MISSING_PARAMETERS.message)
        return
    }
    if ( typeof preco!== "number" || preco <=0 || preco === undefined) {throw Error(Errors.MISSING_PARAMETERS.message)
        return
    }
    if ( typeof nome !== "string") {throw Error(Errors.MISSING_PARAMETERS.message)
        return
    }

    const novosProdutos: Produtos = {
        id: generateId(),
        nome:nome,
        preco: preco
    }
    listaProdutos.push(novosProdutos);

    }catch(error: any) {
    switch(error.message) {
       case Errors.AUTHORIZATION_NOT_FOUND.message:
          response.status(Errors.AUTHORIZATION_NOT_FOUND.status).send(Errors.AUTHORIZATION_NOT_FOUND.message);
          break;
       case Errors.PRODUCT_NOT_FOUND.message:
          response.status(Errors.PRODUCT_NOT_FOUND.status).send(Errors.PRODUCT_NOT_FOUND.message);
          break;
       case Errors.MISSING_PARAMETERS.message:
          response.status(Errors.MISSING_PARAMETERS.status).end(Errors.MISSING_PARAMETERS.message);
          break;
       case Errors.PRODUCT_EXISTS.message:
          response.status(Errors.PRODUCT_EXISTS.status).send(Errors.PRODUCT_EXISTS.message);
          break;
       default:
          response.status(Errors.SOMETHING_WENT_WRONG.status).send(Errors.SOMETHING_WENT_WRONG.message)
    }
}
response.status(201).send(listaProdutos)
})

//Exercicio 4

app.get("/produtos", (request: Request, response:Response) => {
    response.status(200).send(listaProdutos)
})

//Exercicio 5

app.put("/produtos/editarPreco/:id", (request: Request, response:Response) => {
    try {
        const id = request.params.id
        const { preco } = request.body
    
        const editarPreco = listaProdutos.find((idProduto) => idProduto.id === id)
        
        if( !editarPreco ) {throw Error( Errors.PRODUCT_NOT_FOUND.message )}
        if( typeof preco !== "number" || preco <= 0 ) {throw Error(Errors.BAD_REQUEST.message)}
        
        editarPreco.preco = Number(preco)
         
    } catch(error: any) {
    switch(error.message) {
       case Errors.AUTHORIZATION_NOT_FOUND.message:
          response.status(Errors.AUTHORIZATION_NOT_FOUND.status).send(Errors.AUTHORIZATION_NOT_FOUND.message);
          break;
       case Errors.PRODUCT_NOT_FOUND.message:
          response.status(Errors.PRODUCT_NOT_FOUND.status).send(Errors.PRODUCT_NOT_FOUND.message);
          break;
       case Errors.MISSING_PARAMETERS.message:
          response.status(Errors.MISSING_PARAMETERS.status).end(Errors.MISSING_PARAMETERS.message);
          break;
       case Errors.PRODUCT_EXISTS.message:
          response.status(Errors.PRODUCT_EXISTS.status).send(Errors.PRODUCT_EXISTS.message);
          break;
       default:
          response.status(Errors.SOMETHING_WENT_WRONG.status).send(Errors.SOMETHING_WENT_WRONG.message)
    }
 }
 response.status(200).send("Preço alterado com sucesso")
    
})

//Exercicio 6
app.delete("/produtos/:id", (request: Request, response: Response) => {
    try{
        const id = request.params.id;

        if(!id) {
            throw Error(Errors.PRODUCT_NOT_FOUND.message)    
            }
            console.log(id);

        listaProdutos.forEach((item, Index, array) => {
            if(item.id === id) {
                listaProdutos.splice(Index, 1)
            }
            return listaProdutos
            })
          
    }catch ( error: any ) {
        switch ( error.message ) {
        case Errors.PRODUCT_NOT_FOUND.message:
        response.status(Errors.PRODUCT_NOT_FOUND.status).send(Errors.PRODUCT_NOT_FOUND.message);
        break;
        default:
            response.status(Errors.SOMETHING_WENT_WRONG.status).send(Errors.SOMETHING_WENT_WRONG.message);
        }
    }
        response.status(200).send(listaProdutos)
    }
    )
    


const port = process.env.PORT || 3003
app.listen(port,()=>{ console.log(`Servidor online em ${port}` )})