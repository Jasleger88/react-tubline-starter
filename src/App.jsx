import React from "react"
import './App.css'

function App() {

  const [lines, setLines] = React.useState([])
  React.useEffect(() => {
    async function fetchLines() {
      const resp = await fetch('https://api.tfl.gov.uk/line/mode/tube/status')
      const lines = await resp.json()
      setLines(lines)
    }
    fetchLines()
  }, [])
  console.log("lines", lines)


return <>
  <div>
  <h1>React Tubeline Challenge</h1>
  <div>
    {lines.map((line, index) => {
      return <li key={index}>{line.name} - {line.lineStatuses[0].statusSeverityDescription}</li>
    })}
    

    </div>
  </div>

</>

}

export default App

