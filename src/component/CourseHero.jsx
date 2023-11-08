import React from "react";
import Courses from "../assets/images/CoursesImage.png";
import { Link } from "react-router-dom";

const CourseHero = () => {
  return (
    <div>
      <div className="container flex flex-col justify-center p-2 mt-10 mb-2 sm:py-2 lg:py-6 lg:flex-row lg:justify-between">
        <div className="flex items-center justify-center ml-4 p-6 mt-10 lg:mr-4 lg:mt-6 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={Courses}
            alt="Course"
            className="object-contain object-left-bottom h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            placeholder="blur"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-center p-4 text-left  sm:ml-2 lg:ml-16 rounded-sm lg:max-w-2xl xl:max-w-2xl lg:text-left">
          <h1 className="text-2xl text-black60 mt-6 font-bold sm:text-3xl">
            Accelerator Digital Marketing Course
            
          </h1>
          <p className="mt-2 mb-2 text-black60 text-lg font-normal sm:mb-4">
            Take a step today to become Digital marketing genius and get
            certified by by Google, Meta, Microsoft and Jobberman. Learn and
            earn even while you are still a student for{" "}
            <span className="text-rumoney40 text-xl">FREE</span>
          </p>
          <div class="flex mt-4">
            <Link
              to="/cohort"
              class="uppercase py-2 text-bold px-4 rounded-md bg-rumoney60 border-2 border-transparent text-white text-md mr-4 hover:bg-rumoney30">
              Join the Next Cohort
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseHero;
