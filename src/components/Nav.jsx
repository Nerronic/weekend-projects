import React, { useState } from "react";
import { Link, Route } from "react-router-dom";
import About from "../components/About";
import Archive from "../components/Archive.jsx";
import Home from "../components/Home.jsx";
import  LatestPosts  from "./LatestPosts.jsx";
//Toggle button below

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  ///nav items
  return (
      
    <nav className={`navbar ${menuOpen ? "open" : ""}`}>
      <div className='menu-icon' onClick={toggleMenu}>
        <div className='bar'></div>
        <div className='bar'></div>
        <div className='bar'></div>
      </div>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/latestPosts">Latest Posts</Link></li>
          <li><Link to="/archive">Archive</Link></li>
        </ul>
      </div>
    </nav>
   
);
}


export default Nav;
