import { useState } from 'react'
import { useEffect } from 'react'
import SearchFilter from './components/SearchFilter'
import PersonForm from './components/PersonForm'
import ListOfContacts from './components/ListOfContacts'
import axios from 'axios'

const App = (props) => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchValue, setSearchValue] = useState('')

  const hook = () => {
    axios
      .get('http://localhost:3001/contacts')
      .then(response => setPersons(response.data))
  }
  useEffect(hook, [])

  const filteredContacts = persons.filter((person) => 
    person.name.toLowerCase().includes(searchValue.toLowerCase()))
  
  //Addins new contacts to phonebook
  const addPerson = (event) => {
    event.preventDefault();
    const newPerson = {
      name: newName,
      number: newNumber,
    }

    const isFound = persons.find(person => 
      person.name === newName)

    if(isFound){
      alert(`${newPerson.name} is already added to phonebook`)
    }else{
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleInput = (event) => {
    if(event.target.className === 'name'){
      setNewName(event.target.value);
    }else{
      setNewNumber(event.target.value);
    }
  }

  const handleSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchFilter value={searchValue} onChange={handleSearchInput}/>

      <h2>Add a new</h2>
      <PersonForm nameValue={newName} numberValue={newNumber} addPersonFunction={addPerson} onChange={handleInput}
      />

      <h2>Numbers</h2>
      <ListOfContacts contacts={filteredContacts}/>
    </div>
  );
}

export default App;
