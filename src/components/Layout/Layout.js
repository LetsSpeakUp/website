import React, { useState } from 'react';
import './Layout.css'
import { Outlet, NavLink } from "react-router-dom";
import logo from '../../images/logo.png'
import { FaPhoneAlt } from 'react-icons/fa'

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
                        <NavLink to="/" className='nav-links' activeClassName='active'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className='nav-links' activeClassName='active'>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className='nav-links' activeClassName='active'>Contact Us</NavLink>
                    </li>
                </ul>
            </nav>

            <a href='#contact'>
                <div className='floating-button'>
                    Contact us <span className='wave'><FaPhoneAlt /></span>
                </div>
            </a>


            <Outlet />
        </>
    )
};

export default Layout;