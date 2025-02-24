const db = require("../connection");

class ContactGroupsController {
    static create(contactId, groupId) {
        const sql = `INSERT INTO GroupContact (ContactId, GroupId) VALUES (?, ?)`;
        db.run(sql, [contactId, groupId], function (err) {
            if (err) {
                console.error("Error creating ContactGroups:", err.message);
            } else {
                console.log(`Contact ID ${contactId} added to Group ID ${groupId}`);
            }
        });
    }

    static show() {
        const sql = `SELECT GroupContact.id, Contact.name, Groups.groupName FROM GroupContact 
                     JOIN Contact ON GroupContact.ContactId = Contact.id
                     JOIN Groups ON GroupContact.GroupId = Groups.id`;
        db.all(sql, [], (err, rows) => {
            if (err) {
                console.error("Error fetching ContactGroups:", err.message);
            } else {
                console.table(rows);
            }
        });
    }

    static delete(id) {
        const sql = `DELETE FROM GroupContact WHERE id = ?`;
        db.run(sql, [id], function (err) {
            if (err) {
                console.error("Error deleting ContactGroups:", err.message);
            } else {
                console.log(`ContactGroups with ID ${id} deleted.`);
            }
        });
    }
}

module.exports = ContactGroupsController;
