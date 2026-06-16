import { useState } from 'react'

const Statistics = (props) => {
    // ...
}


const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [totalGood, setTotalGood] = useState(0)
    const [totalNeutral, setTotalNeutral] = useState(0)
    const [totalBad, setTotalBad] = useState(0)
    const [total, setTotal] = useState(0)
    const [average, setAverage] = useState(0)
    const [positive, setPositive] = useState(0)

    const handleGoodClicks = ()=>{
        console.log('good before increase', good)

        const updatedGood = good+1
        setGood(updatedGood)
        setTotalGood(updatedGood)
        setTotal(updatedGood+neutral+bad)
        const updatedTotal = updatedGood+neutral+bad
        const avgPositive = updatedGood/updatedTotal *100
        setPositive(avgPositive)
        const avg = (updatedGood-bad)/updatedTotal
        setAverage(avg)
        console.log('total after increase', updatedTotal)
        console.log('avg after increase', avg)
        console.log('average good after increase', avgPositive)
        console.log('good after increase', updatedGood)

    }
    const handleNeutralClicks = ()=>{
        console.log('neutral after increase', neutral)
        const updatedNeutral = neutral+1
        setNeutral(updatedNeutral)
        setTotalNeutral(updatedNeutral)
        setTotal(updatedNeutral+good+bad)
        console.log('neutral after increase', updatedNeutral)
        const updatedTotal = updatedNeutral+good+bad
        const avgGood = good/updatedTotal *100
        setPositive(avgGood)
        const avg = (good-bad)/updatedTotal
        setAverage(avg)
    }
    const handleBadClicks = ()=>{
        console.log('bad before increase', bad)
        const updatedBad = bad+1
        setBad(updatedBad)
        setTotalBad(updatedBad)
        setTotal(updatedBad+good+neutral)
        const updatedTotal = good+neutral+updatedBad
        const avgGood = good/updatedTotal *100
        setPositive(avgGood)
        const avg = (good-updatedBad)/updatedTotal
        setAverage(avg)
        console.log('bad after increase', updatedBad)
    }

    return (
        <div>
            <h1>Give Feedback</h1>
            <button onClick={handleGoodClicks}>good</button>
            <button onClick={handleNeutralClicks}>neutral</button>
            <button onClick={handleBadClicks}>bad</button>
            <h1>Statistics</h1>
            <p>Good:{totalGood}</p>
            <p>Neutral:{totalNeutral}</p>
            <p>Bad:{totalBad}</p>
            <p>all:{total}</p>
            <p>Average: {average}</p>
            <p>Positive: {positive}%</p>
        </div>
    )
}

export default App


