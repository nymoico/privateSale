import React from "react";

import HeroSection from "../components/HeroSection/HeroSection";
import IcoDetails from "../components/Ico-details/IcoDetails";
import Purchase from "../components/Purchase/Purchase";
import RoadMap from "../components/RoadMap/RoadMap";
import Team from "../components/Team/Team";
import TokenAlocation from "../components/TokenAlocation/TokenAlocation";

import WhyJoin from "../components/WhyJoin/WhyJoin";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Purchase />
      <WhyJoin />
      <IcoDetails />
      <TokenAlocation />
      <RoadMap />
      <Team />
    </>
  );
};

export default Home;
