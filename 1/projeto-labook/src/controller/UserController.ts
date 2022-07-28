import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserInputDTO } from "../model/user";

export class UserController {
    createUserController = async(req: Request, res: Response) => {
        try {
            const {name, email, password} = req.body

            const user:UserInputDTO = {
                name,
                email,
                password
            }
            await new UserBusiness().createUserBusiness(user)

            res.status(201).send("Usuario criado com sucesso!")

        } catch (error:any) {
            res.status(400).send(error.message)
        }

    }

    //------------------------------------
    getAllUser = async(req: Request, res: Response)=> {
       try {
            const result = await new UserBusiness().selectUser()
       

        res.status(201).send(result)
       }  catch (error:any) {
        res.status(400).send(error.message)
    }
       
    }

}