let ContactController = require("./controllers/ContactController");
let GroupsController = require("./controllers/GroupsController");
let ContactGroupsController = require("./controllers/ContactGroupsController");

let command = process.argv[2];
let entity = process.argv[3];
let args = process.argv.slice(4);

switch (command) {
    case "create":
        if (entity === "Contact") {
            ContactController.create(args[0], args[1], args[2], args[3]);
        } else if (entity === "Groups") {
            GroupsController.create(args[0]);
        } else if (entity === "ContactGroups") {
            ContactGroupsController.create(args[0], args[1]);
        }
        break;
    case "update":
        if (entity === "Contact") {
            ContactController.update(args[0], args[1], args[2], args[3], args[4]);
        } else if (entity === "Groups") {
            GroupsController.update(args[0], args[1]);
        } else if (entity === "ContactGroups") {
            ContactGroupsController.update(args[0], args[1], args[2]);
        }
        break;
    case "delete":
        if (entity === "Contact") {
            ContactController.delete(args[0]);
        } else if (entity === "Groups") {
            GroupsController.delete(args[0]);
        } else if (entity === "ContactGroups") {
            ContactGroupsController.delete(args[0]);
        }
        break;
    case "showContact":
        ContactController.showAll();
        break;
    case "showGroups":
        GroupsController.showAll();
        break;
    case "showContactGroups":
        ContactGroupsController.show();
        break;
    case "help":
        console.log(`Available commands:
> node main.js create Contact <name> <phoneNumber> <company> <email>
> node main.js update Contact <id> <name> <phoneNumber> <company> <email>
> node main.js delete Contact <id>
> node main.js showContact
> node main.js create Groups <groupName>
> node main.js update Groups <id> <groupName>
> node main.js delete Groups <id>
> node main.js showGroups
> node main.js create ContactGroups <contactId> <groupId>
> node main.js update ContactGroups <id> <contactId> <groupId>
> node main.js delete ContactGroups <id>
> node main.js showContactGroups`);
        break;
    default:
        console.log("Command not recognized. Use 'node main.js help' for a list of commands.");
}
