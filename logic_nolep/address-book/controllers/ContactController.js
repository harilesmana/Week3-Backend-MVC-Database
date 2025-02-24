let Contact = require("../models/Contact");

class ContactController {
    static async create(name, phoneNumber, company, email) {
        try {
            let id = await Contact.create(name, phoneNumber, company, email);
            console.log(`Contact created with ID: ${id}`);
        } catch (error) {
            console.error("Error creating contact:", error.message);
        }
    }

    static async update(id, name, phoneNumber, company, email) {
        try {
            await Contact.update(id, name, phoneNumber, company, email);
            console.log(`Contact with ID ${id} updated.`);
        } catch (error) {
            console.error("Error updating contact:", error.message);
        }
    }

    static async delete(id) {
        try {
            await Contact.delete(id);
            console.log(`Contact with ID ${id} deleted.`);
        } catch (error) {
            console.error("Error deleting contact:", error.message);
        }
    }

    static async showAll() {
        try {
            let contacts = await Contact.getAll();
            console.table(contacts);
        } catch (error) {
            console.error("Error fetching contacts:", error.message);
        }
    }
}

module.exports = ContactController;
