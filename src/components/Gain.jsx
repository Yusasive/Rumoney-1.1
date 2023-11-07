import React from "react";
import Learn from "../assets/icons/Learn.png";
import Experience from "../assets/icons/Experience.png";
import Earn from "../assets/icons/earn.png";

const Gain = () => {
  return (
    <div>
      <div className="container flex flex-col justify-center bg-orange-50 sm:bg-what-image p-2 mt-2 mb-8 sm:py-2 lg:py-6  lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-4 text-left sm:w-1/3 sm:ml-2 lg:ml-16 rounded-sm lg:max-w-2xl xl:max-w-2xl">
          <h1 className="text-2xl text-black60 mt-2 font-semibold sm:text-4xl">
            What you stand to <br /> gain as a
            <span className="text-rumoney60">student</span>
          </h1>
          <p className="mt-1 mb-2 text-black60 text-lg font-normal sm:mb-4">
            Rumoney is the world’s biggest Digital marketing learning community
            where we have global experts to empower students on relevant digital
            skills for FREE
          </p>
          <div class="flex mt-2">
            <a
              href="/courses"
              class="uppercase py-2 text-bold px-4 rounded-md bg-rumoney60 border-2 border-transparent text-white text-md mr-4 hover:bg-rumoney30">
              Start Learning Now
            </a>
          </div>
        </div>
        <div className="text-left p-6 mt-2 sm:w-1/3 lg:mr-4 lg:mt-2 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img src={Learn} alt="Learn" />
          <h1 className="text-lg text-black60 sm:mt-2 font-semibold sm:text-xl">
            Learn from the best
          </h1>
          <p className="mt-1 mb-2 text-black60 text-md font-normal sm:mb-4">
            Learn from top mentors and experts curated specially to make
            learning easy and fun for you.
          </p>
        </div>
        <div className="text-left justify-center px-6 mt-2 sm:w-1/3 lg:mr-4 lg:mt-2 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <div>
            <img src={Experience} alt="Experience" />
            <h1 className="text-lg  text-black60 sm:mt-2 font-semibold sm:text-xl">
              Real time experience
            </h1>
            <p className="mt-1 mb-2 text-black60 text-md font-normal sm:mb-4">
              Gain Hands on experience throughout your internship program.
              Assessments will be given after each class.
            </p>
          </div>
          <div>
            <img src={Earn} alt="Earn" />
            <h1 className="text-lg text-black60 mt-2 font-semibold sm:text-xl">
              Earn as you learn
            </h1>
            <p className="mt-1 mb-2 text-black60 text-md font-normal sm:mb-4">
              keep SAPA away by accessing job opportunities to earn while still
              in school and build your work experience history before graduation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gain;
