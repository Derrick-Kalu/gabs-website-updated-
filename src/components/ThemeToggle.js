// ThemeToggle.js
import React from 'react';
import './ThemeToggle.css';

function ThemeToggle({ isDark, toggle }) {
  return (
    <button className="theme-toggle" onClick={toggle}>
      {isDark ? '🌙 ' : '☀️'}
    </button>
  );
}

export default ThemeToggle;
