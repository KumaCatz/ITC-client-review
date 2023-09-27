import React from 'react';
import './NavBar.css'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
          <div className="navbar">
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/signup">Signup</NavLink>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/profile">Profile</NavLink>
            
          </div>
        </nav>
    );
}
 
export default NavBar;