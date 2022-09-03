export type ProductInput = {
    name:string,
    price:number,
    type: string
}

export interface ProductInsert extends ProductInput {
    id: string
}