import { Request,Response } from "express";
import { TagsBusiness } from "../Business/TagsBusiness";
import { TagsDatabase } from "../Data/TagsDatabase";
import { TagsInput } from "../Model/Tags";

export class TagsController{
    async createTag(req:Request, res:Response){
        try {
            const{name} = req.body
            const input:TagsInput = {name}

            const tagsBusiness = new TagsBusiness()
            await tagsBusiness.createTags(input)

            res.status(200).send("Tag criada!")
        } catch (error) {
            if(error instanceof Error){
                res.status(400).json({message: error.message})
            }else{
                res.status(400).json({message: "Unexpected Error!"})
            }
        }
    }

    async getTagByNameController(req:Request, res:Response){
        try {
            const{name} = req.params

            const productTagDatabase = new TagsDatabase()
            const result = await productTagDatabase.findTagByName(name)
            res.status(200).send(result)
        } catch (error) {
            if(error instanceof Error){
                res.status(400).json({message: error.message})
            }else{
                res.status(400).json({message: "Unexpected Error!"})
            }
        }
    }
}