import React from 'react';
import Hero from '../components/Hero';
import Certified from '../components/Certified';
import NewsLetter from '../components/NewsLetter';
import World from '../components/World';
import CarouselItem from '../components/CarouselItem';
import LiveSession from '../components/LiveSession';




const Home = () => {
  return (
    <div>
      <Hero />
      <Certified />
      <World />
    <CarouselItem />
    <LiveSession />
      <NewsLetter />

    </div>
  )
}

export default Home;
