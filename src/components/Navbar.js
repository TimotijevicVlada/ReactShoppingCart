import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">Shopping cart</div>
            <div className="cart"><i class="fas fa-shopping-bag"></i><span className="cart-num">0</span></div>
        </div>
    )
}

export default Navbar;
