import Datafetchfromapi from "./components/Datafetchfromapi"
import EverySecCount from "./components/EverySecCount"


const App = () => {
  return (
    <div className='p-2 m-4 font-mono bg-purple-500 text-3xl'>
      <EverySecCount/>
      <Datafetchfromapi/>
    </div>
  )
}

export default App
