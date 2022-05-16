import {Request, Response} from "express"
import { getUser } from "../datas/getUser"

export default async function searchUsers(req: Request, res:Response) {
    try {
        const users = await getUser()

        res.status(201).send(users)
    } catch (error:any) {
        res.status(500).send("Unexpected error!")
    }
}