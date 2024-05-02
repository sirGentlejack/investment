import cirkleLogo from "../images/CirkleLogoBlue1.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav
        className="navbar fixed-top navbar-expand-lg bg-body-tertiary navbar2"
        data-bs-theme="dark"
      >
        <div className="container-fluid ">
          <a className="navbar-brand fs-4" href="#">
            <img
              src={cirkleLogo}
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top mx-2"
            /> 
            Investment
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page" href="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About us
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Investment plan
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Simple Investment X
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Standard Investment XX
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Premium Investment XXX
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link" href="#">
                  Contact us
                </Link>
              </li>
              <div className="dropdown">
                <button
                  type="button"
                  className="btn btn-primary dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-bs-auto-close="outside"
                >
                  Sign-in
                </button>
                <form className="dropdown-menu p-4 sign-in ">
                  <div className="mb-3">
                    <label
                      htmlFor="exampleDropdownFormEmail2"
                      className="form-label"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleDropdownFormEmail2"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleDropdownFormPassword2"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleDropdownFormPassword2"
                      placeholder="Password"
                    />
                  </div>
                  <div className="mb-3">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="dropdownCheck2"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="dropdownCheck2"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Sign in
                  </button>
                </form>
              </div>
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
    </div>
  );
}

export default Navbar;
