import React from 'react';
import './popular.css';
import data_product from '../Assets/data';

const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />

      <div className="popular-item">
        {data_product.map((item, i) => (
          <div key={i} className="item">
            <img src={item.image} alt={item.name} />
            <p className='item-name'>{item.name}</p>
            <div className='price-info'>
                <p className='newPrice'>$ {item.new_price}</p>
                <p className='oldPrice'> $ {item.old_price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
