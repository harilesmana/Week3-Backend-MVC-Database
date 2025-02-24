let sqlite3 = require("sqlite3").verbose();
let db = new sqlite3.Database("./database/address_book.db", (err) => {
    if (err) {
        console.error("Error opening database", err.message);
    } else {
        db.run(`CREATE TABLE IF NOT EXISTS Contact (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            phoneNumber TEXT UNIQUE NOT NULL,
            company TEXT,
            email TEXT UNIQUE NOT NULL
        )`);
        
        db.run(`CREATE TABLE IF NOT EXISTS Groups (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            groupName TEXT NOT NULL
        )`);
        
        db.run(`CREATE TABLE IF NOT EXISTS GroupContact (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            contactId INTEGER NOT NULL,
            groupId INTEGER NOT NULL,
            FOREIGN KEY (contactId) REFERENCES Contact(id),
            FOREIGN KEY (groupId) REFERENCES Groups(id)
        )`);
    }
});
module.exports = db;