import { User } from "../model/user";
import { BaseDataBase } from "./BaseDatabase";


export class UserDataBase extends BaseDataBase{
    private static TABLE_NAME = "labook_users"

    createUser = async(user: User):Promise<void> =>
    {
        try {
            await BaseDataBase.connection
            .insert(user)
            .into(UserDataBase.TABLE_NAME)
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
            
        }
    }

    findUserEmail = async(email: string):Promise<User>=>{
        try {
            const result = await BaseDataBase.connection
            .select()
            .where({email})
            .into(UserDataBase.TABLE_NAME)

            return result[0]

        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    allUsers = async():Promise<User[]> => {
        try {
            const result = await BaseDataBase.connection
            .select()
            .into(UserDataBase.TABLE_NAME)

            return result
        
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
        
    }
}