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
exports.TagsDatabase = void 0;
const BaseDatabase_1 = require("./BaseDatabase");
class TagsDatabase extends BaseDatabase_1.BaseDatabase {
    insertTags(tags) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.getConnection()
                    .insert(tags)
                    .into(TagsDatabase.TABLE_NAME);
                return "Tag created!";
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(error.message);
                }
                else {
                    throw new Error("Unexpected database error");
                }
            }
        });
    }
    findTagByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tag = yield this.getConnection()
                    .select(["Amaro_Tags.id as id ", "Amaro_Tags.name as nome da tag"])
                    .from(TagsDatabase.TABLE_NAME)
                    .where({ "Amaro_Tags.name": name });
                return tag;
            }
            catch (error) {
                if (error instanceof Error) {
                    throw new Error(error.message);
                }
                else {
                    throw new Error("Unexpected database error");
                }
            }
        });
    }
}
exports.TagsDatabase = TagsDatabase;
TagsDatabase.TABLE_NAME = "Amaro_Tags";
//# sourceMappingURL=TagsDatabase.js.map