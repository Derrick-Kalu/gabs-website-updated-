import React from 'react';
import './BlogSection.css';

function BlogSection() {
  return (
    <section className="blog-section" id="blog">
      <h2>Latest News</h2>
      <div className="blog-grid">
        <div className="blog-card">
          <h3>Cooperative Week 2024</h3>
          <p>Join us in celebrating our achievements and building new partnerships.</p>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
