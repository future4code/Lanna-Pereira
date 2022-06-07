import { Post } from "../model/post";
import { BaseDataBase } from "./BaseDatabase";

export class PostDataBase extends BaseDataBase {
    private static TABLE_NAME = "labook_posts"

    createPost = async(post: Post):Promise<void> => {
        try {
            await BaseDataBase.connection
            .insert(post)
            .into(PostDataBase.TABLE_NAME)

        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
            
        }
    }

    allPosts = async():Promise<Post[]> => {
        try {
            const result = await BaseDataBase.connection
            .select()
            .into(PostDataBase.TABLE_NAME)

            return result

        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
        }
    }

    findPost = async(post: string):Promise<Post> =>{
        
    } 
}