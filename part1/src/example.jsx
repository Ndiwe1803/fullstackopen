const Example = () => {
    const users = [
        { id: 1, name: "Ava", age: 20 },
        { id: 2, name: "Ben", age: 22 },
        { id: 3, name: "Cara", age: 19 }
    ]

    const User = (props) => {
        return (
            <p>
                {props.user.name} ({props.user.age})
            </p>
        )
    }

}


export default Example