import React from "react";
import { Comp1, Comp2, Comp3, Comp4, Comp5, Comp6 } from "../../assets/imports";
import "./partnership.css";

const LOGOS = [Comp1, Comp2, Comp3, Comp4, Comp5, Comp6];

const Partnersip = () => {
  return (
    <div className="partnership__container section__padding">
      <h1 className="partnership__container-header">Trusted by company like</h1>
      <div className="partnership__container-logos">
        {LOGOS.map((e, i) => {
          return <img src={e} alt="/" key={i} />;
        })}
      </div>
    </div>
  );
};

export default Partnersip;
