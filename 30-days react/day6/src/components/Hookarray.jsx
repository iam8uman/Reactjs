import React, { useState } from "react";

const Hookarray = () => {
  // const arr=[2,3,3,4,5,5];
  // const display=arr.map((ele)=>{
  //     <li key={ele}>{ele}</li>
  // })

  const [items, setItems] = useState([]);

  const itemsList=items.map((item)=>{
    <li key={item.id}>{item.value}</li>
  })

  return (
    <div>
        <button className="m-4 p-4 font-mono text-4xl bg-slate-800 text-lime-50 rounded-md sm:text-sm md:bg-red-400 lg:bg-purple-400">Add a number</button>
      {/* <ul>
        {items.map((items) => {
          <li key={items.id}>{items.value}</li>;
        })}
      </ul> */}
      <ul>{itemsList}</ul>
    </div>
  );
};

export default Hookarray;
