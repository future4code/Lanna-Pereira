import app from "./app"
import { getPurchasesUser } from "./endpoints/getPurchasesUser";
import productRegister from "./endpoints/productRegister";
import purchasesRegister from "./endpoints/purchasesRegister";
import searchProducts from "./endpoints/searchProducts";
import searchUsers from "./endpoints/searchUsers"
import userRegister from "./endpoints/userRegister"

app.post("/users",userRegister);

app.get("/users",searchUsers);

app.post("/products",productRegister)

app.get("/products",searchProducts)

app.post("/purchases",purchasesRegister)//registro de compras

app.get("get/:user_id/purchases", getPurchasesUser)//busca das compras de um usuario