import  { useContext } from "react";
import { Context } from "../App";

const ComA = () => {
  const Contexttt = useContext(Context);

  return(

    <div className="border-2 border-blue-300 ">
      <div className="m-3 p-3 bg-purple-400 border-2 border--state-500 rounded-md text-2xl text-center">Count is  {Contexttt.Statecount} </div>
      <div className="box flex justify-center m-5 p-3 ">
        <div className="m-3 p-3 bg-amber-400 border-2 border-purple-500 rounded-md text-2xl" onClick={() => Contexttt.Dispatchcount("Increment")}>Increment</div>
        <div className="m-3 p-3 bg-amber-400 border-2 border-purple-500 rounded-md text-2xl" onClick={() => Contexttt.Dispatchcount("Decrement")}>Decrement</div>
        <div className="m-3 p-3 bg-amber-400 border-2 border-purple-500 rounded-md text-2xl" onClick={() => Contexttt.Dispatchcount("Reset")}>Reset</div>
      </div>
    </div>
    )
};

export default ComA;
