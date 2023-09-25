import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// import Root from "./routes/Root";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import User from "./components/User";
import Profile from './components/Profile'
// import GithubFetch from "./components/GithubFetch.jsx"; //fetch garera garda
import GithubLoader,{ githubInfo } from "./components/GithubLoader.jsx"; // loader user garera 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />,
      <Route path="about" element={<About />} />,
      <Route path="profile" element={<Profile />} />,
      <Route path="contact" element={<Contact />} />,
      <Route path="user" element={<User />} />
      <Route path="github" element={<GithubLoader />} loader={githubInfo} />
      <Route path="user/:id" element={<User />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
