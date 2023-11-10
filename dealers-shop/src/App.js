import './App.css';
import ProductDetails from './components/ProductDetails';
import { useState, useEffect } from 'react';
import { Routes, Route,useLocation } from 'react-router-dom';
import  LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Cart from './components/Cart';
import CheckOut from './components/CheckOut';
import Display from './components/Display'
import FlyMenu from './components/FlyMenu';

function App() {

const[products, setProducts] = useState([])
const location = useLocation();
  const checkOutProp = location.state ? location.state.totalCost : null;

useEffect(()=>{
try {
  fetch("http://ecommerce.muersolutions.com/api/v1/products",{
    method:"GET",
    headers:{"Content-Security-Policy":"upgrade-insecure-requests"}
  })
  .then(res=>res.json())
  .then(data=>setProducts(data))
} catch (error) {
  console.log(error)
}
},[])

const[inCart,setInCart]=useState([])

function addToCart(product){
  setInCart([...inCart,product])
    console.log(inCart);
}

function removeFromCart(productToRemove) {
  const updatedCart = inCart.filter((product) => product !== productToRemove);
  setInCart(updatedCart);

}
  return (
    <div className="App">
      <Routes>
        <Route element={<FlyMenu/>}>
        <Route path="/" element={<Display products={products} />} />
        <Route element={<ProductDetails addToCart={addToCart}/>}path='/productdetails/:index' />
        <Route path="/components/signup" element={<SignupForm />} />          
        <Route path="/components/login" element={<LoginForm />} />
          <Route path='/cart' element={<Cart inCart={inCart} onRemove={removeFromCart}/>}/>
          <Route path="/checkOut" element={<CheckOut onRemove={removeFromCart} totalCost={checkOutProp}/>}/>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;