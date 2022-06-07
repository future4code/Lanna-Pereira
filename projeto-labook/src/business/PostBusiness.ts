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
            photo,
            description,
            type,
            createdAt,
            authorId

        }

        await new PostDataBase().createPost(post)
    }



    selectPost = async():Promise<Post[]> => {
            
            const posts = await new PostDataBase().allPosts()

            return posts
    }

    queryResult: any = await new PostDataBase()
         .select("*")
         .where({ id })

      if (!queryResult[0]) {
         res.statusCode = 404
         message = "Post not found"
         throw new Error(message)
      }

      const post: post = {
         id: queryResult[0].id,
         photo: queryResult[0].photo,
         description: queryResult[0].description,
         type: queryResult[0].type,
         createdAt: queryResult[0].created_at,
         authorId: queryResult[0].author_id,
      }

}

