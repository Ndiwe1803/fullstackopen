const Persons = ({persons, removePerson}) => {
    return (
        <div>
            {persons.map(person =>
                <ul key={person.id}>
                    <li>
                        {person.name}: {person.number}
                        <button onClick={() => removePerson(person.id)}>delete</button>
                    </li>
                </ul>
            )}
        </div>
    )
}
export default Persons
