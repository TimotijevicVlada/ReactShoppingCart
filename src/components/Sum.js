import React from "react";


const Sum = ({totalPrice, setPhones, totalProducts}) => {


  return (
    <div className="sum">
      <div className="cart-total">
        <h2>
          <span>Total products:</span> {totalProducts}
        </h2>
        <h2>
          <span>Total price:</span> $ {totalPrice}
        </h2>
      </div>
      <button onClick={() => setPhones([])} className="btn clear-btn">
        clear cart
      </button>
    </div>
  );
};

export default Sum;
