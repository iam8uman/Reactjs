import React, { useEffect, useState } from "react";

const TitlecountUpwithFunc = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const titleCountup = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("updating the doct from useEffect");
    document.title = `you enter ${count} times`;
  },[count]);

  return (
    <div>
      <input type="text" className="border-blue-600 border-2 m-4 p-4 font-mono text-3xl" value={name} onChange={(e)=>{setName(e.target.value)}} />
      <button
        className="btn btn-primary p-4 m-4 text-3xl text-black bg-purple-500 border-2 border-black rounded-md"
        onClick={titleCountup}
      >
        Titile {count} Up
      </button>
      Hello world
    </div>
  );
};

export default TitlecountUpwithFunc;
