import { useReducer } from "react";

const initialState = {
    firstCounter:0
};

const reduce = (state, action) => {
  switch (action.type) {
    case "Increment":
      return {firstCounter: state.firstCounter + action.value};
    case "Decrement":
      return {firstCounter: state.firstCounter - action.value};
    case "Reset":
      return initialState;

    default:
      return state;
  }
};

const Countreducerhook = () => {
  const [count, dispatch] = useReducer(reduce, initialState);

  return (
    <div className="border-2 border-blue-300 ">
      <div className="m-3 p-3 bg-purple-400 border-2 border--state-500 rounded-md text-2xl text-center">Count is  {count.firstCounter} </div>
      <div className="box flex justify-center m-5 p-3 ">
        <div className="m-3 p-3 bg-amber-400 border-2 border-purple-500 rounded-md text-2xl" onClick={() => dispatch({type:"Increment",value:1})}>Increment</div>
        <div className="m-3 p-3 bg-amber-400 border-2 border-purple-500 rounded-md text-2xl" onClick={() => dispatch({type:"Decrement", value:1})}>Decrement</div>
        <div className="m-3 p-3 bg-amber-400 border-2 border-purple-500 rounded-md text-2xl" onClick={() => dispatch({type:"Increment",value:5})}>Increment 5</div>
        <div className="m-3 p-3 bg-amber-400 border-2 border-purple-500 rounded-md text-2xl" onClick={() => dispatch({type:"Decrement", value:5})}>Decrement 5</div>
        <div className="m-3 p-3 bg-amber-400 border-2 border-purple-500 rounded-md text-2xl" onClick={() => dispatch({type:"Reset"})}>Reset</div>
      </div>
    </div>
  );
};

export default Countreducerhook;
