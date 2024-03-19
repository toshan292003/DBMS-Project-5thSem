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
                        <li><a href="/services">Purest Areas</a></li>
                        <li><a href="/input">Add Samples</a></li>
                        <li><a href="/tables">Tables</a></li>
                        <li><a href="/queries">Details</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/dropdown">Testing</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}