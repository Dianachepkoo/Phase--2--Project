// import React, { useState } from 'react';

// const CheckoutForm = ({totalCost,onRemove}) => {

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     address: '',
//     cardNumber: '',
//     expiryDate: '',
//     cvv: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);

//   };

//   return (
//     <div className="checkout-form-container">
//       <h2>Checkout</h2>
//       <form onSubmit={handleSubmit}>
//         <label className="checkout-form-label"><br />
//           Name:
//           <br />
//           <input placeholder='Full Name' type="text" name="name" value={formData.name} onChange={handleChange} required />
// </label>
// <label className="checkout-form-label">
//   Email:
//   <br />
//   <input placeholder='E-mail Address' type="email" name="email" value={formData.email} onChange={handleChange} required />
// </label>
// <label className="checkout-form-label">
//   Address:
//   <br />
//   <textarea placeholder='Address' name="address" value={formData.address} onChange={handleChange} required />
// </label>
// <label className="checkout-form-label">
//   Card Number:
//   <br />
//   <input  type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required />
// </label>
// <label className="checkout-form-label">
//   Expiry Date:
//   <br />
//   <input type="text" name="expiryDate" value={formData.expiryDate} onChange={handleChange} required />
// </label>
// <label className="checkout-form-label">
//   CVV:
//   <br />
//   <input type="text" name="cvv" value={formData.cvv} onChange={handleChange} required />
// </label>
// <label className="checkout-form-label">
//   Total Cost (USD): 
//   <br />
// <input type="number" name="cost" value= {totalCost} onChange={handleChange} disabled  />
// </label>
// <br />
// <button onClick={onRemove} className="checkout-form-button" type="submit">Place Order</button>

// </form>
// </div>

// );
// };

// export default CheckoutForm;