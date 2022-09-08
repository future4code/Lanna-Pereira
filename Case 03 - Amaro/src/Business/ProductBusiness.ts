import { ProductDatabase } from "../Data/ProductDatabase";
import { MissingFields } from "../Error/MissingField";
import { ProductInput, ProductInsert } from "../Model/Product";
import IdGenerator from "../Services/IdGenerator";


export class ProductBusiness {
    async createProduct(input: ProductInput){
        if(!input.name||!input.price||!input.type){
            throw new MissingFields
        }

        const product: ProductInsert = {
            id: IdGenerator.generate(),
            name: input.name,
            price: input.price,
            type: input.type
        }

        const productDatabase = new ProductDatabase()
        const nameProduct = await productDatabase.productValidation(product.name)

        if(nameProduct){
            throw new Error("Product already exist!")
        }

        await productDatabase.insertProduct(product)

    }

    async getProductByNameBusiness(name:string){
        if(!name){
            throw new Error("The name is missing from the params!")
        }

        const productTagDatabase = new ProductDatabase()
        const result = await productTagDatabase.productByName(name)

        if(!result){
            throw new Error("Product not exist!")
        }

        return result
    }
}