import { useState } from 'react'
import PersonForm from "./components/PersonForm.jsx";
import Persons from "./components/Persons.jsx";
import Filter from "./components/Filter.jsx";


const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456', id: 1 },
        { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
        { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
        { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [search, setSearch] = useState('')

    const addPersons =(event) => {
        event.preventDefault()
        const personsObject = {
            name: newName,
            number: newNumber,
            id: persons.length + 1,
        }
        if (persons.filter(person => person.name === newName).length > 0 || persons.filter(person => person.number === newNumber).length > 0) {
            alert("Name or number already exists!")
        } else {
            setPersons(persons.concat(personsObject))
        }
        setNewName('')
        setNewNumber('')
        console.log('Button Clicked', event.target)
    }
    const handlePersonChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }
    const HandleNumberChange = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
    }


    return (
      <div>
        <h2>Phonebook</h2>
          <Filter persons={persons} search={search} setSearch={setSearch} />
          <div>
              <h3>Add a new</h3>
              <PersonForm onSubmit={addPersons} name={newName} number={newNumber} nameChange={handlePersonChange} numberChange={HandleNumberChange}/>
          </div>
        <h2>Numbers</h2>
          <Persons persons={persons} />
      </div>
  )
}

export default App