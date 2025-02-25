let db = require("../connection");

class Group {
    constructor(groupName) {
        this.groupName = groupName;
    }

    // Method untuk membuat grup baru
    static create(groupName) {
        let newGroup = new Group(groupName);
        return new Promise((resolve, reject) => {
            db.run(`INSERT INTO Groups (groupName) VALUES (?)`, [newGroup.groupName], (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }

    // Method untuk memperbarui grup yang sudah ada
    static update(id, groupName) {
        return new Promise((resolve, reject) => {
            db.run(`UPDATE Groups SET groupName = ? WHERE id = ?`, [groupName, id], (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }

    // Method untuk menghapus grup
    static delete(id) {
        return new Promise((resolve, reject) => {
            db.run(`DELETE FROM Groups WHERE id = ?`, [id], (err) => {
                if (err) {
                    reject(err);
                } else {
                    // Menghapus entri terkait di GroupContact
                    db.run(`DELETE FROM GroupContact WHERE GroupId = ?`, [id], (err) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve();
                        }
                    });
                }
            });
        });
    }

    // Method untuk menampilkan semua grup
    static show() {
        return new Promise((resolve, reject) => {
            db.all(`SELECT * FROM Groups`, [], (err, rows) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }
}

module.exports = Group;
