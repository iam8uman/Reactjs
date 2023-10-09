import "./App.css";
import { useState, useCallback, useEffect } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [pass, setPass] = useState("");

  const passwordGenerator = useCallback(() => {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let num = "0123456789";
    let sym = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";

    if (numberAllowed) str += num;
    if (charAllowed) str += sym;

    // generate random password
    for (let i = 0; i < length; i++) {
      password += str.charAt(Math.floor(Math.random() * str.length));
    }

    setPass(password);
  }, [length, charAllowed, numberAllowed, setPass]);


  // useEffect use garera tyo password generator function lai call gareko
  useEffect(() => { 
    passwordGenerator();
  }
  , [passwordGenerator,length, charAllowed, numberAllowed]);

  const CopyPass = () => {
    const pass = document.getElementById("text");
    pass.select();
    document.execCommand("copy");
    alert(`Password Copied: ${pass.value}`);
  };

  return (
    <>
      <div className="psGenerator bg-slate-900 m-10 p-10 flex flex-wrap justify-center rounded-xl">
        <div className="title text-2xl bg-purple-700 rounded-md m-5 p-5 px-12 w-full md:text-1xl sm:text-2xl">
          Password Generator
        </div>
        <div className="rowOne">
          <input
            type="text"
            name="text"
            id="text"
            value={pass}
            className="p-3 m-3 text-black bg-white  outline-dashed outline-teal-100 rounded-md"
            placeholder="Password"
            readOnly
          />
          <button
            className="bg-white outline-solid outline-red-300 m-3 p-3 px-6 text-orange-900"
            onClick={CopyPass}
          >
            Copy
          </button>
        </div>
        <div className="btnList text-2xl text-orange-500">
          {/* range select input button */}
          <input
            type="range"
            name="length"
            id="length"
            min={5}
            max={100}
            onChange={(e) => setLength(e.target.value)}
            className=" text-3xl bg-yellow-700  m-5"
            onClick={passwordGenerator}
          />
          <label htmlFor="range">Length {length}</label>
          {/* checkbox input button */}
          <input
            type="checkbox"
            name="number"
            id="number"
            className=" m-5"
            onChange={() => setNumberAllowed((prev) => !prev)}
            onClick={passwordGenerator}
          />
          <label htmlFor="number">Number</label>
          {/* radio input button */}
          <input
            type="checkbox"
            name="isChar"
            id="isChar"
            className="m-5"
            onChange={() => setCharAllowed((prev) => !prev)}
            onClick={passwordGenerator}
          />
          <label htmlFor="isChar">Character</label>
        </div>
      </div>
    </>
  );
}

export default App;
