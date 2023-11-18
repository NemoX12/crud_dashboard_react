import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { CommunityImage } from "../../assets/imports";
import "./community.css";

const Community = () => {
  return (
    <div className="community__container section__padding">
      <div className="community__container-left">
        <h2 className="community__container-left__header">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h2>
        <p className="community__container-left__desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus odio
          pellentesque pellentesque a. Amet ut lobortis pellentesque a, luctus
          maecenas.
          <br />
          <br /> Feugiat sed enim vitae viverra cras tristique eu. Pellentesque
          bibendum volutpat metus, dictum.
        </p>
        <div className="community__container-left__extras">
          <FaRegCircleUser size={40} />
          <div className="community__container-left__extras-content">
            <h2 className="community__container-left__extras-content__header">
              80,000K
            </h2>
            <p className="community__container-left__extras-content__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
      <div className="community__container-right">
        <img src={CommunityImage} alt="/" />
      </div>
    </div>
  );
};

export default Community;
