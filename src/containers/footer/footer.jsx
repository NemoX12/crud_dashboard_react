import React from "react";
import { Button } from "../../components/imports";
import { Items } from "../../components/navbar/navbar";
import "./footer.css";

const Column = () => {
  return (
    <ul className="footer_container-main-items_column">
      <h1>Lorem Ipsum</h1>
      <Items />
    </ul>
  );
};

const Footer = () => {
  return (
    <div className="footer_container gradient-bg">
      <div className="footer_container-main">
        <div className="footer_container-main-items">
          <Column />
          <Column />
          <Column />
        </div>
        <div className="footer_container-main-form">
          <input
            type="text"
            placeholder="Get Your Free Consultation Right Now"
          />
          <Button ctn={"Get Started"} />
        </div>
      </div>
      <p className="footer-container-copyright">
        @20xx Dashboard. Copyright and all rights reserved.
      </p>
    </div>
  );
};

export default Footer;
