import DataFetchBestway from "./components/DataFetchBestway"
import EverySecCount from "./components/EverySecCount"


const App = () => {
  return (
    <div className='p-2 m-4 font-mono bg-purple-500 text-3xl'>
      <EverySecCount/>
      {/* <Datafetchfromapi/> all data fetch here  */}
      <DataFetchBestway/>
    </div>
  )
}

export default App
