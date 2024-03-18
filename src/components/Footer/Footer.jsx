import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        <div className="flexColStart f-left">
          <img src="./logo.png" alt="" />
          <span className="secondaryText">
            Our vision is to make the best products
          </span>
        </div>
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">144 New york, FL 4571, USA</span>

          <div className="flexCenter f-menu">
            <span>Products</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
