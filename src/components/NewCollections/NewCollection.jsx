import React from 'react';
import './NewCollection.css';
import new_collection from '../Assets/new_collections';

const NewCollection = () => {
  return (
    <div className='new-collection'>
      <h1>New Collection</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item, i) => (
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
}

export default NewCollection;
