import { useState, useEffect } from "react";

const everySecCount = () => {
  const [count, setCount] = useState(0);

  const Increase = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    const interval = setInterval(Increase, 1000);
    return()=>{
        clearInterval(interval)
    }
  }, []);

  return (
    <div>
      <div className="button p-4 m-4 text-yellow-400 text-3xl">
        {" "}
        Count up!{count}{" "}
      </div>
    </div>
  );
};

export default everySecCount;
