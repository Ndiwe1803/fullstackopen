// const Hello = (props) => {
//    const bornYear = ()=>{
//        const yearNow= new date().getFullYear()
//        return yearNow-props.age
//    }
//    return(
//        <div>
//            <p>
//                Hello {props.name}, you are {props.age} years old
//            </p>
//            <p>So you were probably born in {bornYear()}</p>
//        </div>
//    )
//
// }
// const Example = () => {
//     const name = 'Peter'
//     const age = 10
//
//     return (
//         <div>
//             <h1>Greetings</h1>
//             <Hello name="Maya" age={26 + 10}/>
//             <Hello name={name} age={age}/>
//         </div>
//     )
// }


// export default Example

//
//
//
// // // The component only uses the counter field of its props.
// // // This means we can simplify the component by using
// // // destructuring, like so:
// // const Display = ({ counter }) => {
// //     return (
// //         <div>{counter}</div>
// //     )
// // }
// // The function defining the component contains only the return statement,
// // so we can define the function using the more compact form of arrow functions:
// const Display = ({ counter }) => <div>{counter}</div>
//
// // const Button = (props) => {
// //     return (
// //         <button onClick={props.onClick}>
// //             {props.text}
// //         </button>
// //     )
// // }
// // We can use destructuring to get only the required fields from props,
// // and use the more compact form of arrow functions:
// const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>
//
// const App = () => {
//     const [ counter, setCounter ] = useState(0)
//     console.log('rendering with counter value', counter)
//
//
//
//     const increaseByOne = () => {
//         console.log('increasing, value before', counter)
//         setCounter(counter + 1)
//     }
//
//     const decreaseByOne = () => {
//         console.log('decreasing, value before', counter)
//         setCounter(counter - 1)
//     }
//
//     const setToZero = () => {
//         console.log('resetting to zero, value before', counter)
//         setCounter(0)
//     }
//
//
//     return (
//         <div>
//             <Display counter={counter} />
//             <Button onClick={increaseByOne} text="plus" />
//             <Button onClick={setToZero} text="zero" />
//             <Button onClick={decreaseByOne} text="minus" />
//         </div>
//     )
// }
//
