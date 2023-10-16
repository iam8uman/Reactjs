// import "./App.css";
// import ComA from "./components/ComA";
// import Mycontexttt from "./context/Mycontexttt";

// function App() {
//   return (
//     <>
//       <Mycontexttt.Provider value={"Upasana Devkota"}>
//         <ComA />
//         Hii
//       </Mycontexttt.Provider>
//     </>
//   );
// }

// export default App;

// import React from 'react'
import { useState } from "react"
import ComA from "./components/ComA"
import Mycontexttt from "./context/Mycontexttt"

const App = () => {
  const [name,setName]=useState("UPI")
  return (
    <>
    <Mycontexttt.Provider value={{name,setName}}>

      <ComA />
    </Mycontexttt.Provider>
      
    </>
  )
}

export default App
