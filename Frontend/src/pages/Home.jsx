import React from "react";
import GridComp from "../components/GridComp";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Project from "../components/Project";

const Home = () => {
  return (
    <div>
      <GridComp />
      <Navbar />
      <Hero />
      <Project />
    </div>
  );
};

export default Home;
