let db = require("../connection");

class ContactGroup {
    constructor(contactId, groupId) {
        this.contactId = contactId;
        this.groupId = groupId;
    }

    static create(contactId, groupId) {
        let newContactGroup = new ContactGroup(contactId, groupId);
        return new Promise((resolve, reject) => {
            db.run(`INSERT INTO GroupContact (ContactId, GroupId) VALUES (?, ?)`,
                [newContactGroup.contactId, newContactGroup.groupId],
                (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                });
        });
    }

    static update(id, contactId, groupId) {
        return new Promise((resolve, reject) => {
            db.run(`UPDATE GroupContact SET ContactId = ?, GroupId = ? WHERE id = ?`,
                [contactId, groupId, id],
                (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                });
        });
    }

    static delete(id) {
        return new Promise((resolve, reject) => {
            db.run(`DELETE FROM GroupContact WHERE id = ?`, [id], (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }

    static show() {
        return new Promise((resolve, reject) => {
            db.all(`SELECT gc.id, c.name, g.groupName FROM GroupContact gc
                    JOIN Contact c ON gc.ContactId = c.id
                    JOIN Groups g ON gc.GroupId = g.id`, [], (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }
}

module.exports = ContactGroup;
