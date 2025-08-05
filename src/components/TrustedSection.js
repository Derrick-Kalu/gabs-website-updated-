import React from 'react';
import './TrustedSection.css';

const sponsors = [
  '/sponsors/1.jpg', '/sponsors/2.jpg', '/sponsors/3.jpg', '/sponsors/4.jpg',
  '/sponsors/5.jpg', '/sponsors/6.jpg', '/sponsors/7.jpg', '/sponsors/8.jpg',
  '/sponsors/10.jpg',
  '/sponsors/1.jpg', '/sponsors/2.jpg', '/sponsors/3.jpg', '/sponsors/4.jpg',
  '/sponsors/5.jpg', '/sponsors/6.jpg', '/sponsors/7.jpg', '/sponsors/8.jpg',
  '/sponsors/10.jpg',
];

const TrustedSection = () => {
  return (
    <section className="trusted-section">
      <div className="trusted-text">
        <h2>The world's best companies trust GABS</h2>
        <p>Trusted by thousands of companies across 50+ countries</p>
      </div>
      <div className="sponsor-marquee">
        <div className="sponsor-track">
          {sponsors.map((logo, index) => (
            <img key={index} src={logo} alt="sponsor" className="sponsor-logo" />
          ))}
        </div>
      </div>
      <div className="journey-btn">
        <button>Start your Journey</button>
      </div>
    </section>
  );
};

export default TrustedSection;
