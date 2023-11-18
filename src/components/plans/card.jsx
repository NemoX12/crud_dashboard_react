import React from "react";
import { FaRegSquareCheck } from "react-icons/fa6";
import "./card.css";

const Card = ({ dark }) => {
  return (
    <div className={`${dark ? "dark-card__container" : "card__container"}`}>
      <div className="card__container-top__section">
        <h3 className="card__container-top__section-badge">Standard</h3>
        <p className="card__container-top__section-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus odio
          pellentesque pellentesque a. Amet
        </p>
        <p className="card__container-top__section-price">
          <span>$15</span> /Month
        </p>
      </div>

      <div className="line__dashed"></div>

      <div className="card__container-bottom__section">
        <p className="card__container-bottom__section-item">
          <FaRegSquareCheck size={20} /> For 1-10 people in a team
        </p>
        <p className="card__container-bottom__section-item">
          <FaRegSquareCheck size={20} /> For 1-10 people in a team
        </p>
        <p className="card__container-bottom__section-item">
          <FaRegSquareCheck size={20} /> For 1-10 people in a team
        </p>

        <button className="card__container-bottom-section__btn">Choose</button>
      </div>
    </div>
  );
};

export default Card;
