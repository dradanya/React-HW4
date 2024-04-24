import React, { useState, useEffect } from 'react';
import ContactList from './ContactsList'
import ContactForm from './ContactsForm'

const ContactsPage = () => {
  const [contacts, setContacts] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  const handleSaveContact = async newContact => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify(newContact),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      setContacts([...contacts, data]);
      setShowForm(false);
    } catch (error) {
      console.error('Error saving contact:', error);
    }
  };

  const handleDeleteContact = async contactId => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/users/${contactId}`, {
        method: 'DELETE'
      });
      setContacts(contacts.filter(contact => contact.id !== contactId));
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  return (
    <div>
      <h1>Contacts</h1>
      <ContactList contacts={contacts} onDeleteContact={handleDeleteContact} />
      {!showForm && <button onClick={() => setShowForm(true)}>Add Contact</button>}
      {showForm && <ContactForm onSaveContact={handleSaveContact} onCancel={() => setShowForm(false)} />}
    </div>
  );
};

export default ContactsPage;