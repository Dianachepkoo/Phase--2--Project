// import React, { useEffect, useState } from 'react';
// import '../index.css';
// import '../App.css'; 
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';



// function Home() {
//   const navigate = useNavigate()
//   const [products, setProducts] = useState([])


//   useEffect(() => {
//     fetch("http://ecommerce.muersolutions.com/api/v1/products")
//     .then(response => response.json())
//     .then(data => {
//       console.log(data)
//     setProducts(data)
//   })
//   }, [])

//   function handleClick(index) {
//     navigate(`/productdetails/${index}`)
//   }
//   return (
//     <div class="card-container">
//   {products.map((product, index) => (
//     <div key={index} class="card">
//       <div class="card-side card-image">
//         <img src={product.product_full_image} alt={product.product_name} />
//         <Link to={`/productdetails/${index}`} className="link-button">View More</Link>
//       </div>
//       <div class="card-side card-details">
//         <h1>{product.product_name}</h1>
//         <p>{product.product_description}</p>
//         <ul>
//           <li>Ranking: {product.ranking}</li>
//           <li>Unit Price: ${product.unit_price}</li>
//         </ul>
//       </div>
//     </div>
//   ))}
// </div>

//   );
// }

// export default Home;