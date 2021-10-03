import React from 'react';
import { useGlobalContext } from '../context';

const Navbar = () => {

    const {cart} = useGlobalContext();

    return (
        <div className="navbar">
            <div className="logo">Shopping cart</div>
            <div className="cart"><i className="fas fa-shopping-bag"></i><span className="cart-num">{cart.length}</span></div>
        </div>
    )
}

export default Navbar;
