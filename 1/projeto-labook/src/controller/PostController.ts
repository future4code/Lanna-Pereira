import {Request, Response} from "express"
import { PostBusiness } from "../business/PostBusiness"
import { PostInputDTO } from "../model/post"

export class PostController {

    createPostController = async(req: Request, res: Response) => {
        try {
            const {photo, description, type,createdAt, authorId} = req.body

            const post: PostInputDTO = {
                photo,
                description,
                type,
                createdAt,
                authorId
            }
            await new PostBusiness().createPostBusiness(post)

            res.status(201).send("Post criado com sucesso!")

        } catch (error:any) {
            throw new Error(error.message);
            
        }
    }
//--------------------------------------------------
  /*  getPostById = async(req: Request, res: Response) => {
        try {
            const resultPost = await new PostBusiness().getPostById()

            res.status(201).send(resultPost)
            
        } catch (error:any) {
            throw new Error(error.message);
            
        }
    }*/
}