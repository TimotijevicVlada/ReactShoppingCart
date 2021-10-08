import React from 'react';

const Navbar = ({totalProducts}) => {

    return (
        <div className="navbar">
            <div className="logo">Shopping cart</div>
            <div className="cart"><i className="fas fa-shopping-bag"></i><span className="cart-num">{totalProducts}</span></div>
        </div>
    )
}

export default Navbar;
