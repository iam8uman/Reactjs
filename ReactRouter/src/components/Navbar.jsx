// import React from 'react'
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="header bg-slate-700 text-white p-2">
        <nav className="nav flex justify-around">
          <div className="logo flex justify-between ">
            <img src={logo} alt="" className="h-12 w-12 rounded-full" />
            <h2 className=" p-1 text-3xl font-bold">WSC?</h2>
          </div>

          <div className="navlinks ">
            <ul className="flex justify-between">
              <li className="p-2">
                <NavLink
                  to="/"
                  className={({ isPending }) => {
                    isPending ? "text-orange-700" : "";
                  }}
                >
                  Home
                </NavLink>{" "}
              </li>
              <li className="p-2">
                <NavLink
                  to="about"
                  className={({ isActive }) =>
                    isActive ? "text-orange-600" : ""
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="p-2">
                <NavLink
                  to="contact"
                  className={({ isActive }) =>
                    isActive ? "text-orange-600" : ""
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li className="p-2">
                <NavLink
                  to={`profile`}
                  className={({ isActive }) =>
                    isActive ? "text-orange-600" : ""
                  }
                >
                  Profile
                </NavLink>
              </li>
              <li className="p-2">
                <NavLink
                  to={`user/:id`}
                  className={({ isActive }) =>
                    isActive ? "text-orange-600" : ""
                  }
                >
                  User
                </NavLink>
              </li>
              <li className="p-2">
                <NavLink
                  to={`github`}
                  className={({ isActive }) =>
                    isActive ? "text-orange-600" : ""
                  }
                >
                  Github
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="btn ">
            <button
              className=" px-5 py-1 text-2xl
                 rounded-md border-orange-100 border-2 hover:bg-slate-100 hover:text-black"
            >
              <Link to={`/`}>Login</Link>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
