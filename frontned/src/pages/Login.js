
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";
import "../styles/mix.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [spinner, setSpinner] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setSpinner(true); // Show spinner while waiting for response
      const response = await axios.post("https://turnover-backend-deou.onrender.com/user/login", { email, password });
      const { token } = response.data;
      localStorage.setItem("token", token); // Store token in local storage
      setSpinner(false); // Hide spinner
      navigate('/dashboard'); // Redirect to dashboard page
    } catch (error) {
      setSpinner(false); // Hide spinner
      // Display error message
      toast.error(error.response.data.msg || "An error occurred");
    }
  };

  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h2>Welcome Back to eccomerce</h2>
            <p>The next gen business marketplace</p>
          </div>
          <form>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email Address"
              />
            </div>

            <div className="form_input">
              <label htmlFor="password">Password</label>
              <div className="two">
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Your password"
                />
              </div>
            </div>

            <button className="btn" onClick={handleLogin}>
              Login
              {spinner && (
                <span>
                  <Spinner animation="border" />
                </span>
              )}
            </button>
            <p>
              Don't have and account <NavLink to="/register">Sing up</NavLink>{" "}
            </p>
          </form>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default Login;


