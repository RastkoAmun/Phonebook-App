import { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPerson] = useState([{
    name: 'Magnus Carlsen',
    number: '236-665-9989'
  }])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

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
      setPerson(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNameInput = (event) => {
    setNewName(event.target.value);
  }
  const handleNumberInput = (event) => {
    setNewNumber(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameInput}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberInput}/>
        </div>
        <div>
          <button type='submit' onClick={addPerson}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person => 
          <Person name={person.name} phoneNumber={person.number} key={person.name}/>)}
      </div>
      
    </div>
  );
}

export default App;
