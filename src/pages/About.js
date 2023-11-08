import React from "react";
import Certified from "../component/Certified";
import { Mission } from "../component/Mission";
import Programs from "../component/Programs";
import UniqueStudent from "../component/UniqueStudent";
import UniqueSME from "../component/UniqueSME";
import Journey from "../component/Journey";

const About = () => {
  return (
    <div>
      <section className="bg-center bg-no-repeat mt-24 bg-about-banner bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-4 lg:py-20">
          <h1 className="mb-4 text-4xl mt-10 font-extrabold tracking-tight leading-none BG text-white md:text-5xl lg:text-6xl">
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
  );
};

export default About;
