import React from 'react';
import Hand from '../assets/images/Hand.png';
import { Link } from "react-router-dom";

const Hire = () => {
  return (
    <div>
      <div className="container flex flex-col justify-center p-2 mt-24 mb-2 sm:py-2 lg:py-6 lg:flex-row lg:justify-between">
      <div className="flex flex-col justify-center p-4 text-left  sm:ml-2 lg:ml-16 rounded-sm lg:max-w-2xl xl:max-w-2xl lg:text-left">
        <h1 className="text-4xl text-black60 mt-6 font-semibold sm:text-6xl">
          Become a digital <br /> marketing <span className="text-rumoney60">Genius</span>
        </h1>
        <p className="mt-6 mb-2 text-black60 text-xl font-normal sm:mb-4">
          Learn digital marketing from top experts over Africa and get ready to
          access global opportunities.
        </p>
        <div class="flex mt-8">
          <Link
            to="/courses"
            class="uppercase py-1 sm:py-2 px-2 text-bold sm:px-4 rounded-md bg-rumoney60 border-2 border-transparent text-white text-sm sm:text-md mr-4 hover:bg-rumoney30">
            Start Learning 
          </Link>
          <Link
            to="/hire-marketers"
            class="uppercase py-1 sm:py-2 px-2 sm:px-4 text-bold rounded-md bg-transparent border-2 border-rumoney60 text-rumoney dark:text-rumoney60 hover:bg-rumoney50 hover:text-white text-md">
            Hire Marketers
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center p-6 mt-10 lg:mr-4 lg:mt-6 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
        <img
          src={Hand}
          alt="HeroImage"
          className="object-contain object-left-bottom h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          placeholder="blur"
          loading="lazy"
        />
      </div>
    </div>
    </div>
  )
}

export default Hire;
