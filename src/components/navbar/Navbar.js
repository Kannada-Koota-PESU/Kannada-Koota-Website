import React, { useState } from "react";
import "./Navbar.css";
import logo from "./logo.jpg";


function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
    setIsClicked(!isClicked);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-club">
          <div>
            <img className="img1" src={logo} alt="My Logo" />
          </div>
          <div className="club-name">
            <h3 className="cn1">ಕನ್ನಡ ಕೂಟ</h3>
            <label className="cn2">ಪಿಇಎಸ್ ವಿಶ್ವವಿದ್ಯಾಲಯ</label>
          </div>
        </div>

        <ul className={`navbar-menu ${isActive ? "active" : ""}`}>
          <li className="navbar-item">
            <a href="#">ಮುಖಪುಟ</a>
          </li>
          <li className="navbar-item">
            <a href="#">ಕೂಟದ ಬಗ್ಗೆ</a>
          </li>
          <li className="navbar-item">
            <a href="#">ಕಾರ್ಯಕ್ರಮಗಳು</a>
          </li>
          <li className="navbar-item">
            <a href="#">ಸಂಪರ್ಕ</a>
          </li>
        </ul>

        <div
          className={`navbar-toggle ${isClicked ? "clicked" : ""}`}
          onClick={toggleMenu}
        >
          <span className="navbar-toggle-icon"></span>
          <span className="navbar-toggle-icon"></span>
          <span className="navbar-toggle-icon"></span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
