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
exports.TagsProductsIdController = void 0;
const TagsProductsBusiness_1 = require("../Business/TagsProductsBusiness");
class TagsProductsIdController {
    createProductTagId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { productsID, tagsID } = req.body;
                const input = {
                    productsID, tagsID
                };
                const productTagsBusiness = new TagsProductsBusiness_1.TagsProductsBusiness();
                const messageProductTagsId = yield productTagsBusiness.createProductTagID(input);
                res.status(200).send({ messageProductTagsId });
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(400).json({ message: error.message });
                }
                else {
                    res.status(400).json({ message: "Unexpected Error!" });
                }
            }
        });
    }
    getProductTag_ByIdProductController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { productsID } = req.params;
                const productTagByIdProductBusiness = new TagsProductsBusiness_1.TagsProductsBusiness();
                const productId = yield productTagByIdProductBusiness.getProductTag_ByProductBusiness(productsID);
                res.status(200).send({ productId });
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(400).json({ message: error.message });
                }
                else {
                    res.status(400).json({ message: "Unexpected Error!" });
                }
            }
        });
    }
    getProductTag_ByIdTagController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { tagsID } = req.params;
                const productTagByIdTagBusiness = new TagsProductsBusiness_1.TagsProductsBusiness();
                const productId = yield productTagByIdTagBusiness.getProductTags_ByIdTagsBusiness(tagsID);
                res.status(200).send({ productId });
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(400).json({ message: error.message });
                }
                else {
                    res.status(400).json({ message: "Unexpected Error!" });
                }
            }
        });
    }
}
exports.TagsProductsIdController = TagsProductsIdController;
//# sourceMappingURL=TagsProductsController.js.map