import React from "react";
import { OptionsImage } from "../../assets/imports";
import "./options.css";

const Options = () => {
  return (
    <div id="options" className="options__container section__padding">
      <div className="options__container-top">
        <h2 className="options__container-top__header">
          Interesting option for customer
        </h2>
        <p className="options__container-top__desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus odio
          pellentesque pellentesque a. Amet
        </p>
      </div>

      <div className="options__container-content">
        <img
          src={OptionsImage}
          alt="/"
          className="options__container-content__img"
        />
        <div className="options__container-content__right">
          <p className="options__container-content__right-badge">Standard</p>
          <p className="options__container-content__right-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus odio
            pellentesque pellentesque a. Amet
          </p>
          <p className="options__container-content__right-price">
            <span>$15</span> /Month
          </p>

          <button className="options__container-content__right-btn">
            Choose
          </button>
        </div>
      </div>
    </div>
  );
};

export default Options;
