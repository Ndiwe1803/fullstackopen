const Header = (props) => {
    return <h1>{props.course.name}</h1>
}



const Part = (props)=>{
    console.log(props)
    return (
        <p>
            {props.name} {props.exercises}
        </p>
    )
}

const Content = (props)=>{
    console.log(props)

    return props.course.parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)
}
const Total = (props)=>{
    console.log(props)
    const total = props.course.parts.reduce((sum,part)=> sum+ part.exercises,0)
    return <p>total number of exercises: {total} </p>

}

const Course = (props) =>{
    console.log(props)
    return (
        <>
            <Header course={props.course} />
            <Content course={props.course} />
            <Total course={props.course}/>
        </>

    )
}

export default Course;