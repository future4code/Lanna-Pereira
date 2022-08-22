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

        const produtos = {
            idProduto: result[0]["id do produto"],
            nomeProduto:result[0]["nome do produto"],
            preco: result[0]["preço do produto"],
            tipoProduto:result[0]["tipo do produto"],
            tag: result.map((index)=>{
                return index.name
            })
        }

        if(!produtos){
            throw new Error("This product not exist!")
        }
        return produtos
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