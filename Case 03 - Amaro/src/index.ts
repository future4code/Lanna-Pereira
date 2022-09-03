import { app } from "./app";
import { productRouter, productTagsIdRouter, tagsRouter } from "./Router/Router";

app.use("/product", productRouter)
app.use("/tags", tagsRouter)
app.use("/product/tag", productTagsIdRouter)