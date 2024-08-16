import React from 'react'
import { useState } from 'react';
import logo from '../image/logo.png'
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className='navbar'>
            <div className='container'>
                <div className='container-navbar'>
                    <ul className='navbar-left'>
                        <div className='navbar-left-img'>
                            <img src={logo} />
                        </div>
                    </ul>
                    <div className="menu"
                        onClick={() => setMenuOpen(!menuOpen)}  >
                        <span></span>
                        <span></span>
                        <span></span>
                      
                    </div>
                
                    <ul className={menuOpen ? "open" : "navbar-right"}>

                        <li>
                            <a href=''>Home</a>
                        </li>
                        <li>
                            <a href=''>Service</a>
                        </li>
                        <li>
                            <a href=''>About</a>
                        </li>
                        <li>
                            <a href=''>Skills</a>
                        </li>
                        <li>
                            <a href=''>Portfolio</a>
                        </li>

                    </ul>



                </div>
            </div>

        </div>
    )
}

export default Navbar;