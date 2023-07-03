import Hookcounter from "./components/Hookcounter"
import { useState } from "react"
import Hookcountertwo from "./components/Hookcountertwo"
import Hooknamechange from "./components/Hooknamechange"
import Hookarray from "./components/Hookarray"
import ClassOne from "./components/Classcountup"
import TitlecountUpwithFunc from "./components/TitlecountUpwithFunc"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Hookcounter/> */}
     {/* <Hookcountertwo/> */}
     {/* <Hooknamechange/> */}
     {/* <Hookarray/> */}
     {/* <ClassOne/> */}
     <TitlecountUpwithFunc/>
    </>
  )
}

export default App
