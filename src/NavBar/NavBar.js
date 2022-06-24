import React from "react";
import './navbar.css';

const NavBar = () => {
    return(
        <div className="centertop">
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#aboutme">About Me</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        </div>
    )
}

export default NavBar;