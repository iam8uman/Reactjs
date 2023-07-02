import Hookcounter from "./components/Hookcounter"
import { useState } from "react"
import Hookcountertwo from "./components/Hookcountertwo"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Hookcounter/>
     <Hookcountertwo/>
    </>
  )
}

export default App
