import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import Logo from '../../Images/logo-black.png';
import './Nav.css';

const Nav = () => {
    const [hideMenu, setHideMenu] = useState(true);

    return (
        <div className="nav-container">
            <nav className="nav">
                <Link to='/' ><img className="nav__brand" src={Logo} alt="Logo" /></Link>
                <div className={`nav__phone ${hideMenu ? 'hide' : ''}`}>
                    <i class="fas fa-phone-alt icon"></i> +88 0177 7677 877
                </div>
                <div onClick={() => setHideMenu(!hideMenu)} className={`nav__links ${hideMenu ? 'hide' : ''}`}>
                    <NavLink to='/' >Home</NavLink>
                    <NavLink to='/a' >Home</NavLink>
                    <NavLink to='/b' >Home</NavLink>
                    <NavLink to='/login' >Login</NavLink>
                    <NavLink to='/signup' >Sign up</NavLink>
                </div>
            </nav>
            <div onClick={() => setHideMenu(!hideMenu)} className="nav__menu-toggle">
                <i class="fas fa-bars"></i>
            </div>
        </div>
    );
};

export default Nav;