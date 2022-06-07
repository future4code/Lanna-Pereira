import express from "express"
import { UserController } from "../UserController"


export const userRouter = express.Router()

const userController = new UserController()
userRouter.post("/user",userController.createUserController)
userRouter.get("/users",userController.getAllUser)