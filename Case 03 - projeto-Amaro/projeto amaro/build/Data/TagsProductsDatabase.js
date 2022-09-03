"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagsProductDatabase = void 0;
const BaseDatabase_1 = require("./BaseDatabase");
class TagsProductDatabase extends BaseDatabase_1.BaseDatabase {
    insertProductTagId(productTag) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.getConnection()
                    .insert(productTag)
                    .into(TagsProductDatabase.TABLE_NAME);
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(error.message);
                }
                else {
                    throw new Error("Unexpected Error!");
                }
            }
        });
    }
    ;
    getProductTag_ByIdProd(productsID) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield this.getConnection()
                    .select("Amaro_Products.id as id do produto", "Amaro_Products.name as nome do produto", "Amaro_Products.price as preço", "Amaro_Tags.name as tags")
                    .innerJoin("Amaro_Products", "TagsProduct.productsID", "Amaro_Products.id")
                    .innerJoin("Amaro_Tags", "TagsProduct.tagsID", "Amaro_Tags.id")
                    .where({ "TagsProduct.productsID": productsID })
                    .from(TagsProductDatabase.TABLE_NAME);
                return product;
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(error.message);
                }
                else {
                    throw new Error("Unexpected Error!");
                }
            }
        });
    }
    getTag_ByIdTags(tagsID) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const [tag] = yield this.getConnection()
                    .select(["Amaro_Products.id as id do produto", "Amaro_Products.name as nome do produto", "Amaro_Products.price as preço, Amaro_Tags.name"])
                    .innerJoin("Amaro_Tags", "Amaro_Tags.id", "TagsProduct_tagsID")
                    .innerJoin("Amaro_Products", "TagsProduct.productsID", "Amaro_Products.id")
                    .where({ "TagsProduct.tagsID": tagsID })
                    .from(TagsProductDatabase.TABLE_NAME);
                return tag;
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(error.message);
                }
                else {
                    throw new Error("Unexpected Error!");
                }
            }
        });
    }
}
exports.TagsProductDatabase = TagsProductDatabase;
TagsProductDatabase.TABLE_NAME = "TagsProduct";
//# sourceMappingURL=TagsProductsDatabase.js.map