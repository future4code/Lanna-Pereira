import { Request, Response } from "express";
import {ProductBusiness} from "../Business/ProductBusiness"
import { ProductInput } from "../Model/Product";

export class ProductController{
    async createProduct(req: Request, res:Response){
        try {
            const{name,price,type} = req.body
            const input: ProductInput = {
                name,
                price,
                type
            }

            const productBusiness = new ProductBusiness()
            const messageProduct = await productBusiness.createProduct(input)

            res.status(200).send({messageProduct})
        } catch (error) {
            if(error instanceof Error){
                res.status(400).json({message: error.message})
            }else{
                res.status(400).json({message: "Unexpected Error!"})
            }
        }
    }

    async getProductByNameController(req: Request, res:Response){
        try {
            const{name} = req.params

            const productByNameBusiness = new ProductBusiness()
            const nameProduct = await productByNameBusiness.getProductByNameBusiness(name)

            res.status(200).send({nameProduct})
        } catch (error) {
            if(error instanceof Error){
                res.status(400).json({message: error.message})
            }else{
                res.status(400).json({message: "Unexpected Error!"})
            }
        }
    }
}