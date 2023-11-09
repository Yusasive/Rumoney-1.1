import React from "react";
import Learn from "../assets/icons/Learn.png";
import Experience from "../assets/icons/Experience.png";
import Earn from "../assets/icons/earn.png";
import { Link } from "react-router-dom";

const Unique = () => {
  return (
    <div>
       <div className="container flex flex-col justify-center bg-orange-50 sm:bg-what-image p-2 mt-2 mb-8 sm:py-2 lg:py-6  lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-4 text-left sm:w-1/3 sm:ml-2 lg:ml-16 rounded-sm lg:max-w-2xl xl:max-w-2xl">
          <h1 className="text-2xl text-black60 mt-2 font-semibold sm:text-3xl">
            Why we are
            <span className="text-rumoney60 ml-2">Unique</span>
          </h1>
          <p className="mt-1 mb-2 text-black60 text-lg font-normal sm:mb-4">
            Rumoney is the world’s biggest Digital marketing learning community
            where we have global experts to empower students on relevant digital
            skills for FREE
          </p>
          <div class="flex mt-2">
            <Link
              to="/courses"
              class="uppercase py-2 text-bold px-4 rounded-md bg-rumoney60 border-2 border-transparent text-white text-md mr-4 hover:bg-rumoney30">
              Hire Marketer
            </Link>
          </div>
        </div>
        <div className="text-left p-6 mt-2 sm:w-1/3 lg:mr-4 lg:mt-2 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img src={Learn} alt="Learn" loading="lazy" />
          <h1 className="text-lg text-black60 sm:mt-2 font-semibold sm:text-xl">
            We make hiring Fast
          </h1>
          <p className="mt-1 mb-2 text-black60 text-md font-normal sm:mb-4">
            Build your team quickly by hiring from our trained pool of talents.
          </p>
        </div>
        <div className="text-left justify-center px-6 mt-2 sm:w-1/3 lg:mr-4 lg:mt-2 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <div>
            <img src={Experience} alt="Experience" loading="lazy" />
            <h1 className="text-lg  text-black60 sm:mt-2 font-semibold sm:text-xl">
              Proven and Vetted
            </h1>
            <p className="mt-1 mb-2 text-black60 text-md font-normal sm:mb-4">
              Hit your brand presence and revenue goals by working with
              experienced and qualified talents
            </p>
          </div>
          <div>
            <img src={Earn} alt="Earn" loading="lazy" />
            <h1 className="text-lg text-black60 mt-2 font-semibold sm:text-xl">
            Just the right pricing
            </h1>
            <p className="mt-1 mb-2 text-black60 text-md font-normal sm:mb-4">
            Increase your sales and reach more customers without breaking the bank.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unique;