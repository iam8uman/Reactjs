// import React from 'react'
import { useState } from "react";

const Footerbar = () => {
  const [color, setColor] = useState("white");

  return (
    <>
      <div className="mainbody " style={{backgroundColor:"red", height:"100vh"}}>
        <div
          className="bg-slate-600 h-100vh btn-wrapper m-5 p-5 fixed bottom-10 inset-x-9 flex flex-wrap justify-center"
          style={{ backgroundColor: { color } }}
        >
          <button
            className="bg-red-700 rounded-xl  mx-5"
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button className="bg-purple-700 rounded-xl mx-5">Purple</button>
          <button className="bg-green-700 rounded-xl mx-5">Green</button>
          <button className="bg-blue-700 rounded-xl mx-5">Blue</button>
        </div>
      </div>
    </>
  );
};

export default Footerbar;
