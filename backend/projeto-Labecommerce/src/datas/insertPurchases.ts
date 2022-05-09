import { Purchases } from "../types";
import { connection } from "./connection";

export const insertPurchases = async (purchases:Purchases):Promise<void> => {
    await connection("labcommerce_purchase")
    .insert(purchases)
}