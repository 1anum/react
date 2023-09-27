import React from 'react'

function Register() {
  return (
    <>
<form>
  <div className="form-group">
    <label htmlFor="firstName">First Name:</label>
    <input
      type="text"
      className="form-control"
      id="firstName"
      placeholder="Enter your first name"
    />
  </div>
  <div className="form-group">
    <label htmlFor="lastName">Last Name:</label>
    <input
      type="text"
      className="form-control"
      id="lastName"
      placeholder="Enter your last name"
    />
  </div>
  <div className="form-group">
    <label htmlFor="email">Email:</label>
    <input
      type="email"
      className="form-control"
      id="email"
      placeholder="Enter your email"
    />
  </div>
  <div className="form-group">
    <label htmlFor="password">Password:</label>
    <input
      type="password"
      className="form-control"
      id="password"
      placeholder="Enter your password"
    />
  </div>
  <div className="form-group">
    <label htmlFor="confirmPassword">Confirm Password:</label>
    <input
      type="password"
      className="form-control"
      id="confirmPassword"
      placeholder="Confirm your password"
    />
  </div>
  <button type="submit" className="btn btn-primary">
    Register
  </button>
</form>
</>
  )
}

export default Register