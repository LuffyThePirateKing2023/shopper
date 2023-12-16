import React, { useContext, useState } from 'react';
import './navbar.css';
import Logo from '../Assets/logo.png';
import Cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import hambuger_icon from '../Assets/menu-hamburger.png';
import hamburger_close from '../Assets/hamburger_close.png'

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const [menuVisible, setMenuVisible] = useState(false);
    const [iconSrc, setIconSrc] = useState(hambuger_icon);
    const { getCartitem } = useContext(ShopContext);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
        setIconSrc(menuVisible ? hambuger_icon : hamburger_close);
    };

    return (
        <div className="navbar">
            <div className="hamburger-icon" onClick={toggleMenu}>
                <img src={iconSrc} alt='menuIcon' />
            </div>
            <div className="nav-logo">
                <img src={Logo} alt='logoIcon' />
                <p>SHOPPER</p>
            </div>
            <ul className={`nav-menu ${menuVisible ? 'visible' : ''}`}>
                <li onClick={() => { setMenu('shop'); toggleMenu(); }}>
                    <Link to='/'>Shop</Link>{menu === 'shop' ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu('men'); toggleMenu(); }}>
                    <Link to='/men'>Men</Link>{menu === 'men' ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu('women'); toggleMenu(); }}>
                    <Link to='/women'>Women</Link>{menu === 'women' ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu('kids'); toggleMenu(); }}>
                    <Link to='/kids'>Kids</Link>{menu === 'kids' ? <hr /> : <></>}
                </li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Log In</button></Link>
                <Link to='/cart'><img src={Cart_icon} alt='cartIcon' /></Link>
                <div className="nav-cart-count">{getCartitem()}</div>
            </div>
        </div>
    );
}

export default Navbar;
