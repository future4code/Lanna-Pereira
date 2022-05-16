import { Products } from "../types";
import { connection } from "./connection";

export const insertProduct = async(products:Products):Promise<void> => {
    await connection("labecommerce_products")
    .insert(products)
}

