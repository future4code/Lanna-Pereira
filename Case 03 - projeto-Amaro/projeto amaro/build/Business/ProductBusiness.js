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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductBusiness = void 0;
const ProductDatabase_1 = require("../Data/ProductDatabase");
const MissingField_1 = require("../Error/MissingField");
const IdGenerator_1 = __importDefault(require("../Services/IdGenerator"));
class ProductBusiness {
    createProduct(input) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!input.name || !input.price || !input.type) {
                throw new MissingField_1.MissingFields;
            }
            const product = {
                id: IdGenerator_1.default.generate(),
                name: input.name,
                price: input.price,
                type: input.type
            };
            const productDatabase = new ProductDatabase_1.ProductDatabase();
            const nameProduct = yield productDatabase.productValidation(product.name);
            if (nameProduct) {
                throw new Error("Product already exist!");
            }
            yield productDatabase.insertProduct(product);
        });
    }
    getProductByNameBusiness(name) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!name) {
                throw new Error("The name is missing from the params!");
            }
            const productTagDatabase = new ProductDatabase_1.ProductDatabase();
            const result = yield productTagDatabase.productByName(name);
            if (!result) {
                throw new Error("Product not exist!");
            }
            return result;
        });
    }
}
exports.ProductBusiness = ProductBusiness;
//# sourceMappingURL=ProductBusiness.js.map