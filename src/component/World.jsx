import React from "react";
import { Link } from "react-router-dom";

const World = () => {
  return (
    <div className="py-8 bg-rumoney10 px-4 mx-auto  lg:py-16 lg:px-6">
      <p class="mb-6 text-lg font-medium text-black60 lg:text-xl sm:px-16 xl:px-48 ">
        Become A World Class Digital Marketer.
      </p>
      <Link
        to="/cohorts"
        class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-rumoney60 rounded-lg hover:bg-rumoney30 focus:ring-4">
        Join Our New Cohort
        <svg
          class="w-3.5 h-3.5 ml-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </Link>
    </div>
  );
};

export default World;
