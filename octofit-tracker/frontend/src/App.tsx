import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>🐙 OctoFit Tracker</h1>
        <p>Build your fitness journey with GitHub Copilot Agent Mode</p>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Count: {count}
        </button>
      </div>
    </>
  )
}

export default App
