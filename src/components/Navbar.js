import React from 'react';

const Navbar = ({totalProducts, setSortOrder}) => {

    return (
        <div className="navbar">
            <div className="logo">Shopping cart</div>
            <div className="cart">
                <select className="sortPrice" onChange={(e) => setSortOrder(e.target.value)}>
                    <option value="ASC">ASC</option>
                    <option value="DESC">DESC</option>
                </select>
                <i className="fas fa-shopping-bag"></i><span className="cart-num">{totalProducts}</span>
            </div>
        </div>
    )
}

export default Navbar;
