import fs from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const contactsPath = join(__dirname, '..', 'data', 'contacts.json');

export async function saveContact(contactData) {
  try {
    // Read existing contacts
    const data = await fs.readFile(contactsPath, 'utf8');
    const contacts = JSON.parse(data || '[]');
    
    // Add new contact with timestamp
    const newContact = {
      id: contacts.length + 1,
      ...contactData,
      fecha: new Date().toISOString()
    };
    
    contacts.push(newContact);
    
    // Save updated contacts
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    
    return { success: true, id: newContact.id };
  } catch (error) {
    console.error('Error saving contact:', error);
    throw error;
  }
}