import React from "react";
import styles from "../styles/Header.module.css";

const Header: React.FC = () => {
  return (
    <div
      className={`${styles["sticky-header"]} ${styles["bg-dark"]} p-3 d-flex flex-row mb-3 justify-content-between text-light`}
    >
      <h1 className={`${styles["title"]} fs-3`}>EFC</h1>
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
