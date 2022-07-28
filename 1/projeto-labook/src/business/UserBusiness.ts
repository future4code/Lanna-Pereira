import { UserDataBase } from "../data/UserDatabase";
import { User, UserInputDTO } from "../model/user";
import { IdGenerator } from "../services/idGenerator";

export class UserBusiness {
    createUserBusiness = async(input: UserInputDTO) => {

        const {name, email, password} = input

        if(!name || !email || !password){
            throw new Error("Preencha todos os dados!");
        }

        if(password.length < 6){
            throw new Error("Sua senha deve ter pelo menos 6 digitos");
            
        }
        const verificarEmail = await new UserDataBase().findUserEmail(email)
        if(verificarEmail){
            throw new Error("esse email já foi cadastrado");
            
        }

        const id = new IdGenerator().generate()

        const user:User = {
            id,
            ...input
        }

        await new UserDataBase().createUser(user)
    }

    selectUser = async():Promise<User[]>=>{
      const result =  await new UserDataBase().allUsers()
      return result
    }

    
}