import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Display.css'; // Import your CSS file

function Display() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("http://ecommerce.muersolutions.com/api/v1/products")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setProducts(data)
      })
  }, [])

  return (
    <div className="card-container">
      {products.map((product, index) => (
        <div key={index} className="card">
          <div className="card-side card-image">
            <img src={product.product_full_image} alt={product.product_name} />
            <Link to={`/productdetails/${index}`} className="view-item-link">View Item</Link>
          </div>
          <div className="card-side card-details">
            <h1 className="product-name">{product.product_name}</h1>
            <p className="product-description">{product.product_description}</p>
            <ul className="product-info">
              <li>Ranking: {product.ranking}</li>
              <li>Unit Price: ${product.unit_price}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Display;