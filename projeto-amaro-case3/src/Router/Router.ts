import { Router } from "express";
import { ProductController } from "../Controller/ProductController";
import { TagsProductsIdController } from "../Controller/TagsProductsController";
import { TagsController } from "../Controller/TagsController";

export const productRouter = Router()
export const tagsRouter = Router()
export const productTagsIdRouter = Router()

const productController = new ProductController()
const tagsController = new TagsController()
const productTagsIdController = new TagsProductsIdController()


//endpoints de pegar informações
productRouter.get("/:name",productController.getProductByNameController)
tagsRouter.get("/:name",tagsController.getTagByNameController)
productTagsIdRouter.get("/tag",productTagsIdController.getProductTag_ByIdTagController)
productTagsIdRouter.get("/productID", productTagsIdController.getProductTag_ByIdProductController)
//endpoints de criar produtos
productRouter.post("/created", productController.createProduct)
tagsRouter.post("/create",tagsController.createTag)
productTagsIdRouter.post("/insert", productTagsIdController.createProductTagId)
