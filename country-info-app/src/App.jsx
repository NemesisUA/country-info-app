import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState(0)

  useEffect(() => {
    fetch('/api')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [])

  return (
    <h1>
      Hello from React frontend!
      <span>{data}</span>
    </h1>
  )
}

export default App
