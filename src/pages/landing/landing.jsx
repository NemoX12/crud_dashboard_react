import React from "react";
import {
  Community,
  Hero,
  Integration,
  Partnership,
  Plans,
} from "../../containers/imports";
import "./landing.css";

const Landing = () => {
  return (
    <div>
      <Hero />
      <Partnership />
      <Integration />
      <Community />
      <Plans />
    </div>
  );
};

export default Landing;
