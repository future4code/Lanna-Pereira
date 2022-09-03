import { TagProductInputDTO } from "../Model/TagsProduct";
import { BaseDatabase } from "./BaseDatabase";
import { ProductDatabase } from "./ProductDatabase";

export class TagsProductDatabase extends BaseDatabase{
    private static TABLE_NAME = "TagsProduct"

    async insertProductTagId(productTag: TagProductInputDTO){
        try {
            await this.getConnection()
            .insert(productTag)
            .into(TagsProductDatabase.TABLE_NAME)

        } catch (error) {
           if(error instanceof Error){
                throw new Error(error.message)
            }else{
                throw new Error("Unexpected Error!")
            }  
        }
    };

    async getProductTag_ByIdProd(productsID: string){
        try {
            const product = await this.getConnection()
            .select("Amaro_Products.id as id do produto", "Amaro_Products.name as nome do produto",
            "Amaro_Products.price as preço", "Amaro_Tags.name as tags")
            .innerJoin("Amaro_Products", "TagsProduct.productsID","Amaro_Products.id")
            .innerJoin("Amaro_Tags", "TagsProduct.tagsID", "Amaro_Tags.id")
            .where({"TagsProduct.productsID": productsID})
            .from(TagsProductDatabase.TABLE_NAME)
            
            return product
            
        } catch (error) {
            if(error instanceof Error){
                throw new Error(error.message)
            }else{
                throw new Error("Unexpected Error!")
            }
        }
    }

    async getTag_ByIdTags(tagsID: string){
        try {
            const [tag] = await this.getConnection()
            .select(["Amaro_Products.id as id do produto", "Amaro_Products.name as nome do produto","Amaro_Products.price as preço, Amaro_Tags.name"])
            .innerJoin("Amaro_Tags", "Amaro_Tags.id","TagsProduct_tagsID")
            .innerJoin("Amaro_Products", "TagsProduct.productsID", "Amaro_Products.id")
            .where({"TagsProduct.tagsID": tagsID})
            .from(TagsProductDatabase.TABLE_NAME)

            return tag
        } catch (error) {
            if(error instanceof Error){
                throw new Error(error.message)
            }else{
                throw new Error("Unexpected Error!")
            }
        }
    }
}