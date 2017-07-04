import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-toggleable-sm navbar-light bg-faded">
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbar-content"
        aria-controls="navbarContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <Link to="/" className="navbar-brand">Cameron's Blog</Link>

      <div className="collapse navbar-collapse" id="navbar-content">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
