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
const BaseDatabase_1 = require("./BaseDatabase");
class Migrations extends BaseDatabase_1.BaseDatabase {
    createTable() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getConnection().raw(`
            CREATE TABLE Amaro_Products(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            price INT NOT NULL,
            type VARCHAR(255) NOT NULL
            );
            
            
            CREATE TABLE Amaro_Tags(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL
            );
            
            CREATE TABLE TagsProduct(
            productsID VARCHAR(255),
            tagsID VARCHAR(255),
            primary key(productsID, tagsID),
            FOREIGN KEY (productsID) references Amaro_Products(id),
            FOREIGN KEY (tagsID) references Amaro_Tags(id)
            );
        `);
            console.log("Table created successfully");
        });
    }
}
const createTableMigration = new Migrations();
createTableMigration.createTable();
//# sourceMappingURL=Migrations.js.map