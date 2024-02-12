import React, { useState } from "react";
import { Link, Routes, Route } from 'react-router-dom';
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
              <Link to="/">Home</Link>
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
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/latestPosts" component={LatestPosts} />
        <Route path="/archive" component={Archive} />
      </Routes>
    </header>
  );
};

export default Nav;