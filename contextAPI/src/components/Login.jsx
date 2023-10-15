// here we send data to apis

import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = useState("");
  
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(userName,password)
  };


  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "12px",
        gap: "9px",
        margin: "12px",
      }}
    >
      <h2>Login</h2>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="UserName"
      />
      <input
        type="password"
        name="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Passwored"
      />

      <input type="submit" onClick={handleSubmit} value="Submit" />
    </div>
  );
};

export default Login;
