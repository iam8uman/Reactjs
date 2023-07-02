import Hookcounter from "./components/Hookcounter"
import { useState } from "react"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="py-2 font-thin text-lg bg-gray-950 text-yellow-200"> hello world </div>
     <Hookcounter/>
    </>
  )
}

export default App
