import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div className='header-container'>
            <img src = {logo} alt="website logo" />
            <nav className='nav-link'>
                <a href="/Shop">Shop</a>
                <a href="/Orders">Orders</a>
                <a href="/Inventory">Inventory</a>
                <a href="/About">About</a>
            </nav>
        </div>
    );
};

export default Header;