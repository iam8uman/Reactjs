import Hookcounter from "./components/Hookcounter"
import { useState } from "react"
import Hookcountertwo from "./components/Hookcountertwo"
import Hooknamechange from "./components/Hooknamechange"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Hookcounter/>
     {/* <Hookcountertwo/> */}
     <Hooknamechange/>
    </>
  )
}

export default App
