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
exports.TagsProductsBusiness = void 0;
const TagsProductsDatabase_1 = require("../Data/TagsProductsDatabase");
const MissingField_1 = require("../Error/MissingField");
class TagsProductsBusiness {
    createProductTagID(input) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!input.productsID || input.tagsID) {
                throw new MissingField_1.MissingFields();
            }
            for (let i = 0; i < input.tagsID.length; i++) {
                const tag = input.tagsID[i];
                const productTagInput = {
                    productsID: input.productsID,
                    tagsID: [tag]
                };
                const productTagDatabase = new TagsProductsDatabase_1.TagsProductDatabase();
                yield productTagDatabase.insertProductTagId(productTagInput);
            }
            return "Product and Tag Created!";
        });
    }
    getProductTag_ByProductBusiness(productsID) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!productsID) {
                throw new Error("Missing productID from params");
            }
            const productTagIDProductDatabase = new TagsProductsDatabase_1.TagsProductDatabase();
            const result = yield productTagIDProductDatabase.getProductTag_ByIdProd(productsID);
            const produtos = {
                idProduto: result[0]["id do produto"],
                nomeProduto: result[0]["nome do produto"],
                preco: result[0]["preço do produto"],
                tipoProduto: result[0]["tipo do produto"],
                tag: result.map((index) => {
                    return index.name;
                })
            };
            if (!produtos) {
                throw new Error("This product not exist!");
            }
            return produtos;
        });
    }
    getProductTags_ByIdTagsBusiness(tagsID) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!tagsID) {
                throw new Error("Fill the tagsID in query");
            }
            const productTagsAndIdTagDatabase = new TagsProductsDatabase_1.TagsProductDatabase();
            const result = yield productTagsAndIdTagDatabase.getTag_ByIdTags(tagsID);
            if (!result) {
                throw new Error("Not exist product in this Tag");
            }
            return result;
        });
    }
}
exports.TagsProductsBusiness = TagsProductsBusiness;
//# sourceMappingURL=TagsProductsBusiness.js.map