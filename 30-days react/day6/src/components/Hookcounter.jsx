import React from "react";

import { useState } from "react";

const Hookcounter = () => {
  const [count, setCount] = useState(0);
  console.log(count);

  const Increment = () => {
    setCount(count + 1);
  };
  return (
    <div className="flex align-middle justify-center">
      <button
        className="flex align-middle p-5 m-7 bg-purple-500 rounded-lg text-center text-9xl"
        onClick={Increment}
      >
        Count UP {count}
      </button>
    </div>
  );
};

export default Hookcounter;
