import * as contacts from './contacts.js';
import yargs from 'yargs';

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'listAllContacts':
      const allContacts = await contacts.listContacts();
      return console.table(allContacts);
    case 'getContactById':
      const oneContact = await contacts.getContactById(id);
      return console.table(oneContact);
    case 'addNewContact':
      const newContact = await contacts.addContact({ name, email, phone });
      return console.table(newContact);
    case 'deleteContactById':
      const deletedContact = await contacts.removeContact(id);
      return console.table(deletedContact);
    default:
      console.log('Unknown action type!');
  }
};

const { argv } = yargs(process.argv.slice(2));
invokeAction(argv);
