import { TagsInsert } from "../Model/Tags";
import { BaseDatabase } from "./BaseDatabase";

export class TagsDatabase extends BaseDatabase {

    private static TABLE_NAME = "Amaro_Tags"

    async insertTags(tags: TagsInsert) {

        try {

            await this.getConnection()
            .insert(tags)
            .into(TagsDatabase.TABLE_NAME)


        } catch (error) {
             if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Unexpected database error")
            }
        }
    }

    async findTagByName(name: string) {
        try {

        const tag = await this.getConnection()
        .select(["Amaro_Tags.id as id ", "Amaro_Tags.name as nome da tag"])
        .where({name})
        .from(TagsDatabase.TABLE_NAME)
        

            return tag

        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error("Unexpected database error")
            }
        }
    }

} 