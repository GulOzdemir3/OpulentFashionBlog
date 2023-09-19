import React from "react";
import Contact from "../pages/Contact";
import "../styles/footer.css"
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div className="footer">
            <div className="newsletter">
                <p id="footerText">&copy; Gul Ozdemir - 2023</p>
            </div>
        </div>
    );
};

export default Footer;