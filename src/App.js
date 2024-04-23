import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContactsPage from './components/ContactsPage/ContactsPage.js';

function App() {
  return (
    <Router>
      <div className="App">
          <Route exact path='./components/ContactsPage'component={ContactsPage} />
      </div>
    </Router>
  );
}

export default App;