import { Purchases } from "../types";
import { connection } from "./connection";

export const selectUserId = async(userId:string):Promise <Purchases[]> => {
    const purchases = await connection("labcommerce_purchases").
    select(["labcommerce_users"]).where({userId})

    return purchases
}