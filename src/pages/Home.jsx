import React from "react";
import Hero from "../components/Hero";
import Certified from "../components/Certified";
import NewsLetter from "../components/NewsLetter";
import World from "../components/World";
import CarouselItem from "../components/CarouselItem";
import LiveSession from "../components/LiveSession";
import Gain from "../components/Gain";

const Home = () => {
  return (
    <div>
      <Hero />
      <Certified />
      <Gain />
      <World />
      <CarouselItem />
      <h1 className="text-black50 text-lg font-bold text-center my-6 sm:text-4xl sm:font-semibold">
        Watch some of our live sessions to get started with learning Digital
        Marketing
      </h1>
      <LiveSession />
      <NewsLetter />
    </div>
  );
};

export default Home;
