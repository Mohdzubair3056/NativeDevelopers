import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <h1 class="logo">Hey<span>Lead</span></h1>
            <div className="navLinks">
                <NavLink activeClassName="linkActive" className="link" to="/">Home</NavLink>
                <NavLink className="link" to="/services">Services</NavLink>
                <NavLink className="link" to="/about">About</NavLink>
                <NavLink className="link" to="/contact">Contact</NavLink>
            </div>
            <NavLink className="login" to="/login">Login</NavLink>
         </div>
    )
}

export default Header
