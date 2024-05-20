import React from "react";
import GetInTouch from "./GetInTouch";
import Support from "./Support";
import Header from "./Header";
import Features from "./Features/Features";
import Card from "./Card";


const Home = () => {
  return (
    <span>
      <Header />
      <Features />
      <Card />
      <Support />
      <GetInTouch />
    </span>
  );
};

export default Home;
