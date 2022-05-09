import {Request, Response} from "express"
import { getProduct } from "../datas/getProducts";

export default async function searchProducts(req: Request, res: Response){
    try {
        const product = await getProduct()

        res.status(201).send(product)
    } catch (error:any) {
        res.status(500).send("Unexpected error")
    }
}