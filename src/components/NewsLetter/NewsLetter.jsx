import React from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offer on your email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
            <input type="email" placeholder='Your Email Address!' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter