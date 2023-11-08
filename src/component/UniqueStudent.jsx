import React from "react";
import Prosperity from "../assets/images/Prosperity.png";
import { Link } from "react-router-dom";

const UniqueStudent = () => {
  return (
    <div>
      <div className="container flex flex-col justify-center bg-rumoney10 sm:bg-unique-student p-2 mt-2 mb-8 sm:py-2 lg:py-6  lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-4 text-left sm:w-2/3 sm:ml-2 lg:ml-16 rounded-sm lg:max-w-2xl xl:max-w-2xl">
          <h1 className="text-black60 text-3xl font-semibold">
            Why We're Unique <br /> To Students
          </h1>
          <div className="flex flex-col justify-center py-2 lg:flex-row lg:justify-between">
            <div className="text-black60">
              <p className="text-base py-2 font-medium">
                1. We raise world-class Digital Marketing talents{" "}
              </p>
              <p className="text-base py-2 font-medium">
                2. Learning is practical and easily accessible on any device
              </p>
              <p className="text-base py-2 font-medium">
                3. Learn from experienced mentors and top experts in digital
                marketing
              </p>
            </div>
            <div className="text-black60 sm:ml-3">
              <p className="text-base py-2 font-medium">
                4. Get ready for global opportunities, learn and get certified
                by META, Google and co
              </p>
              <p className="text-base py-2 font-medium">
                {" "}
                5. Get Hands on experience in our internship phase
              </p>
              <p className="text-base py-2 font-medium">
                6. Access job opportunities on our platform.
              </p>
            </div>
          </div>
          <div class="flex mt-2">
            <Link
              to="/courses"
              class="uppercase py-2 text-bold px-4 rounded-md bg-rumoney60 border-2 border-transparent text-white text-md mr-4 hover:bg-rumoney30">
              Start Learning
            </Link>
          </div>
        </div>

        <div className="text-left justify-center px-6 mt-2 sm:w-1/3 lg:mr-4 lg:mt-2 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={Prosperity}
            alt="HeroImage"
            className="object-contain object-left-bottom h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            placeholder="blur"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default UniqueStudent;
