import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom'
import "../styles/nav.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithubSquare} from '@fortawesome/free-brands-svg-icons'
import {faChartLine, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import SearchBar from "./SearchBar";



const Navbar = (props) => {
    
        return (
        <div className="container">
            <nav className="navmenu">
            <div className="left-section">
                {/* <Link to="/" className="logo-link">
                <img 
                    src={logo} 
                    alt="Logo"
                    style={{
                            width: "100px",
                            height: "auto",
                            marginRight: "10px",
                        }}
                    />
                    </Link> */}
                    <Link to="/" className="siteTitle"><b>O</b>pulent <b>F</b>ashion</Link>
                   
                </div>
                <div className="center-section">
                {/* <FontAwesomeIcon icon={faChartLine} /> */}
                {/* <SearchBar></SearchBar> */}
                </div>
                
                
                <ul className="right-section">
                <SearchBar />
                    {/* <Link to="/" className="nav-item">Homepage</Link> */}
                    <Link to="/about" className="nav-item">About</Link>
                    <Link to="/charts" className="nav-item">Charts</Link>
                    <Link to="/contact" className="nav-item">Contact</Link>
                    <a
                        className="nav-item"
                        href="https://github.com/GulOzdemir3?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <FontAwesomeIcon icon={faGithubSquare} />
                        
                    </a>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;