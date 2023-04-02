import React, { useState } from 'react';
import './Layout.css'
import { Outlet, NavLink } from "react-router-dom";
import logo from '../../images/logo.png'

const Layout = () => {
    const [expanded, setExpanded] = useState(false)

    return (
        <>
            <nav>
                <input id="toggle" type="checkbox" onClick={() => {
                    setExpanded(!expanded)
                }} />

                <label htmlFor="toggle" className="hamburger">
                    <div className="top-bun"></div>
                    <div className="meat"></div>
                    <div className="bottom-bun"></div>
                </label>
                <div className='brand'>
                    <a href='/'><img className='logo' src={logo} alt='logo' />Let's Speak Up</a>
                </div>
                <ul className={expanded ? "expanded" : ""}>
                    <li>
                        <NavLink to="/" className='nav-links'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className='nav-links'>About</NavLink>
                    </li>
                    <li>
                        <a href="#contact" className='nav-links'>Contact Us</a>
                    </li>
                </ul>
            </nav>


            <Outlet />
        </>
    )
};

export default Layout;