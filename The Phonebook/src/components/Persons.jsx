

const Persons = (props) => {
    return (
        <div>
            {props.persons.map(person =>
                <ul key={person.id}>
                    <li>{person.name}: {person.number}</li>
                </ul>
            )}
        </div>
    )
}
export default Persons
