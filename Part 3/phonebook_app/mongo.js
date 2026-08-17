// const mongoose = require('mongoose')
//
// if (process.argv.length < 3) {
//     console.log('give password as argument')
//     process.exit(1)
// }
//   // 040-1234567
// const password = process.argv[2]
// // const name = process.argv[3]      // "John Doe"
// // const number = process.argv[4]    // 040-1234567
//
// const url = `mongodb+srv://Ndiwe:${'Ndiwe2003'}@cluster0.w2h6pgi.mongodb.net/personApp?retryWrites=true&w=majority&appName=Cluster0`
//
// mongoose.set('strictQuery',false)
//
// mongoose.connect(url, { family: 4 })
//
// const personSchema = new mongoose.Schema({
//     name: String,
//     number: String,
// })
//
// const Person = mongoose.model('person', personSchema)
//
// const person = new Person({
//     name:name,
//     number:number,
// })
//
// if (process.argv.length === 3) {
//     // just password = find all
//     Person.find({}).then(result => {
//         result.forEach(person => console.log(person))
//         mongoose.connection.close()
//     })
// } else {
//     // password + name + number = save new
//     const person = new Person({ name, number })
//     person.save().then(() => {
//         console.log(`added ${name} number ${number}`)
//         mongoose.connection.close()
//     })
// }
//
//
