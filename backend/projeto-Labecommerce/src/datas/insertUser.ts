import { UsersRegister } from "../types";
import { connection } from "./connection";

export const insertUser = async(users:UsersRegister):Promise<void> => {
    
    await connection("labecommerce_users")
    .insert(users)

}
//verificação de email.
export const userByEmail = async(email: string):Promise<string> => {

    const [userEmail] = await connection("labecommerce_users")
    .where({email: email})

    return userEmail
}

