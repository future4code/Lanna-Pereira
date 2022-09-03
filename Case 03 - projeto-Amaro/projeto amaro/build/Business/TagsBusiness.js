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
exports.TagsBusiness = void 0;
const TagsDatabase_1 = require("../Data/TagsDatabase");
const MissingField_1 = require("../Error/MissingField");
const IdGenerator_1 = __importDefault(require("../Services/IdGenerator"));
class TagsBusiness {
    createTags(input) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!input.name) {
                throw new MissingField_1.MissingFields();
            }
            const tag = {
                id: IdGenerator_1.default.generate(),
                name: input.name
            };
            const tagsDatabase = new TagsDatabase_1.TagsDatabase();
            yield tagsDatabase.insertTags(tag);
        });
    }
    getTagByNameBusiness(name) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!name) {
                    throw new Error("Fill the name in params!");
                }
                const productTagDatabase = new TagsDatabase_1.TagsDatabase();
                const result = yield productTagDatabase.findTagByName(name);
                const product = {
                    idDoProduto: result[0],
                    nomeDoproduto: result[0],
                    precoDoProduto: result[0],
                    tipoDoProduto: result[0],
                    tag: result.map((produto) => {
                        return produto.name;
                    })
                };
                if (!product) {
                    throw new Error("Error in result");
                }
                return product;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.TagsBusiness = TagsBusiness;
//# sourceMappingURL=TagsBusiness.js.map