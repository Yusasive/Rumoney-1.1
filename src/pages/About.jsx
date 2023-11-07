import React from 'react';
import Certified from '../components/Certified';
import { Mission } from '../components/Mission';
import Programs from '../components/Programs';
import UniqueStudent from '../components/UniqueStudent';
import UniqueSME from '../components/UniqueSME';
import Journey from '../components/Journey';

const About = () => {
  return (
    <div>
      <section className="bg-center bg-no-repeat mt-24 bg-about-banner bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-4 lg:py-20">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none BG text-white md:text-5xl lg:text-6xl">
            About Us
          </h1>
        </div>
      </section>
      <Certified />
      <Mission />
      <UniqueStudent />
      <UniqueSME />
      <Journey />
      <Programs />
    </div>
  )
}

export default About;
