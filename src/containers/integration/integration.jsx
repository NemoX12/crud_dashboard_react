import React from "react";
import { BsThreeDots, BsCalendar4 } from "react-icons/bs";
import { Avatars } from "../../assets/imports";
import "./integration.css";

const Integration = () => {
  return (
    <div className="integration__container section__padding">
      <div className="integration__container-card">
        <div className="integration__container-card__top">
          <h3>Slack integration</h3>
          <BsThreeDots />
        </div>
        <p className="integration__container-card__desc">
          Statisdaa is a school management solution that offers a personalized
          portal to each type of user,
        </p>
        <div className="integration__container-card__extra">
          <p>Development</p>
          <img src={Avatars} alt="/" />
        </div>
        <div className="integration__container-card__bottom">
          <p>14</p>
          <p>
            <BsCalendar4 /> 7 feb 2022
          </p>
        </div>
      </div>
    </div>
  );
};

export default Integration;
