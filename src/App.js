import React, { useEffect, useState } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import Testimonials from './components/Testimonials';
import BlogSection from './components/BlogSection';
import Newsletter from './components/NewsLetter';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import TrustedSection from './components/TrustedSection';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    const className = 'dark-mode';
    if (isDark) {
      document.body.classList.add(className);
    } else {
      document.body.classList.remove(className);
    }
  }, [isDark]);

  return (
    <div className={`App ${isDark ? 'dark-mode' : ''}`}>
      <Navbar darkMode={isDark} toggleDarkMode={() => setIsDark(!isDark)} />
     <ThemeToggle isDark={isDark} toggle={() => setIsDark(!isDark)} />
      

      <section id="home" data-aos="fade-up"><HeroSection /></section>
      <section id="about" data-aos="fade-up"><AboutSection /></section>
      <section id="services" data-aos="fade-up"><ServicesSection /></section>
      <section id="testimonials" data-aos="fade-up"><Testimonials /></section>
      <section id="trusted" data-aos="fade-up"><TrustedSection /></section>
      <section id="blog" data-aos="fade-up"><BlogSection /></section>
      <section id="newsletter" data-aos="fade-up"><Newsletter /></section>
      <section id="contact" data-aos="fade-up"><ContactSection /></section>

      <Footer />
    </div>
  );
}

export default App;
