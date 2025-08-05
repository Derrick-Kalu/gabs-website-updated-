import React from 'react';
import './AboutSection.css';
import aboutImage from '../assets/img-0aa.jpg'; 

function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <div className="text">
          <h2>About GABS Cooperative</h2>
          <p> Over the past three years, we have had the privilege of empowering over 30,000 customers from the Nigeria Police Force (NPF), Nigerian Security and Civil Defense Corps (NSCDC), Federal Fire Service (FFS), Federal Road Safety Corps (FRSC), Nigerian Customs Service (NCS),
          National Drug Law Enforcement Agency (NDLEA), Federal Capital Territory Administration (FCTA), Abuja Electricity Distribution Company (AEDC) with our fast, hassle-free, no-collateral loans.
        We are here to support you too, with our flexible loan options designed to cater to your unique needs, so you can focus on what truly matters without the stress of financial worries.
        Let us be your financial safety net—because your needs come first.</p>
        
        </div>
        <div className="image-container">
          <img src={aboutImage} alt="GABS Team" />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
