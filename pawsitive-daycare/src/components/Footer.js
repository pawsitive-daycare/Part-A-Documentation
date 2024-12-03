import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer>
            <div className="social-icons">
                <a href="#"><img src="tiktok-icon.png" alt="Tiktok"/></a>
                <a href="#"><img src="instagram-icon.png" alt="Instagram"/></a>
                <a href="#"><img src="facebook-icon.png" alt="Facebook"/></a>
            </div>
            <p>Call Us</p>
        </footer>
    );
}

export default Footer;