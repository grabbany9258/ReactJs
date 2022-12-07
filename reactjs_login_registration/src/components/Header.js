import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <h1>This is header Page</h1>
      <nav>
        <Link to="/" className="nav-link active">
          Home
        </Link>

        <Link to="/login" className="nav-link active">
          Login
        </Link>
        <Link to="/register" className="nav-link active">
          Register
        </Link>
      </nav>
    </div>
  );
}
