import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = ({ inCart, onRemove }) => {
  const [totalCost, setTotalCost] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    calculateTotalCost();
  }, [inCart]);

  const calculateTotalCost = () => {
    const totalPrice = inCart.reduce(
      (accumulator, product) => accumulator + product.unit_price,
      0
    );
    setTotalCost(totalPrice);
  };

  const handleCheckOut = () => {
    navigate("/checkout", { state: { totalCost: totalCost } });
  };

  return (
    <div className="product-container">
      <div className="checkout-link">
        <p className="total-cost">Total Cost: ${totalCost}</p>
        <button onClick={handleCheckOut}>Check Out</button>
      </div>
      {inCart.map((product, index) => (
        <div className="product" key={index}>
          <img
            src={product.product_full_image}
            alt={product.product_name}
            className="product-image"
          />
          <p className="product-name">{product.product_name}</p>
          <p className="product-price">${product.unit_price}</p>
          <p>rank: {product.ranking}</p>
          <button onClick={() => onRemove(product)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;