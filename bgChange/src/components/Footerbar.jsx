import React, { useState } from "react";

const Footerbar = () => {
  const [color, setColor] = useState("white");

  const bgChange = (color) => {
    setColor(color);
  };

  return (
    <>
      <div className={`mainbody bg-${color}-700 h-96 w-96`} >
        <div className="bg-slate-600  btn-wrapper m-5 p-5 fixed bottom-10 inset-x-9 flex flex-wrap justify-center">
          <button className="bg-red-700 rounded-xl mx-5" onClick={() => bgChange("red")}>
            Red
          </button>
          <button className="bg-purple-700 rounded-xl mx-5" onClick={() => bgChange("purple")}>
            Purple
          </button>
          <button className="bg-green-700 rounded-xl mx-5" onClick={() => bgChange("green")}>
            Green
          </button>
          <button className="bg-blue-700 rounded-xl mx-5" onClick={() => bgChange("blue")}>
            Blue
          </button>
        </div>
      </div>
    </>
  );
};

export default Footerbar;
