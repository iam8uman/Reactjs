import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-sm  bg-black">
        <div className="container-fluid">
          <a className="navbar-brand text-white !font-extrabold text-lg" href="abc.com">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="abc.comnavbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="abc.com"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="abc.com">
                  {props.about}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="abc.com">
                  Contact
                </a>
              </li>

              <li className="nav-">
                <a className="nav-link disabled text-white" href="abc.com">
                  FAQs
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search Anything...!"
                aria-label="Search"
              />
              <button className="btn btn-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = { title: PropTypes.string.isRequired, about: PropTypes.string };

Navbar.defaultProps={
  title:'Set title Here',
  about:'Set About Text Here'
}
