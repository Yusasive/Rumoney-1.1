import React from "react";
import Hire from "../component/Hire";
import Certified from "../component/Certified";
import Brand from "../component/Brand";
import Testimonial from "../component/Testimonial";
import LiveSession from "../component/LiveSession";
import Newsletter from "../component/NewsLetter";
import Unique from "../component/Unique";

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
