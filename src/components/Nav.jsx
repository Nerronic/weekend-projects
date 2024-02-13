import React, { useState } from "react";
import { Link, Route, Routes } from 'react-router-dom';
import About from "./About";
import Archive from "./Archive";
import Home from "./Home";
import LatestPosts from "./LatestPosts";

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
        <div>
          <ul>
            <li>
              <Link to="./Home.jsx">Home</Link>
            </li>
            <li>
              <Link to="./About.jsx">About</Link>
            </li>
            <li>
              <Link to="./LatestPosts.jsx">Latest Posts</Link>
            </li>
            <li>
              <Link to="./Archive.jsx">Archive</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route exact path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/latestPosts" component={LatestPosts} />
        <Route path="/archive" component={Archive} />
      </Routes>
    </header>
  );
};

export default Nav;