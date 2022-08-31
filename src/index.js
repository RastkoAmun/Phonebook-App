import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const initialContacts = [{
    name: 'Magnus Carlsen',
    number: '236-665-9989'
  },
  {
    name: 'Hikaru Nakamura',
    number: '236-555-0078'
  },
  {
    name: 'Gukesh D',
    number: '604-676-9822'
  }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App people={initialContacts}/>
);
