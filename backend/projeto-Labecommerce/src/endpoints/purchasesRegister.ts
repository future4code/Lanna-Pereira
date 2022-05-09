import { Request, Response } from "express";
import { Purchases } from "../types";
import {v4 as generator} from "uuid"
import { insertPurchases } from "../datas/insertPurchases";
import { selectUserId } from "../datas/selectUser";



export default async function purchasesRegister(req: Request, res: Response):Promise<void>{
    try {
        const {userId, productId, quantity} = req.body

        const totalPrice = productId.price * quantity
        
        if(!userId || productId || quantity){
            res.statusCode = 401
            throw new Error("Esta faltando um usuário, um produto ou uma quantidade!");
            
        }

        const user = await selectUserId(userId)
        
        
        const purchases: Purchases = {
            id: generator(),
            userId,
            productId,
            quantity,
            totalPrice
        }

        await insertPurchases(purchases)
        res.status(201).send("Purchase created!")

    } catch (error:any) {
        res.status(500).send(error.message)
    }
}