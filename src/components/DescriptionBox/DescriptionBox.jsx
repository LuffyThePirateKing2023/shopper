import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (120) </div>
        </div>
        <div className="descriptionbox-description">
            <p>Welcome to <span>SHOPPER</span>, your go-to destination for a seamless 
                online shopping experience! Discover a world of style, quality, and convenience 
                right at your fingertips. Browse through our extensive collection of the latest fashion trends, 
                from chic apparel to must-have accessories. Whether you're looking for timeless classics 
                or the hottest runway-inspired looks, we've got you covered. Our carefully curated selection 
                ensures that you stay on trend and express your unique sense of style effortlessly.</p>

            <p>Enjoy exclusive deals and promotions, ensuring that you get the best value for your money.
                 Our responsive customer support team is ready to assist you with any inquiries, 
                 ensuring a smooth and satisfying shopping experience from start to finish.</p>
        </div>
    </div>
  )
}

export default DescriptionBox