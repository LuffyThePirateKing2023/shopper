import React from 'react';
import './Hero.css';
import hand_icon from '../hand_icon.png';
import arrow_icon from '../arrow.png';
import hero_image from '../hero_image.png';

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>New Arrival Only</h2>
        <div>
          <div className="hero-hand-icon">
            <p>New</p>
            <img src={hand_icon} alt='Hand' />    
          </div>
          <p>Collection</p>
          <p>For Everyone</p>
          <div className="hero-latest-button">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt='Arrow' />
          </div>
        </div>
      </div>

      <div className="hero-right">
        <img src={hero_image} alt="Hero" />
      </div>
    </div>
  )
}

export default Hero;
