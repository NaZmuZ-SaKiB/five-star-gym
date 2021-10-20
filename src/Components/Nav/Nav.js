import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuthManager from '../../Hooks/useAuthManager';

import Logo from '../../Images/logo-black.png';
import { Context } from '../ContextProvider/ContextProvider';
import './Nav.css';

const Nav = () => {
    const [hideMenu, setHideMenu] = useState(true);

    const [context] = useContext(Context);

    const { logout } = useAuthManager();

    return (
        <div className="nav-container">
            <nav className="nav">
                <Link to='/' ><img className="nav__brand" src={Logo} alt="Logo" /></Link>
                <div className={`nav__phone ${hideMenu ? 'hide' : ''}`}>
                    <i className="fas fa-phone-alt icon"></i> +88 0177 7677 877
                </div>
                <div onClick={() => setHideMenu(!hideMenu)} className={`nav__links ${hideMenu ? 'hide' : ''}`}>
                    <NavLink to='/home' >Home</NavLink>
                    <NavLink to='/trainers' >Trainers</NavLink>
                    <NavLink to='/enroll' >Enroll</NavLink>
                    <NavLink to='/appoinment' >Appoinment</NavLink>
                    {!context && <NavLink to='/login' >Login</NavLink>}
                    {!context && <NavLink to='/signup' >Sign up</NavLink>}
                    {context && <a onClick={logout}>{context.displayName && context.displayName.split(' ')[0]} <i className="fas fa-sign-out-alt"></i></a>}
                </div>
            </nav>
            <div onClick={() => setHideMenu(!hideMenu)} className="nav__menu-toggle">
                <i className="fas fa-bars"></i>
            </div>
        </div>
    );
};

export default Nav;