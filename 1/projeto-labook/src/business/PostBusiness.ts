import { PostDataBase } from "../data/PostDatabase";
import { Post, PostInputDTO } from "../model/post";
import { IdGenerator } from "../services/idGenerator";


export class PostBusiness {

    createPostBusiness = async(inputPost: PostInputDTO) => {
        const { photo, description, type, createdAt, authorId } = inputPost

        if(!photo || !description || !type || !createdAt || !authorId){
            throw new Error("Por favor, preencha todos os campos!");
            
        }

        const id = new IdGenerator().generate()

        const post: Post = {
            id,
            ...inputPost

        }

        await new PostDataBase().createPost(post)
    }
        //--------------------------------------------------
        /* getPostById = async():Promise<Post[]> => {
                const postResult = await new PostBusiness().getPostById()

                return postResult
            }    */
}

