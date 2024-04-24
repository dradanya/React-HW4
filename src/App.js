import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ContactsPage from './components/ContactsPage/ContactsPage.js';

function App() {
  return (
    <Routes>
          <Route path='/'element={<ContactsPage/>} />
    </Routes>
  );
}

export default App;