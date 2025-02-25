const consoleTable = require('console.table');

class View {
    static successMessage(message) {
        console.log(`✅ ${message}`);
    }

    static errorMessage(message) {
        console.log(`❌ Error: ${message}`);
    }

    static displayContacts(contacts) {
        console.table(contacts);
    }

    static displayGroups(groups) {
        console.table(groups);
    }

    static displayContactGroups(contactGroups) {
        console.table(contactGroups);
    }
}

module.exports = View;
