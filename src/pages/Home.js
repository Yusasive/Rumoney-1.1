import React from "react";
import Hero from "../component/Hero";
import Certified from "../component/Certified";
import NewsLetter from "../component/NewsLetter";
import World from "../component/World";
import CarouselItem from "../component/CarouselItem";
import LiveSession from "../component/LiveSession";
import Gain from "../component/Gain";

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
