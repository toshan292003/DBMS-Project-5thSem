import React from "react";
import './navbar.css';
export default function Navbar() {
    return(
        <>
            <div className="navbar-box">
                <div className="nav-profile">
                    <img src="https://img.freepik.com/premium-vector/letter-r-logo-design-logo-template-creative-r-logo-vector-symbol_487414-3674.jpg?w=360" alt="" />
                    <span>ResumeBuilder</span>
                </div>
                <div className="nav-profile">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="">Build Resume</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
}