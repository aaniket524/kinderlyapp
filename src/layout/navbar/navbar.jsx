import React from "react";
import './navbar.css';
import { Link } from "react-router-dom";
import MobHeader from "./mobheader";

function Navbar() {
    return (
        <>
            <div className="main-navbar">
                <nav className="navbar">
                    
                    {/* Logo */}
                    <div className="nav-logo-container">
                        <h1 className="nav-log">Kinderly</h1>
                    </div>

                    {/* Center Nav Items */}
                    <div className="nav-item-container">
                        <ul className="nav-list">
                            {/* <li className="nav-items"><Link to='/'>Home</Link></li> */}
                            <li className="nav-items"><Link to='/about-us'>About </Link></li>
                            <li className="nav-items"><Link to='/programs'>Program</Link></li>
                            <li className="nav-items"><Link to='/addmission'>Admission</Link></li>
                            <li className="nav-items"><Link to='/gallery'>Gallery</Link></li>
                            <li className="nav-items"><Link to='/contact-us'>Contacts</Link></li>
                        </ul>
                    </div>

                    {/* Button */}
                    <div className="nav-btn-container">
                        <button className="nav-btn">
                            Book a Tour
                        </button>
                    </div>

                </nav>
            </div>
            <MobHeader/>
        </>
    );
}

export default Navbar;
