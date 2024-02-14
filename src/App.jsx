import { Route, Routes } from 'react-router-dom';
import Archive from "../src/components/ARCHIVE/Archive.jsx";
import Footer from '../src/components/FOOTER/Footer.jsx';
import LatestPosts from "../src/components/LATESTPOSTS/LatestPosts";
import './App.css';
import About from "./components/ABOUT/About.jsx";
import Header from './components/HEADER/Header.jsx';
import Hero from './components/HERO SECTION/Hero.jsx';
import Home from './components/HOME/Home.jsx';
import Nav from "./components/NAV/Nav.jsx";

function App() {
  return (
   
      <>
      <Nav />
      <Hero />
      <Home/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/latestPosts" element={<LatestPosts/>} />
        <Route path="/archive" element={<Archive/>} />
      </Routes>
      <Header />
      <Footer/>
    </>
    
  
  )
}

export default App;