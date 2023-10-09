// import Footerbar from "./components/Footerbar"
import { useState } from "react";

function App() {
  const [color, setColor] = useState("red");

  const bgChange = (c) => {
    setColor(c);
  };

  return (
    <>
      {/* <Footerbar /> */}

      <div className={`mainbody bg-${color}-700 h-screen w-screen`}>
        <div className="btnList flex flex-wrap inset-x-10 fixed bottom-10 gap-10 justify-center bg-slate-400 p-5 rounded-lg">
          <button className="bg-red-700" onClick={() => bgChange("red")}>
            Red
          </button>
          <button className="bg-purple-700" onClick={() => bgChange("purple")}>
            Purple
          </button>
          <button className="bg-green-700" onClick={() => bgChange("green")}>
            Green
          </button>
          <button className="bg-yellow-700" onClick={() => bgChange("yellow")}>
            Yellow
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
