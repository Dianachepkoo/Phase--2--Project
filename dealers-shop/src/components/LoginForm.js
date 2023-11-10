import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    let loginData = {
      email: email,
      password: password,
    };

    fetch("http://ecommerce.muersolutions.com/api/v1/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => console.error(error));

    setEmail('');
    setPassword('');
  }

  return (
    <div className="login-container">
      <p><strong>Login to Your Account</strong></p>
      <br/>
      <form onSubmit={handleSubmit}>
        <label className="login-label">Email:</label>
        <br/>
        <input
          className="login-input"
          type="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={handleEmail}
        />
        <br/>
        <label className="login-label">Password:</label>
        <br/>
        <input
          className="login-input"
          type="password"
          required
          placeholder="Enter your password"
          value={password}
          onChange={handlePassword}
        />
        <br/>
        <button className="login-button">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;