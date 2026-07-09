const Filter = (props) => {
    const filteredPersons = props.search === '' ? [] :  props.persons.filter((person) => person.name.toLowerCase().includes(props.search.toLowerCase()))
    return (
        <div>
            filter shown with
            <input
                type="text"
                placeholder="Type to search..."
                value={props.search}
                onChange={(e) => props.setSearch(e.target.value)}/>
            <ul>
                {filteredPersons.length>0 ? filteredPersons.map((person, index) => <li key={index}>{person.name}: {person.number}</li>):
                    (<p>no results found</p>
                    )}
            </ul>
        </div>
    )
}
export default Filter
