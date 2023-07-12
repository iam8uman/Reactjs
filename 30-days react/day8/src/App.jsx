import "./App.css";
// import Datafetching from "./components/Datafetching";
import DataFetchTwo from "./components/DataFetchTwo";
// import Countreducerhook from './components/Countreducerhook'
// import CounterTwo from './components/CounterTwo'
// import React, { useReducer } from "react";
// import ComA from "./components/ComA";
// import ComB from "./components/ComB";
// import ComD from "./components/ComD";

// export const Context = React.createContext();

// const initialState = 0;
// const reducer = (state = initialState, action) => {
//   switch (action) {
//     case "Increment":
//       return state + 1;
//     case "Decrement":
//       return state - 1;
//     case "Reset":
//       return initialState;

//     default:
//       return state;
//   }
// };

function App() {
  // const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      {/* <Context.Provider value={{ Statecount: count, Dispatchcount: dispatch }}> */}
        {/* <div className="bg-purple-500 m-7 p-6 rounded-md text-3xl text-white font-extralight">Hello nepal</div> */}
        {/* <Countreducerhook/> */}
        {/* <CounterTwo/> */}
        {/* Count is: {count}
        <ComA />
        <ComB />
        <ComD />
      </Context.Provider> */}
      {/* <Datafetching/> */}
      <DataFetchTwo/>
    </>
  );
}

export default App;
