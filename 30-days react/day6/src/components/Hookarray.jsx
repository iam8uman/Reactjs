import React, { useState } from "react";

const Hookarray = () => {
  // const arr=[2,3,3,4,5,5];
  // const display=arr.map((ele)=>{
  //     <li key={ele}>{ele}</li>
  // })

  const [items, setItems] = useState([]);

  const additem = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1, //Math.floor(Math.random()*10) yesle 0-10 samma ko random number input linxa
      },
    ]);
    console.log(items)
  };

  return (
    <div>
      <button
        className="m-4 p-4 font-mono text-4xl bg-slate-800 text-lime-50 rounded-md sm:text-sm md:bg-red-400 lg:bg-purple-400"
        onClick={additem}
      >
        Add a number
      </button>
      <h2>
        <ul>
          {items.map((it,id) =>
            <li key={it.id}>{id} and it's value {it.value} </li>
          )}
        </ul>
      </h2>
    </div>
  );
};

export default Hookarray;

