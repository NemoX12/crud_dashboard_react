import React from "react";
import { Button, Navbar } from "../../components/imports";
import { HeroImage } from "../../assets/imports";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero__container section__padding gradient-bg">
        <Navbar />

        <div className="hero__container-content">
          <p className="hero__container-content__badge">
            Get Your Free Consultation Now
          </p>
          <h1 className="hero__container-content__header">
            Manage your team easily with Dashboard
          </h1>
          <p className="hero__container-content__desc">
            Dashboard is a buisness management solution that offers a
            personalized portal to each type of user,
          </p>
          <Button ctn={"Get Started"} />
        </div>
      </div>

      <div className="hero__container-image">
        <img src={HeroImage} alt="" />
      </div>
    </>
  );
};

export default Hero;
