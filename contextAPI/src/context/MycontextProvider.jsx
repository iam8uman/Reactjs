// Create a parent component that wraps child components with a Provider

import { useState } from "react";
import { Mycontexttt } from "./Mycontexttt";
import MyComponent from "../components/Footer";

function Footer() {
  const [text, setText] = useState("");

  return (
    <div>
      <Mycontexttt.Provider value={{ text, setText }}>
        <MyComponent />
      </Mycontexttt.Provider>
    </div>
  );
}

export default Footer;