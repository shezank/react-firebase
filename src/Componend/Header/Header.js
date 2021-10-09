import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <Link to="Home">Home</Link>
            <Link to="Login">Login</Link>
            <Link to="Register">Register</Link>
        </div>
    );
};

export default Header;