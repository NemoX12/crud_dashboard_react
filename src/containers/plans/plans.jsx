import React from "react";
import { PlanCard } from "../../components/imports";
import "./plans.css";

const Plans = () => {
  return (
    <div id="plans" className="plans__container section__padding">
      <div className="plans__container-top">
        <h1 className="plans__container-top__header">Pick up the best plan</h1>
        <p className="plans__container-top__desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus odio
          pellentesque pellentesque a. Amet ut lobortis pellentesque a, luctus
          maecenas.
        </p>
      </div>

      <div className="plans__container-cards__container">
        <PlanCard />
        <PlanCard dark={true} />
        <PlanCard />
      </div>
    </div>
  );
};

export default Plans;
