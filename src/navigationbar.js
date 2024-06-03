import React from 'react';
import './navigationbar.css';

const NavigationBar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-menu">
                <li className="nav-item"><a href="/">Main page</a></li>
                <li className="nav-item"><a href="/hakkimizda">About Us</a></li>
                <li className="nav-item"><a href="/urunler">Order Now!</a></li>
                <li className="nav-item"><a href="/iletisim">Contact Us</a></li>
            </ul>
        </nav>
    );
}

export default NavigationBar;