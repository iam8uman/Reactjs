import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <>
      <UserContextProvider>
        <Login />
        <Profile />
        Hello world
      </UserContextProvider>
    </>
  );
}

export default App;
