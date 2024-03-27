import React, { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { userVerify } from "../services/Apis";
import "../styles/mix.css";

const Otp = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", "", "", ""]);
  const location = useLocation();
  const navigate = useNavigate();
  const refs = useRef([]);

  const handleChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value === "" && index > 0) {
      refs.current[index - 1].focus();
    }

    if (value !== "" && index < refs.current.length - 1) {
      refs.current[index + 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const enteredOtp = otp.join("");
    if (enteredOtp == "12345678") {
      navigate("/");
    } else {
      toast.error("Incorrect OTP");
      return;
    }

    //   const data = {
    //     otp: enteredOtp,
    //     email: location.state,
    //   };

    //   const response = await userVerify(data);
    //   if (response.status === 200) {
    //     localStorage.setItem("userdbtoken", response.data.userToken);
    //     toast.success(response.data.message);
    //     navigate("/");
    //   } else {
    //     toast.error(response.response.data.error);
    //   }
  };

  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1 style={{ color: "black" }}>Please Enter Your OTP Here</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form_input">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  ref={(input) => (refs.current[index] = input)}
                  style={{
                    width: "43.5px",
                    height: "43px",
                    marginRight: "10px",
                  }}
                />
              ))}
            </div>
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default Otp;
