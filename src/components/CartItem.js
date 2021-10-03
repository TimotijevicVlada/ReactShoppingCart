import React from 'react'

const CartItem = ({id, img, title, amount, price}) => {
    return (
        <div className="cart_item">
            <div className="image">
                <img src={img} alt={title} />
            </div>
            <div className="info">
                <h3 className="title">{title}</h3>
                <h2 className="price">${price}</h2>
                <button className="remove" onClick={() => console.log(id + " " + "Item removed")}>remove</button>
            </div>
            <div className="product_number">
                <button onClick={() => console.log("Amount of " + id + " item increased")}><i className="fas fa-chevron-up"></i></button>
                <span>{amount}</span>
                <button onClick={() => console.log("Amount of " + id + " item decreased")}><i className="fas fa-chevron-down"></i></button>
            </div>
        </div>
    )
}

export default CartItem;
