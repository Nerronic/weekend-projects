import React, { useState } from "react";
import { Link, } from 'react-router-dom';


const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <a href="#" className="nav-logo" color="purple"></a>
        <div >
          <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/latestPosts">Latest Posts</Link>
            </li>
            <li>
              <Link to="/archive">Archive</Link>
            </li>
          </ul>
        </div>
      </nav>
     
    </header>
  );
};

export default Nav;