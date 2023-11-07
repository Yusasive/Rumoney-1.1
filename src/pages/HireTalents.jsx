import React from "react";
import Hire from "../components/Hire";
import Certified from "../components/Certified";
import Brand from "../components/Brand";
import Testimonial from "../components/Testimonial";
import LiveSession from "../components/LiveSession";
import Newsletter from "../components/NewsLetter";
import Unique from "../components/Unique";

const HireTalents = () => {
  return (
    <div>
      <Hire />
      <Certified />
      <Unique />
      <Brand />
      <Testimonial />
      <h1 className="text-black50 text-xl font-bold text-center my-6 sm:text-4xl sm:font-semibold">
        Watch some of our live sessions to get started with learning Digital
        Marketing
      </h1>
      <LiveSession />
      <Newsletter />
    </div>
  );
};

export default HireTalents;
