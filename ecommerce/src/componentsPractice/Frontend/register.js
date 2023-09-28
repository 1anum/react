import React, { useState } from "react";
import axios from "axios";

function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      // username: username,
      password: password,
    };
    axios
      .post("http://localhost:5000/user/register", data)
      .then((response) => {
        console.log(response);
        alert(`success: ${response.data.msg}`);

        setTimeout(() => {
          // Redirect to login after 1 seconds
          window.location.href = "/login";
        }, 1000);
      })
      .catch((err) => {
        alert(`Error: ${err.response.data.msg}`);
        console.log(err.response.data.msg);
      });
  };

  return (
    <>
      <div className="container">
        <form>
        <div className="form-group">
            <label htmlFor="firstname">First Name</label>
            <input
              type="name"
              className="form-control"
              id="inputfirstname"
              placeholder="Firstname"
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="name"
              className="form-control"
              id="inputlastname"
              placeholder="lastname"
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputEmail">Email</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* <div className="form-group">
            <label htmlFor="inputText">Username</label>
            <input
              type="text"
              className="form-control"
              id="inputText"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div> */}
          <div className="form-group">
            <label htmlFor="inputPassword">Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;