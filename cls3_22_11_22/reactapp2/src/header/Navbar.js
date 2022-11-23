import { Link } from "react-router-dom";

function navbar() {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="nav-link active">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link active">
              About us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">
              Contact us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/garage" className="nav-link">
              All Cars
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default navbar;
