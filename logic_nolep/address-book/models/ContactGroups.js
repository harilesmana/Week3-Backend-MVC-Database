let db = require("../connection");
class ContactGroups {
    static create(contactId, groupId) {
        return new Promise((resolve, reject) => {
            db.run(`INSERT INTO GroupContact (contactId, groupId) VALUES (?, ?)`,
                [contactId, groupId],
                function (err) {
                    if (err) reject(err);
                    else resolve(this.lastID);
                });
        });
    }
}
module.exports = ContactGroups;