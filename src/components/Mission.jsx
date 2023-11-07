import React from "react";
import Rumoney from "../assets/images/rumoney1.png"
import Pattern from "../assets/images/pattern.png"

export const Mission = () => {
  return (
    <div className="text-deep sm:py-10">
      <div className="container flex flex-col justify-center mx-1 sm:py-6 lg:py-6 lg:flex-row lg:justify-between">
        <div className="flex flex-row">
          <div className="flex flex-row space-y-4 sm:items-center sm:justify-center sm:space-y-0 sm:space-x-4 lg:justify-start">
            <img
              src={Pattern}
              alt="Pattern"
              className="object-contain mb-2 h-85 sm:h-90 lg:h-96 xl:h-112 2xl:h-128"
              placeholder="blur"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col justify-center p-4 text-left rounded-sm lg:max-w-2xl xl:max-w-2xl lg:text-left">
            <h1 className="text-2xl font-semibold sm:text-4xl">Our Mission</h1>
            <p className="mt-1 mb-2 font-base text-lg sm:mb-4">
            To be Africa's foremost quality talent provider.
            </p>{" "}
            <h1 className="text-2xl font-semibold sm:text-4xl">Our Vision</h1>
            <p className="mt-1 mb-2 font-base text-lg sm:mb-12">
              To empower 1 Million African students and youths with Digital
              Marketing skills by 2024 through trainings, resources and access
              to opportunities.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={Rumoney}
            alt="Rumoney"
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            placeholder="blur"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};
