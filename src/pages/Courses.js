import React from "react";
import CourseHero from "../component/CourseHero";
import LiveSession from "../component/LiveSession";

const Courses = () => {
  return (
    <div>
      <section className="bg-center bg-no-repeat mt-24 bg-contact-banner bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-4 lg:py-20">
          <h1 className="mb-4 text-4xl mt-10 font-extrabold tracking-tight leading-none BG text-white md:text-5xl lg:text-6xl">
            Courses
          </h1>
          <p className="text-white text-lg font-normal">
            Become a Rumoney certified Genuis by <br /> taking some of our
            available courses
          </p>
        </div>
      </section>
      <CourseHero />
      <LiveSession />
      <LiveSession />
    </div>
  );
};

export default Courses;
