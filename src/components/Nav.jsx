import React, {useState} from 'react'

//Toggle button below

const Nav = () => {
  const [menuOpen,setMenuOpen] = useState(false);
  const toggleMenu =() =>{
    setMenuOpen(!menuOpen)
  }



  ///nav items
  return (
    <nav className='nav-bar'>

<div className='menu-icon' onClick={toggleMenu}>
  <div className='bar'></div>
  <div className='bar'></div>
  <div className='bar'></div>
</div>
    <div>
      <ul>
        <li> <a href='/'>Home </a></li>
        <li> <a href='./About'>About </a></li>
        <li> <a href='./LatestPosts'>Latest Posts </a></li>
        <li> <a href='./Archive'>Archive </a></li>
        
    </ul>
    
    </div>
    </nav>
  )
}

export default Nav