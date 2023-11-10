import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import './ProductDetails.css'; // Import your CSS file

const ProductDetails = ({ addToCart }) => {
  let { index } = useParams();
  const [product, setProduct] = useState([]);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    try {
      fetch("http://ecommerce.muersolutions.com/api/v1/products", {
        method: "GET",
        headers: { "Content-Security-Policy": "upgrade-insecure-requests" },
      })
        .then((res) => res.json())
        .then((data) => setProduct(data[index]));
    } catch (error) {
      alert(error);
    }
  }, [index]);

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedToCart(true);
  };

  if (!product) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="product-container">
      <div className="product">
        <img
          src={product.product_full_image}
          alt={product.product_name}
          className="product-image"
        />
        <div className="product-info">
          <p className="product-name">{product.product_name}</p>
          <h2 className="product-price">${product.unit_price}</h2>
          <p className="product-description">Description: {product.product_description}</p>
          <p className="product-rank">Rank: {product.ranking}</p>
          <p className="product-created">Created On: {product.created}</p>
          <button
            onClick={() => handleAddToCart(product)}
            className={`add-to-cart-button ${addedToCart ? "added" : ""}`}
            disabled={addedToCart}
          >
            {addedToCart ? "Added to Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;