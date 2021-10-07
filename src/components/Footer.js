import React from "react";
import { useGlobalContext } from "../context";

const Footer = () => {

    const {total, clearCart} = useGlobalContext();

  return (
    <div>
      <hr />
      <div className="cart-total">
        <h4>
          total <span>${total}</span>
        </h4>
      </div>
      <button className="btn clear-btn" onClick={clearCart}>
        clear cart
      </button>
    </div>
  );
};

export default Footer;
