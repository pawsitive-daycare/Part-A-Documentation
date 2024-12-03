import React from "react";
import "./Hero.css";

function Hero() {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Welcome to PAWsitive Daycare</h1>
                <p>A PAWsitive Perfect Getaway For Your Furry Friend!</p>
                <div className="hero-buttons">
                    <button>Book Now</button>
                    <button>Send Inquiry</button>
                </div>
            </div>
        </section>
    );
}

export default Hero;