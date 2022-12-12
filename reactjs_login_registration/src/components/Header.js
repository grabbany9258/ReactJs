import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    // New navbar start
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            React js Login Registration Auth
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/login"
                  className="nav-link"
                  aria-current="page"
                  href="#"
                >
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/register"
                  className="nav-link"
                  aria-current="page"
                  href="#"
                >
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/dashboard"
                  className="nav-link"
                  aria-current="page"
                  href="#"
                >
                  Dashboard
                </Link>
              </li>
            </ul>
            <span className="navbar-text">
              Navbar text with an inline element
            </span>
          </div>
        </div>
      </nav>
    </div>
  );

  //     <div>
  //     <h1>This is header Page</h1>
  //     <nav>
  //       <Link to="/" className="nav-link active">
  //         Home
  //       </Link>

  //       <Link to="/login" className="nav-link active">
  //         Login
  //       </Link>
  //       <Link to="/register" className="nav-link active">
  //         Register
  //       </Link>
  //     </nav>
  //   </div>
  // );

  // New navbar end
}
