import React from "react";
import "./button.css";

const Button = ({ ctn }) => {
  return (
    <>
      <button className="button">{ctn}</button>
    </>
  );
};

export default Button;
