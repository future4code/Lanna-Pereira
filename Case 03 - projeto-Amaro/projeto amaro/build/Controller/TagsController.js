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
exports.TagsController = void 0;
const TagsBusiness_1 = require("../Business/TagsBusiness");
const TagsDatabase_1 = require("../Data/TagsDatabase");
class TagsController {
    createTag(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name } = req.body;
                const input = { name };
                const tagsBusiness = new TagsBusiness_1.TagsBusiness();
                yield tagsBusiness.createTags(input);
                res.status(200).send("Tag criada!");
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
    getTagByNameController(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name } = req.params;
                const productTagDatabase = new TagsDatabase_1.TagsDatabase();
                const result = yield productTagDatabase.findTagByName(name);
                res.status(200).send(result);
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
exports.TagsController = TagsController;
//# sourceMappingURL=TagsController.js.map