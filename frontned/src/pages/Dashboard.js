import React, { useEffect } from "react";
import "../styles/mix.css";

const Dashboard = () => {
  return (
    <div className="dash_div">
      <h2 className="dash_h2">Please mark your interests!</h2>
      <p className="dash_p">We will keep you notified.</p>
      <p className="dash_p1">My saved interests!</p>

      <div>
        <p>
          <input type="checkbox" id="input_box" />
          <label htmlFor="shoes">Shoes</label>
        </p>
        <p>
          <input type="checkbox" id="input_box" />
          <label htmlFor="jewelry">Jewelry</label>
        </p>
        <p>
          <input type="checkbox" id="input_box" />
          <label htmlFor="makeup">Makeup</label>
        </p>
        <p>
          <input type="checkbox" id="input_box" />
          <label htmlFor="tshirt">T-Shirt</label>
        </p>
        <p>
          <input type="checkbox" id="input_box" />
          <label htmlFor="jeans">Jeans</label>
        </p>
        <p>
          <input type="checkbox" id="input_box" />
          <label htmlFor="jeans">Furniture</label>
        </p>
        <p>
          <input type="checkbox" id="input_box" />
          <label htmlFor="jeans">Women T-shirts</label>
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
