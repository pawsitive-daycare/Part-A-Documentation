import React from "react";
import "./Services.css";

function Services() {
    const serviceData = [
        { title: "Pet Daycare", img: "pet-daycare.jpg" },
        { title: "Pet Grooming", img: "pet-grooming.jpg" },
        { title: "Dog Walking", img: "dog-walking.jpg" },
    ];

    return (
        <section className="services">
            <h2>Our Services</h2>
            <div className="service-cards">
                {serviceData.map((service, index) => (
                    <div className="card" key={index}>
                        <img src={service.img} alt={service.title} />
                        <h3>{service.title}</h3>
                    </div>
                ))}
            </div>
            <button className="learn-more">Learn More</button>
        </section>
    );
}

export default Services;