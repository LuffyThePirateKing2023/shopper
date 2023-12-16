import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
    const {getTotalAmount,all_product, cartItems, removeToCart } = useContext(ShopContext);
  return (
    <div className='cartitem'>
        <div className="cartitem-format-main">
            <p>Poducts</p>
            <p className='p_name'>Titles</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e)=>{
            if(cartItems[e.id]>0){
                return(
                <div key={e.id}>
                    <div className="cartitem-format cartitem-format-main">
                        <img src={e.image} alt="" className='carticon-product-icon'/>
                        <p className='p_name'>{e.name}</p>
                        <p>$ {e.new_price}</p>
                        <button className="cartiems-quantity">{cartItems[e.id]}</button>
                        <p>${e.new_price * cartItems[e.id]} </p>
                        <img className='cartitem-remove-icon' src={remove_icon} onClick={()=>{removeToCart(e.id)}} alt="" />
                    </div>
                </div>
                )
            }
            return null
        })}
        <div className="cartitem-down">
            <div className="cartitem-total">
                <h1>Cart Total</h1>
                <div>
                    <div className="cartitem-total-item">
                        <p>Subtotal</p>
                        <p>${getTotalAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitem-total-item">
                        <p>Shipping Fee</p>
                        <p>${0}</p>
                    </div>
                    <hr />
                    <div className="cartitem-total-item">
                        <h3>Total</h3>
                        <h3>${getTotalAmount()}</h3>
                    </div>
                </div>
                <button>Proceed to Checkout</button>
            </div>
            <div className="cartitem-promo-code">
                <p>If you have a Promo code enter it here</p>
                <div className="cartitem-promo-box">
                    <input type="text" placeholder='Promo Code' />
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItems