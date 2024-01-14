import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setGoodValue = good => {
    good = good +1
    console.log('value now', good)
    setGood(good)
  }
  const setNeutralValue = setNeutral => {
    console.log('value now', neutral)
    setNeutral(neutral)
  }
  const setBadValue = setBad => {
    console.log('value now', bad)
    setBad(bad)
  }




  return (
    <div>
        <h1>give feedback</h1>
        <button onClick={setGoodValue}>good</button>
        <button onClick={setNeutralValue}>neutral</button>
        <button onClick={setBadValue}>bad</button>
    </div>
  )
}

export default App