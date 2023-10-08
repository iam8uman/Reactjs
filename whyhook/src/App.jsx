// import { useState } from "react";
import Card from "./component/Card";

function App() {
  // const [value,setValue]=useState(0);

  // const addValue = () => {
  //   setValue(value+1);
  //   if(value>20)
  //   {
  //     alert("Value is greater than 20");
  //     setValue(20);
  //     return;
  //   }
  //   console.log("value added "+value);
  // }

  // const subValue = () => {
  //   if(value<0)
  //   {
  //     alert("Value is less than 0");
  //     setValue(0);
  //     return;
  //   }
  //   setValue(value-1);
  //   console.log("value sub "+value);
  // }
  return (
    <>
      {/* <div className="mainContainer flex text-white flex-col w-80 rounded-md bg-purple-900">
        <h1 className="bg-slate-400 text-3xl">Why Suman Code?</h1>
        <h2 className="value text-blue-200 text-5xl m-2">Values is = {value} </h2>
        <hr />
        <button className="btn outline-dotted outline-green-400 text-2xl m-3 rounded-md" onClick={addValue}>
          Increase
        </button>
        <button className="btn outline-dotted outline-red-400 text-2xl m-4 rounded-md" onClick={subValue}>Decrease</button>
      </div> */}
      {/* componet card  */}
      <Card name={"Suman"} about={"suman ko kam xaina hai "}  />
      <Card name={"Upasana Devkota"} about={"I can't be more beautiful than thissss"} what={"Love me"} />
    </>
  );
}

export default App;
