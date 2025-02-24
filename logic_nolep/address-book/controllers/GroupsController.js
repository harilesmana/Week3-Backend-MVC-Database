let Groups = require("../models/Groups");

class GroupsController {
    static async create(groupName) {
        try {
            let id = await Groups.create(groupName);
            console.log(`Group created with ID: ${id}`);
        } catch (error) {
            console.error("Error creating group:", error.message);
        }
    }

    static async update(id, groupName) {
        try {
            await Groups.update(id, groupName);
            console.log(`Group with ID ${id} updated.`);
        } catch (error) {
            console.error("Error updating group:", error.message);
        }
    }

    static async delete(id) {
        try {
            await Groups.delete(id);
            console.log(`Group with ID ${id} deleted.`);
        } catch (error) {
            console.error("Error deleting group:", error.message);
        }
    }

    static async showAll() {
        try {
            let groups = await Groups.getAll();
            console.table(groups);
        } catch (error) {
            console.error("Error fetching groups:", error.message);
        }
    }
}

module.exports = GroupsController;
