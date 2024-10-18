import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [advice, setAdvice] = useState("Please Click Button to Get Advice")
  const [count, setCount] = useState(0)

   let get_advice = async () => {
    let res = await fetch("https://api.adviceslip.com/advice",  { cache: "no-cache" });
    let resp = await res.json();
    setAdvice(resp.slip.advice)
    setCount(count+1)
   }

useEffect(()=>{
  get_advice()
},[])

  return (
    <>
    <div className="container">
      <div className="advice">{advice}</div>
      <div className="center">
      <button onClick={get_advice}>Get Advice</button>
      </div>
      <div className="n-advice">You have read {count} pieces of advice</div>
    </div>
    </>
  )
}

export default App
