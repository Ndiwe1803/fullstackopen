const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('give password as argument')
    process.exit(1)
}
// 040-1234567
const password = process.argv[2]
// const name = process.argv[3]      // "John Doe"
// const number = process.argv[4]    // 040-1234567

const url = process.env.MONGODB_URI

mongoose.set('strictQuery',false)

mongoose.connect(url, { family: 4 })
    .then(result => {
    console.log('connected to MongoDB')
})
    .catch(error => {
        console.log('error connecting to MongoDB:', error.message)
    })

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 3,
        required: true
    },
    number:  {
        type: String,
        minLength: 5,
        required: true
    },
})

const Person = mongoose.model('person', personSchema)
personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('person', personSchema)