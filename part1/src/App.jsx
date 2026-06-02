const App = () => {
    const course = 'Half Stack application development'
    const parts = [
        {
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            name: 'State of a component',
            exercises: 14
        }
    ]


    const Header = (props) => {
        console.log(props)
        return <h1>{props.course}</h1>
    }



    const Part = (parts)=>{
        console.log(parts)
        return (
            <p>
                {parts.name} {parts.exercises}
            </p>
        )
    }
    const Content = (parts)=>{
        console.log(parts)
        return(
            <>
                <Part name={parts.parts[0].name} exercises={parts.parts[0].exercises}/>
                <Part name={parts.parts[1].name} exercises={parts.parts[1].exercises}/>
                <Part name={parts.parts[2].name} exercises={parts.parts[2].exercises}/>
            </>
        )
    }

    const sum = (exercise1,exercise2,exercise3) =>
    {
        return exercise1+ exercise2 + exercise3
    }



    const Total = (parts)=>{
        console.log(parts)
        return (
            <p>Number of exercises {sum(parts.parts[0].exercises,parts.parts[1].exercises,parts.parts[2].exercises)}</p>
        )
    }

    return (
        <div>
            <Header course={course}/>
            <Content parts={parts}/>
            <Total parts={parts}/>
        </div>
    )
}

export default App



