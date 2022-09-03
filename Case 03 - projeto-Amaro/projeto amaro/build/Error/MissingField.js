"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MissingFields = void 0;
const BaseError_1 = require("./BaseError");
class MissingFields extends BaseError_1.BaseError {
    constructor() {
        super("Missing fields to complete");
    }
}
exports.MissingFields = MissingFields;
//# sourceMappingURL=MissingField.js.map