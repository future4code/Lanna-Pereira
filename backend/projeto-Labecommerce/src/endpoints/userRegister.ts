import {Request, Response} from "express"
import { UsersRegister } from "../types"
import {v4 as generator} from "uuid"
import { insertUser, userByEmail } from "../datas/insertUser"


export default async function userRegister(req:Request, res:Response):Promise<void>{
    try {
        const {name, email, password} = req.body

        const userEmail = await userByEmail(email)
        if(userEmail){
            res.statusCode = 401 
            throw new Error("Email já registrado");
            
        }
        if(password.length < 6){
            res.statusCode = 401
            throw new Error("Password tem que ter no minimo 6 digitos");
            
        }
        if(!email.includes("@")){
            res.statusCode = 401
            throw new Error("Seu email deve ter um '@' ");
            
        }
        const user: UsersRegister = {
            id:generator(),
            name,
            email,
            password
        }
        await insertUser(user)

        res.status(201).send("User created!")
    } catch (error:any) {
        res.status(500).send(error.message)
    }
}  
