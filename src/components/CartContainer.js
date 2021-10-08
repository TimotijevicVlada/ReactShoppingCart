import React from "react";

const CartContainer = ({ phones, removeItem, increaseQuantity, decreaseQuantity }) => {


  return (
    <div>
      <header>
        <h2>Your Cart</h2>
      </header>
      <div className="cartItem_container">
        {phones.length === 0 ? (
          <h1>Your cart is empty</h1>
        ) : (
          phones.map((item) => (
            <div className="cart_item" key={item.id}>
              <div className="image">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="info">
                <h3 className="title">{item.title}</h3>
                <h2 className="price">${item.price}</h2>
                <button className="remove" onClick={() => removeItem(item.id)}>
                  remove
                </button>
              </div>
              <div className="product_number">
                <button onClick={() => increaseQuantity(item.id)}>
                  <i className="fas fa-chevron-up"></i>
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => decreaseQuantity(item.id)}>
                  <i className="fas fa-chevron-down"></i>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CartContainer;
