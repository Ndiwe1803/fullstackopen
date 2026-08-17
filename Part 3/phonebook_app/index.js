require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const Person = require ('./models/phone')
const app = express()
app.use(express.json())
app.use(express.static('dist'))
app.use(cors())




app.get('/api/persons', (request, response) => {
    Person.find({}).then((persons) => {
        response.json(persons)
    })
})

morgan.token('body', (req) => JSON.stringify(req.body) || '{}');
app.use(morgan(':method :url :status :res[content-length] - :response-time ms - Body: :body'));

app.get('/api/persons/:id', (request, response) => {
    Person.findById(request.params.id).then(note => {
        response.json(note)
    })
})


app.get('/api/persons/info', (request, response) => {
    const maxId = Person.length > 0
        ? Math.max(...persons.map(n => Number(n.id)))
        : 0
    request.requestTime = new Date().toString();
    response.send(`<p>The PhoneBook has info for ${maxId} people</p><p>${request.requestTime}</p>`)


})

app.post('/api/persons', (request, response) => {
    const body = request.body

    if (!body.name || !body.number) {
        return response.status(400).json({
            error: 'content missing'
        })
    }

    // if (Person.filter(person => person.name === body.name).length > 0){
    //     return response.status(400).json({
    //         error: 'name must be unique'
    //     })
    // }

    const person = new Person({
        name: body.name,
        number: body.number,
    })

   person.save().then(savedPerson => {
       response.json(savedPerson)
   })
})

app.delete('/api/persons/:id', (request, response) => {
    const id = request.params.id
    persons = Person.filter(person => person.id !== id)

    response.status(204).end()
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})