import React from "react";
import {
  Community,
  Hero,
  Integration,
  Partnership,
} from "../../containers/imports";
import "./landing.css";

const Landing = () => {
  return (
    <div>
      <Hero />
      <Partnership />
      <Integration />
      <Community />
    </div>
  );
};

export default Landing;
