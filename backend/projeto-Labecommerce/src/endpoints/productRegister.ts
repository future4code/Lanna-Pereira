import {Request, Response} from "express"
import { Products } from "../types"
import {v4 as generator} from "uuid"
import { insertProduct } from "../datas/insertProduct"

export default async function productRegister(req: Request, res:Response):Promise<void>{
 try {
     const {name, price, image_url} = req.body

        if(!name){
            res.statusCode = 401
            throw new Error("Tem que adicionar um nome");            
        }
        if(!price){
            res.statusCode = 401
            throw new Error("Tem que adicionar um preço");            
        }
        
        if(!image_url){
            res.statusCode = 401
            throw new Error("Tem que adicionar uma image_url");            
        }
  
     const product: Products = {
         id:generator(),
         name,
         price,
         image_url
     }

     await insertProduct(product)

     res.status(201).send("Product created!")
 } catch (error:any) {
     res.status(500).send(error.message)
 }
}