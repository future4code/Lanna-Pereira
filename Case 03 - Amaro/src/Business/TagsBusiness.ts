import { TagsDatabase } from "../Data/TagsDatabase";
import { MissingFields } from "../Error/MissingField";
import { TagsInput, TagsInsert } from "../Model/Tags";
import  IdGenerator  from "../Services/IdGenerator";

export class TagsBusiness{
    async createTags(input: TagsInput){
        if(!input.name){
            throw new MissingFields()
        }

        const tag: TagsInsert = {
            id: IdGenerator.generate(),
            name: input.name
        }

        const tagsDatabase = new TagsDatabase()
        await tagsDatabase.insertTags(tag)
     
    }

    async getTagByNameBusiness(name:string){
        try {
             if(!name){
            throw new Error("Fill the name in params!")
        } 
        
        const productTagDatabase = new TagsDatabase()
        const result = await productTagDatabase.findTagByName(name)
        const product = {
            idDoProduto: result[0],
            nomeDoproduto: result[0],
            precoDoProduto: result[0],
            tipoDoProduto: result[0],
            tag: result.map((produto)=>{
                return produto.name
            })
        }
        if(!product){
            throw new Error("Error in result")
            
        }

        return product

        } catch (error:any) {
            throw new Error(error.message)
        }
       

       

    }
}