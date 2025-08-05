import React from 'react';
import './ServicesSection.css';

function ServicesSection() {
  const services = [
    "Savings & Loans",
    "Investment Plans",
    "Real Estate Opportunities",
    "Business Support",
  ];

  return (
    <section className="services-section" id="services">
      <h2>What We Offer</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service}</h3>
            <p>Learn how we support you with {service.toLowerCase()} at GABS.</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;
