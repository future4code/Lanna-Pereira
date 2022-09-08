import {TagsProductDatabase} from "../Data/TagsProductsDatabase"
import { MissingFields } from "../Error/MissingField"
import { TagProductInput, TagProductInputDTO } from "../Model/TagsProduct"

export class TagsProductsBusiness{
    async createProductTagID(input: TagProductInput){
        if(!input.productsID||input.tagsID){
            throw new MissingFields()
        }

        for(let i = 0; i < input.tagsID.length; i++){
            const tag = input.tagsID[i]
            const productTagInput: TagProductInputDTO = {
                productsID: input.productsID,
                tagsID: [tag]
            }

            const productTagDatabase = new TagsProductDatabase()
            await productTagDatabase.insertProductTagId(productTagInput)
        }
        return "Product and Tag Created!"
    }

    async getProductTag_ByProductBusiness(productsID: string){
        if(!productsID){
            throw new Error("Missing productID from params")
        }

        const productTagIDProductDatabase = new TagsProductDatabase()
        const result = await productTagIDProductDatabase.getProductTag_ByIdProd(productsID)

        if(!result){
            throw new Error("This product not exist!")
        }
        return result
    }

    async getProductTags_ByIdTagsBusiness(tagsID: string){
        if(!tagsID){
            throw new Error("Fill the tagsID in query")
        }

        const productTagsAndIdTagDatabase = new TagsProductDatabase()
        const result = await productTagsAndIdTagDatabase.getTag_ByIdTags(tagsID)

        if(!result){
            throw new Error("Not exist product in this Tag")
        }
        return result
    }
}