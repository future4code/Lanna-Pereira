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
        const newTags = await tagsDatabase.insertTags(tag)
        return newTags
    }

    async getTagByNameBusiness(name:string){
        if(!name){
            throw new Error("Fill the name in params!")
        }

        const productTagDatabase = new TagsDatabase()
        const result = await productTagDatabase.findTagByName(name)
        return result
    }
}