import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
    const [country, setCountry] = useState(null)
    // const [countryCapital, setCountryCapital] = useState([])
    // const [countryArea, setCountryArea] = useState(null)
    // const [countryLanguages, setCountryLanguages] = useState({})
    // const [countryFlag, setCountryFlag] = useState("")
    const [value, setValue] = useState('')

    useEffect(() => {
        console.log(country)
        console.log('effect run, country u searching for is', country)
        if (country) {
            console.log('fetching country info ...')
            axios
                .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${country}`)
                .then(response=>{
                    setCountry(response.data.name)
                })
        }
    }, [country])

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const onSearch = (event) => {
        event.preventDefault()
        setCountry(value)
    }

    return(
        <div>
            <form onSubmit={onSearch}>
                country: <input value={value} onChange={handleChange} />
                <button type="submit">Search</button>
            </form>
            <pre>
                {JSON.stringify(country, null, 2)}
            </pre>
        </div>

    )



}

export default App