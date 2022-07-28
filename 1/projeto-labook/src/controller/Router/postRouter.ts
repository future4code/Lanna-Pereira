import express from "express"
import { PostController } from "../PostController"

export const postRouter = express.Router()

const postController = new PostController()
postRouter.post("/post", postController.createPostController)
//postRouter.get("/posts", postController.getPostById)