import React from 'react'

function Login() {
  return (
    <>
    <form>
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
  <button type="submit" className="btn btn-primary">
    Login
  </button>
</form>
    </>
  )
}

export default Login