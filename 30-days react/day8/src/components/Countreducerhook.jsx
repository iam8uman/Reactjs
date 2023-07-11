import { useReducer } from "react";

const initialState = 0;

const reduce = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 1;
    case "Decrement":
      return state - 1;
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
      <div className="m-3 p-3 bg-purple-400 border-2 border--state-500 rounded-md text-2xl text-center">Count is  {count} </div>
      <div className="box flex justify-center m-5 p-3 ">
        <div className="m-3 p-3 bg-amber-400 border-2 border-purple-500 rounded-md text-2xl" onClick={() => dispatch("Increment")}>Increment</div>
        <div className="m-3 p-3 bg-amber-400 border-2 border-purple-500 rounded-md text-2xl" onClick={() => dispatch("Decrement")}>Decrement</div>
        <div className="m-3 p-3 bg-amber-400 border-2 border-purple-500 rounded-md text-2xl" onClick={() => dispatch("Reset")}>Reset</div>
      </div>
    </div>
  );
};

export default Countreducerhook;
