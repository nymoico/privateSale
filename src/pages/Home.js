import React from "react";

import HeroSection from "../comments/HeroSection/HeroSection";
import IcoDetails from "../comments/Ico-details/IcoDetails";
import RoadMap from "../comments/RoadMap/RoadMap";
import Team from "../comments/Team/Team";
import TokenAlocation from "../comments/TokenAlocation/TokenAlocation";

import WhyJoin from "../comments/WhyJoin/WhyJoin";

const Home = () => {
  return (
    <>
      <HeroSection />
      <WhyJoin />
      <IcoDetails />
      <TokenAlocation />
      <RoadMap />
      <Team />
    </>
  );
};

export default Home;
