import React from 'react';
import './NewsLetter.css';

function Newsletter() {
  return (
    <section className="newsletter-section">
      <h2>Subscribe to Our Newsletter</h2>
      <form className="newsletter-form">
        <input type="email" placeholder="Enter your email" />
        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
}

export default Newsletter;
