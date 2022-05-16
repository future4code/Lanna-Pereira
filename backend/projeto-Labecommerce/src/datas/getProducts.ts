import { Products } from "../types";
import { connection } from "./connection";

export const getProduct =  async():Promise<Products[]> => {
    const product = await connection("labecommerce_products") 
    return product   
}