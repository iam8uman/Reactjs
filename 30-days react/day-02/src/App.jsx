import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import ComponentC from "./components/ComponentC";
import React from "react";

// export const Context = React.createContext();
export const ChannelContext = React.createContext();

export const Context = React.createContext();


function App() {
  return (
    <>
      <Navbar />
      <Main />
      <div className="btn button-primary p-4 m-4 font-mono bg-black text-3xl rounded-md border-purple-500 border-2 text-white">
        Hello World!!!
      </div>
      <Context.Provider value={"SumanTheProgrammer"}>
        <ChannelContext.Provider value={"Why Suman Code?"}>
          <ComponentC />
        </ChannelContext.Provider>
      </Context.Provider>
    </>
  );
}

export default App;
