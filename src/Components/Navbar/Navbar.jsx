import React, { useState } from 'react'
import './Navbar.css'
import menuIcon from "../../assets/menuicon.png";
import closeIcon from "../../assets/closeicon.png"

function Navbar() {

    const [menuOpen , setMenuOpen] = useState(false);

  return (
    <nav className='navbar'>
        <a className='title' href="/">Portfolio</a>
        <div className='menu'>
        <img src={
            menuOpen 
            ?closeIcon 
            :menuIcon 
            }
            className='menuBtn iconSize' 
            onClick={()=>{
                setMenuOpen(!menuOpen);
            }}/>

        
        <ul className={`menuItems ${menuOpen && 'menuOpen'}`} 
        onClick={()=>{
            setMenuOpen(false);
        }}>
            <li>
                <a href="/#about">About Me</a>
            </li>
            <li>
                <a href="/#skills">Skills</a>
            </li>
            <li>
                <a href="/#project">Projects</a>
            </li>
            <li>
                <a href="/#contact">Contact </a>
            </li>
        </ul>
        </div>
    </nav>
  )
}

export default Navbar