import React from "react";
import {
  Community,
  Hero,
  Integration,
  Partnership,
  Plans,
  Options,
  Footer,
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
      <Options />
      <Footer />
    </div>
  );
};

export default Landing;
