import './App.css'
// import custom hook 
import FetchData from './hooks/useFetch'


function App() {

  const [data]=FetchData('https://jsonplaceholder.typicode.com/todos')

  return (
    <>
      <div className="head">
        <h1>Custom Hook</h1>
        <p>Datas={data.title}</p>
       
      </div>



    </>
  )
}

export default App
