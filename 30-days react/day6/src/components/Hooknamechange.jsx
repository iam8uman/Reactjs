import React, { useState } from "react";

const Hooknamechange = () => {
  const [name, setName] = useState({ firstname: "", lastname: "" });

//   here we can do this using a function 
const firstnameSet=(e)=>{
    setName({firstname:e.target.value});
}
const lastnameSet=()=>{
    setName({lastname:e.target.value});
}



  return (
    <div className="flex-shrink justify-center">
      <input type="text" name="fname" id="fname" className="border-2 border-sky-500" value={name.firstname} onChange={e=>setName( {...name,firstname:e.target.value})}/>
      <input type="text" name="lname" id="lname" className="border-2 border-sky-500" value={name.lastname} onChange={e=>setName({...name,lastname:e.target.value})} />
      <h2>Your First name is ={name.firstname}</h2>
      <h2>Your Last name is ={name.lastname}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </div>
  );
};

export default Hooknamechange;
