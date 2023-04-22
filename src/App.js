import "./App.css";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-sm  bg-purple-600">
        <div className="container-fluid">
          <a className="navbar-brand" href="abc.com">
            AlphA
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
                  className="nav-link active"
                  aria-current="page"
                  href="abc.com"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="abc.com">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="abc.com">
                  Contact
                </a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link disabled" href="abc.com">
                  FAQs
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* hr part  */}
      <hr />
    </>
  );
}

export default App;
