import React from "react";
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="Header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/home">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" to="/home">
                Home
              </Link>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
