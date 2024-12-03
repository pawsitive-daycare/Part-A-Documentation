import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import "./Navbar.css";


function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="navbar">
            <a href="#home" className="logo">
                <img src={logo} alt="PAWsitive Daycare Logo"
                style={{height: "40px", marginRight: "10px"}}/>PAWsitive Daycare
            </a>
            
            <nav className={`nav-links ${menuOpen ? "mobile" : ""}`}>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
                <div className="nav-button">
                    <button className="login-btn">
                        <span className="login-text">Log In</span>
                    </button>
                </div>
            </nav>
            <button className="hamburger-menu" onClick={toggleMenu}>
                {menuOpen ? "✖" : "☰"}
            </button>
        </header>
    );
}

export default Navbar