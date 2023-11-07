import React from "react";
import Omale from "../assets/images/omale.png";

const UniqueSME = () => {
  return (
    <div>
      <div className="container flex flex-col justify-center bg-rumoney10 sm:bg-unique-sme p-2 mt-2 mb-8 sm:py-2 lg:py-6  lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-4 text-left sm:w-1/3 sm:ml-2 lg:ml-16 rounded-sm lg:max-w-2xl xl:max-w-2xl">
          <img
            src={Omale}
            alt="HeroImage"
            className="object-contain object-left-bottom h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            placeholder="blur"
            loading="lazy"
          />
        </div>
        <div className="text-left p-6 mt-2 sm:w-2/3 lg:mr-4 lg:mt-2 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <h1 className="text-black60 text-3xl font-semibold">
            Why We're Unique <br /> To SMEs
          </h1>
          <div className="flex flex-col justify-center py-2 lg:flex-row lg:justify-between">
            <div className="text-black60">
              <p className="text-base py-2 font-medium">
                1. We make hiring "fast" and easy
              </p>
              <p className="text-base py-2 font-medium">
                2. Affordable Pricing; Find the Best talent for your business
                just at the size of your budget (Check Marketer Hire for
                Reference)
              </p>
              <p className="text-base py-2 font-medium">
                3. Get trained, proven and vetted talents
              </p>
            </div>
            <div className="text-black60 sm:ml-3">
              <p className="text-base py-2 font-medium">
                4. Personal Support - We'll work directly with you to help you
                ease the process and handmatch the best talent for your
                business.
              </p>
              <p className="text-base py-2 font-medium">
                5. Our talents are world class (Certified by Google & Co)
              </p>

              <div class="flex mt-2">
                <a
                  href="/hire-marketer"
                  class="uppercase py-2 text-bold px-4 rounded-md bg-rumoney60 border-2 border-transparent text-white text-md mr-4 hover:bg-rumoney30">
                  Hire a Marketer
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniqueSME;
