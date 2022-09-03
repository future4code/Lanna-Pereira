import { ProductInsert  } from "../Model/Product";
import { BaseDatabase } from "./BaseDatabase";

export class ProductDatabase extends BaseDatabase {
    private static TABLE_NAME = "Amaro_Products"

    async insertProduct(product: ProductInsert){
        try {
            await this.getConnection()
            .insert(product)
            .into(ProductDatabase.TABLE_NAME)

        } catch (error) {
            if(error instanceof Error){
                throw new Error(error.message)
            }else{
                throw new Error("Unexpected Error!")
            }
        }
    }

    async productValidation(name:string): Promise<ProductInsert>{
        try {
            const product = await this.getConnection()
            .select("*")
            .where({name})
            .from(ProductDatabase.TABLE_NAME)

            return product[0]
        } catch (error) {
            if(error instanceof Error){
                throw new Error(error.message)
            }else{
                throw new Error("Database Error!")
            }
        }
    }

    async productByName(name:string){
        try {
            const product = await this.getConnection()
            .select("Amaro_Products.id as id do produto", "Amaro_Products.name as nome do produto",
            "Amaro_Products.price as preço", "Amaro_Tags.name as tag")
           .innerJoin("TagsProduct", "TagsProduct.productsID", "Amaro_Products.id")
            .innerJoin("Amaro_Tags", "Amaro_Tags.id","TagsProduct.tagsID")
            .where("Amaro_Products.name","LIKE",`%${name}%`)
            .from(ProductDatabase.TABLE_NAME)

            return product
        } catch (error) {
            if(error instanceof Error){
                throw new Error(error.message)
            }else{
                throw new Error("Database Error!")
            }
        }
    }
}