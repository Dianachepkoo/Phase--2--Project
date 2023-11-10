import React, { useState } from 'react';
import './SignupForm.css';

const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [first_name, setFirst_Name] = useState('');
  const [last_name, setLast_Name] = useState('');

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleFirstName(e) {
    setFirst_Name(e.target.value);
  }

  function handleLastName(e) {
    setLast_Name(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    let newObj = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
    };

    fetch("http://ecommerce.muersolutions.com/api/v1/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newObj),
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));

    e.target.reset();
  }

  return (
    <div className="signup-container">
      <p><strong>Sign up here</strong></p>
      <br/>
      <form onSubmit={handleSubmit}>
        <label className="signup-label">First Name</label>
        <br/>
        <input
          className="signup-input"
          type="text"
          placeholder="Enter your first name"
          onChange={handleFirstName}
        />
        <br/>
        <label className="signup-label">Last Name</label>
        <br/>
        <input
          className="signup-input"
          type="text"
          placeholder="Enter your last name"
          onChange={handleLastName}
        />
        <br/>
        <label className="signup-label">Email:</label>
        <br/>
        <input
          className="signup-input"
          type="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={handleEmail}
        />
        <br/>
        <label className="signup-label">Password:</label>
        <br/>
        <input
          className="signup-input"
          type="password"
          onChange={handlePassword}
          required
          value={password}
          placeholder="Enter your password"
        />
        <br/>
        <button className="signup-button">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupForm;