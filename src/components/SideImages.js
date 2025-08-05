import React from 'react';
import './SideImages.css';
import leftImage from '../assets/PR-C4C.jpg';
import rightImage from '../assets/PR-POF.jpg';

const SideImages = () => {
  return (
    <>
      <img src={leftImage} className="side-image left" alt="left" />
      <img src={rightImage} className="side-image right" alt="right" />
    </>
  );
};

export default SideImages;
