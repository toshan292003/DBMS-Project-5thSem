import React from "react";
import './navbar.css';
export default function Navbar() {
    return(
        <>
            <div className="navbar-box">
                <div className="nav-profile">
                    <img src="https://img.freepik.com/premium-vector/water-drop-logo-images-illustration-design_6543-788.jpg?w=740" alt="" />
                    <span>WaterPurityTracker</span>
                </div>
                <div className="nav-profile">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/input">Input</a></li>
                        <li><a href="/tables">Tables</a></li>
                        <li><a href="/queries">Details</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}