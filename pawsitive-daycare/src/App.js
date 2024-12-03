import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <Services />
            <Footer />
        </div>
    );
}

export default App;
