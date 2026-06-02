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
        return(
            <>
                <Part name={parts[0].name} exercises={parts[0].exercises}/>
                <Part name={parts[1].name} exercises={parts[1].exercises}/>
                <Part name={parts[2].name} exercises={parts[2].exercises}/>
            </>
        )
    }

    function sum (exercise1,exercise2,exercise3)
    {
        return exercise1+ exercise2 + exercise3
    }

    const Result = sum(parts[0].exercises,parts[1].exercises,parts[2].exercises)



    const Total = ()=>{
        console.log(Result)
        return (
            <>
                <p>Number of exercises {Result}</p>
            </>
        )
    }

    return (
        <div>
            <Header course={course}/>
            <Content/>
            <Total/>
        </div>
    )
}

export default App



