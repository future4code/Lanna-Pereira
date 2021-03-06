
export type UsersRegister = {
    id: string,
    name: string,
    email: string,
    password: string

};

export type Products = {
    id: string,
    name: string,
    price: number,
    image_url: string
};

export type Purchases = {
    id: string,
    userId: string,
    productId: string,
    quantity: number,
    totalPrice: number
}


