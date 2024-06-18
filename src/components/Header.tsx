import React from "react";

const Header: React.FC = () => {
  return (
    <div className="header bg-light p-2 d-flex flex-row mb-3 justify-content-between">
      <h1 className="title fs-3">EFC</h1>
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div>
        <button className="btn btn-dark">Contact Now</button>
      </div>
    </div>
  );
};

export default Header;
