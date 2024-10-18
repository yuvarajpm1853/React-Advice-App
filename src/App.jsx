import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">
      <div className="advice">Be strong . Have a nice day</div>
      <div className="center">
      <button>Get Advice</button>
      </div>
      <div className="n-advice">You have read pieces of advice</div>
    </div>
    </>
  )
}

export default App
