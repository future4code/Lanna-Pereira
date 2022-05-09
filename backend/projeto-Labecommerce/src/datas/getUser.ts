import { UsersRegister } from "../types";
import { connection } from "./connection";


export const getUser = async():Promise<UsersRegister[]> => {
    const users = await connection("labecommerce_users")

    return users
}

export const getUserId = async (userId: string):Promise<UsersRegister> => {
    const user = await connection("labecommerce_users").where({id: userId})

    return user[0]
}