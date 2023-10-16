import "./App.css";
import ComA from "./components/ComA";
import Mycontexttt from "./context/Mycontexttt";

function App() {
  return (
    <>
      <Mycontexttt.Provider value={"Upasana Devkota"}>
        <ComA />
        Hii
      </Mycontexttt.Provider>
    </>
  );
}

export default App;
