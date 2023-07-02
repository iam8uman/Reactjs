import React, { useState } from "react";

const Hookcountertwo = () => {
    const initial=0;
  const [count, setCount] = useState(initial);

  const counterUp = () => {
    setCount(prevCount=>prevCount + 1);
  };
  const counterDown = () => {
    setCount(count - 1);
  };
  const counterReset = () => {
    setCount(count == initial);
  };
  const counterFive=()=>{
    setCount(count+5)
  }

  return (
    <div className="bg-black m-5 p-5">
      <div
        className="counterbutton p-5 m-5 text-4xl text-cyan-50 font-sans"
        onClick={counterUp}
      >
        Counter Up{" "}
      </div>
      <div
        className="counterbutton p-5 m-5 text-4xl  text-cyan-50 font-sans"
        onClick={counterDown}
      >
        Counter Down{" "}
      </div>
      <div
        className="counterbutton p-5 m-5 text-4xl text-cyan-50 font-sans"
        onClick={counterReset}
      >
        Counter Reset{" "}
      </div>
      <div
        className="counterbutton p-5 m-5 text-4xl text-cyan-50 font-sans"
        onClick={counterFive}
      >
        Counter +5{" "}
      </div>
      <div
        className="counterbutton p-5 m-5 text-3xl text-cyan-50 font-sans"
      >
        Count Is {count}
      </div>
      
    </div>
  );
};

export default Hookcountertwo;
