const readline = require("readline");
const ContactController = require("./controllers/contactController");
const GroupController = require("./controllers/groupController");
const ContactGroupController = require("./controllers/contactGroupController");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function showMenu() {
    console.log(`
====================
ADDRESS BOOK COMMAND
====================
1. Create Contact
2. Update Contact
3. Delete Contact
4. Show Contacts
5. Create Group
6. Update Group
7. Delete Group
8. Show Groups
9. Create Contact Group
10. Update Contact Group
11. Delete Contact Group
12. Exit
`);
}

function handleInput() {
    showMenu();
    rl.question("Choose an option: ", async (option) => {
        switch (option) {
            case "1": 
                rl.question("Enter name: ", (name) => {
                    rl.question("Enter phone number: ", (phoneNumber) => {
                        rl.question("Enter company: ", (company) => {
                            rl.question("Enter email: ", async (email) => {
                                await ContactController.create(name, phoneNumber, company, email);
                                handleInput();
                            });
                        });
                    });
                });
                break;
            case "2": 
                rl.question("Enter id of the contact to update: ", (id) => {
                    rl.question("Enter new name: ", (name) => {
                        rl.question("Enter new phone number: ", (phoneNumber) => {
                            rl.question("Enter new company: ", (company) => {
                                rl.question("Enter new email: ", async (email) => {
                                    await ContactController.update(id, name, phoneNumber, company, email);
                                    handleInput();
                                });
                            });
                        });
                    });
                });
                break;
            case "3": 
                rl.question("Enter id of the contact to delete: ", async (id) => {
                    await ContactController.delete(id);
                    handleInput();
                });
                break;
            case "4": 
                await ContactController.show();
                handleInput();
                break;
            case "5": 
                rl.question("Enter group name: ", async (groupName) => {
                    await GroupController.create(groupName);
                    handleInput();
                });
                break;
            case "6": 
                rl.question("Enter id of the group to update: ", (id) => {
                    rl.question("Enter new group name: ", async (groupName) => {
                        await GroupController.update(id, groupName);
                        handleInput();
                    });
                });
                break;
            case "7": 
                rl.question("Enter id of the group to delete: ", async (id) => {
                    await GroupController.delete(id);
                    handleInput();
                });
                break;
            case "8": 
                await GroupController.show();
                handleInput();
                break;
            case "9": 
                rl.question("Enter contact id: ", (contactId) => {
                    rl.question("Enter group id: ", async (groupId) => {
                        await ContactGroupController.create(contactId, groupId);
                        handleInput();
                    });
                });
                break;
            case "10": 
                rl.question("Enter id of the contact group to update: ", (id) => {
                    rl.question("Enter new contact id: ", (contactId) => {
                        rl.question("Enter new group id: ", async (groupId) => {
                            await ContactGroupControlle.update(id, contactId, groupId);
                            handleInput();
                        });
                    });
                });
                break;
            case "11": 
                rl.question("Enter id of the contact group to delete: ", async (id) => {
                    await ContactGroupController.delete(id);
                    handleInput();
                });
                break;
            
            case "12": 
                rl.close();
                break;
            default:
                console.log("Invalid option. Please try again.");
                handleInput();
                break;
        }
    });
}


handleInput();
