import { Request, Response } from "express";
import { TagsProductsBusiness } from "../Business/TagsProductsBusiness";
import { TagProductInput } from "../Model/TagsProduct";

export class TagsProductsIdController{
    async createProductTagId(req:Request, res:Response){
        try {
            const{productsID, tagsID} = req.body
            const input: TagProductInput = {
                productsID,tagsID
            }

            const productTagsBusiness = new TagsProductsBusiness()
            const messageProductTagsId = await productTagsBusiness.createProductTagID(input)

            res.status(200).send({messageProductTagsId})
        } catch (error) {
            if(error instanceof Error){
                res.status(400).json({message: error.message})
            }else{
                res.status(400).json({message: "Unexpected Error!"})
            }
        }
    }

    async getProductTag_ByIdProductController(req: Request, res:Response){
        try {
            const productsID = req.params.productsID

            const productTagByIdProductBusiness = new TagsProductsBusiness()
            const productId = await productTagByIdProductBusiness.getProductTag_ByProductBusiness(productsID)

            res.status(200).send({productId})
        } catch (error) {
            if(error instanceof Error){
                res.status(400).json({message: error.message})
            }else{
                res.status(400).json({message: "Unexpected Error!"})
            }
        }
    }

    async getProductTag_ByIdTagController(req: Request, res:Response){
        try {
            const{tagsID} = req.params

            const productTagByIdTagBusiness = new TagsProductsBusiness()
            const productId = await productTagByIdTagBusiness.getProductTags_ByIdTagsBusiness(tagsID)

            res.status(200).send({productId})
        } catch (error) {
            if(error instanceof Error){
                res.status(400).json({message: error.message})
            }else{
                res.status(400).json({message: "Unexpected Error!"})
            }
        }
    }
}