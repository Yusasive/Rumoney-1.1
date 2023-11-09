import React from "react";
import Google from "../assets/icons/Google.png";
import Meta from "../assets/icons/meta.png";
import Microsoft from "../assets/icons/microsoft-5.png";
import Jobberman from "../assets/icons/JobberMan.png";
const Certified = () => {
  return (
    <div className="bg-white py-24 sm:py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-xl font-bold leading-8 text-black60">
          Our Students Are Certified By
        </h2>
        <div className="mx-1 mt-6 grid grid-cols-4 items-center gap-x-4 gap-y-2  sm:grid-cols-4 sm:gap-x-1 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src={Google}
            alt="Google"
            width={100}
            height={48}
            loading="lazy"
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src={Meta}
            alt="Meta"
            width={100}
            height={48}
            loading="lazy"
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src={Microsoft}
            alt="Microsft"
            width={100}
            height={48}
            loading="lazy"
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src={Jobberman}
            alt="Jobberman"
            width={100}
            height={48}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Certified;
