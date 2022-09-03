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
exports.ProductDatabase = void 0;
const BaseDatabase_1 = require("./BaseDatabase");
class ProductDatabase extends BaseDatabase_1.BaseDatabase {
    insertProduct(product) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.getConnection()
                    .insert(product)
                    .into(ProductDatabase.TABLE_NAME);
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
    productValidation(name) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield this.getConnection()
                    .select("*")
                    .where({ name })
                    .from(ProductDatabase.TABLE_NAME);
                return product[0];
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(error.message);
                }
                else {
                    throw new Error("Database Error!");
                }
            }
        });
    }
    productByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const product = yield this.getConnection()
                    .select("Amaro_Products.id as id do produto", "Amaro_Products.name as nome do produto", "Amaro_Products.price as preço", "Amaro_Tags.name as tag")
                    .innerJoin("TagsProduct", "TagsProduct.productsID", "Amaro_Products.id")
                    .innerJoin("Amaro_Tags", "Amaro_Tags.id", "TagsProduct.tagsID")
                    .where("Amaro_Products.name", "LIKE", `%${name}%`)
                    .from(ProductDatabase.TABLE_NAME);
                return product;
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(error.message);
                }
                else {
                    throw new Error("Database Error!");
                }
            }
        });
    }
}
exports.ProductDatabase = ProductDatabase;
ProductDatabase.TABLE_NAME = "Amaro_Products";
//# sourceMappingURL=ProductDatabase.js.map