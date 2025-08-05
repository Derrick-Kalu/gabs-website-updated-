import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/img-0c.jpg';
import gridBackground from '../assets/wavey-fingerprint.svg';
import './HeroSection.css';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, duration: 0.8 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50 } },
};

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="grid-background">
        <img src={gridBackground} alt="Grid Background" />
      </div>

      <motion.div
        className="content-wrapper"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="text-content" variants={itemVariants}>
          <h1>Get global <br /> exposure for your brand</h1>
          <p>
            Join thousands of businesses growing with our platform and make your mark globally.
          </p>
          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Us
          </motion.button>
        </motion.div>

        <motion.div className="image-content" variants={itemVariants}>
          <img className="hero-image" src={heroImage} alt="Hero" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
