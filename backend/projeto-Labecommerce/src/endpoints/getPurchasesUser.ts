import {Request, Response} from "express"
import { selectUserId } from "../datas/selectUser"

export const getPurchasesUser = async(req: Request, res: Response):Promise<void> => {
    try {
        const{ userId } = req.params

        const purchases = await selectUserId(userId)

        if(!purchases){
            res.statusCode = 401
            throw new Error("Não existe essa compra realizada por esse usuário");
        }

        res.status(200).send(purchases)
    } catch (error:any) {
        res.status(500).send(error.message)
    }
}