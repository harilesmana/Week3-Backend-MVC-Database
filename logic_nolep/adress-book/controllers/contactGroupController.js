const ContactGroup = require("../models/contactGroup");
const view = require("../views/view");

class ContactGroupController {
    static async create(contactId, groupId) {
        try {
            await ContactGroup.create(contactId, groupId);
            view.successMessage("Contact added to group successfully!");
        } catch (error) {
            view.errorMessage(error.message);
        }
    }

    static async update(id, contactId, groupId) {
        try {
            await ContactGroup.update(id, contactId, groupId);
            view.successMessage("Contact group updated successfully!");
        } catch (error) {
            view.errorMessage(error.message);
        }
    }

    static async delete(id) {
        try {
            await ContactGroup.delete(id);
            view.successMessage("Contact group deleted successfully!");
        } catch (error) {
            view.errorMessage(error.message);
        }
    }

    static async show() {
        try {
            const contactGroups = await ContactGroup.show();
            view.displayContactGroups(contactGroups);
        } catch (error) {
            view.errorMessage(error.message);
        }
    }
}

module.exports = ContactGroupController;
