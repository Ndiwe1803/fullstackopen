import { useState, useEffect } from 'react'
import phoneBookService from './services/phoneBook.js'
import PersonForm from "./components/PersonForm.jsx";
import Persons from "./components/Persons.jsx";
import Filter from "./components/Filter.jsx"
import Notification from "./components/Notification.jsx"


const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [search, setSearch] = useState('')
    const [successMessage, setSuccessMessage] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)

    useEffect(() => {
        phoneBookService
            .getAll()
            .then(initialPersons => {
                setPersons(initialPersons)
            })
    }, [])
    const addPersons =(event) => {
        event.preventDefault()
        const personsObject = {
            name: newName,
            number: newNumber,
            id: String(persons.length+1)
        }
        const person = persons.find(n => n.name === newName)

        if (persons.filter(person => person.name === newName).length > 0){
           if (window.confirm(`${person.name} is already added to phonebook, replace the old number with a new one?`))
               phoneBookService
                   .update(person.id, personsObject)
                   .catch((error) => {
                       console.log(error)
                       setErrorMessage(
                           `Note 'information of ${person.name}' was already removed from server`
                       )
                       setTimeout(() => {
                           setErrorMessage(null)
                       }, 5000)
                       setPersons(persons.filter(person => person.name !== newName))
                   })
                   .then(returnedPerson => {
                       setPersons(persons.map(person => person.id ===returnedPerson.id ? returnedPerson : person))
                       setNewName('')
                       setNewNumber('')
                       setSuccessMessage(`${newName} number has been updated successfully!`)
                       setTimeout(() => setSuccessMessage(null), 5000)
                   })
        } else
            phoneBookService
                .create(personsObject)
                .then(returnedPerson => {
                    setPersons(persons.concat(returnedPerson))
                    setNewName('')
                    setNewNumber('')
                    setSuccessMessage(`${newName} has been added`)
                    setTimeout(() => setSuccessMessage(null), 5000)
                })

    }
    const handlePersonChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }
    const HandleNumberChange = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
    }

    const removePerson = id => {
        const person = persons.find(n => n.id === id)

        if (window.confirm(`Are you sure you want to delete ${person.name}?`)) {
            phoneBookService
                .deletePerson(id)
                .then(() => {
                    setPersons(persons.filter(person => person.id !== id))
                })
        }
    }



    return (
      <div>
        <h2>Phonebook</h2>
          <Notification message={successMessage} type="success" />
          <Notification message={errorMessage} type="error" />
          <Filter persons={persons} search={search} setSearch={setSearch} />
          <div>
              <h3>Add a new</h3>
              <PersonForm onSubmit={addPersons} name={newName} number={newNumber} nameChange={handlePersonChange} numberChange={HandleNumberChange}/>
          </div>
        <h2>Numbers</h2>
          <Persons persons={persons} removePerson={removePerson}/>
      </div>
  )
}

export default App