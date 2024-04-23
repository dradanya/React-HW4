import React, { useState } from 'react';

const ContactForm = ({ onSaveContact, onCancel }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');

  const handleSave = () => {
    onSaveContact({ name, surname, phone });
    setName('');
    setSurname('');
    setPhone('');
  };

  return (
    <div>
      <input type="text" value={name} placeholder="Name" onChange={e => setName(e.target.value)} />
      <input type="text" value={surname} placeholder="Surname" onChange={e => setSurname(e.target.value)} />
      <input type="text" value={phone} placeholder="Phone" onChange={e => setPhone(e.target.value)} />
      <button onClick={handleSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default ContactForm;