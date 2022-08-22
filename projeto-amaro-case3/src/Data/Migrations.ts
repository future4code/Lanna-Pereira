import { BaseDatabase } from "./BaseDatabase";

class Migrations extends BaseDatabase {

    async createTable() {
        await this.getConnection().raw(`
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
        `)
        console.log("Table created successfully")
    }
}

const createTableMigration = new Migrations()
createTableMigration.createTable()  