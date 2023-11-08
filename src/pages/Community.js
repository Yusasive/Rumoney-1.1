import React from "react";
import Communities from "../assets/images/community.png";

const Community = () => {
  return (
    <div>
      <section className="bg-center bg-no-repeat mt-24 bg-about-banner bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-4 lg:py-20">
          <h1 className="mb-4 text-4xl mt-10 font-extrabold tracking-tight leading-none BG text-white md:text-5xl lg:text-6xl">
            Community
          </h1>
        </div>
      </section>

      <div className="container flex flex-col justify-center p-2 sm:mt-24 mb-2 sm:py-2 lg:py-6 lg:flex-row lg:justify-between">
        <div className="flex flex-col items-start sm:w-1/2 justify-center p-6 sm:mt-10 lg:mr-4 lg:mt-6">
          <h1 className=" text-3xl text-left text-black60 mt-6 font-semibold sm:text-4xl">
            Join Our Student
            <br /> Community
          </h1>
          <p className="mt-2 mb-2 text-left text-black60 text-lg font-normal">
            Learn, grow and become a Digital Marketing Genius with other great
            minds. Be the first to get updates on our learning resources, events
            and opportunities.
          </p>
          <img
            src={Communities}
            alt="Community"
            className="object-contain object-left-bottom h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            placeholder="blur"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col sm:w-1/2 justify-center p-4 text-left  sm:ml-2 lg:ml-16 rounded-sm lg:max-w-2xl xl:max-w-2xl lg:text-left">
          <form class="mt-6 w-full px-8 py-4 sm:py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl lg:max-w-xl shadow-rumoney30/50">
            <div class="flex-1">
              <label class="block mb-2 text-sm text-black60">First Name</label>
              <input
                type="text"
                placeholder="Yusuf"
                class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-rumoney10 rounded-md dark:placeholder-gray-600  dark:text-gray-300  focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div class="flex-1">
              <label class="block mb-2 text-sm text-black60">Last Name Name</label>
              <input
                type="text"
                placeholder="Abdullahi"
                class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-rumoney10 rounded-md dark:placeholder-gray-600  dark:text-gray-300  focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div class="flex-1 mt-6">
              <label class="block mb-2 text-sm text-black60">
                Email address
              </label>
              <input
                type="email"
                placeholder="yusufabdullahi2910@gmail.com"
                class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-rumoney10 rounded-md  dark:text-gray-300  focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div class="flex-1">
              <label class="block mb-2 text-sm text-black60">Date of Birth</label>
              <input
                type="date"
                placeholder="29-10-1999"
                class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-rumoney10 rounded-md dark:placeholder-gray-600  dark:text-gray-300  focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div class="flex-1">
              <label class="block mb-2 text-sm text-black60">Country</label>
              <input
                type="text"
                placeholder="Nigeria"
                class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-rumoney10 rounded-md dark:placeholder-gray-600  dark:text-gray-300  focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div class="flex-1">
              <label class="block mb-2 text-sm text-black60">Gender</label>
              <input
                type="text"
                placeholder="Male"
                class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-rumoney10 rounded-md dark:placeholder-gray-600  dark:text-gray-300  focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div class="flex-1">
              <label class="block mb-2 text-md font-semibold text-black60">What Would You Like To Receive From Us?</label>
               <input
                type="radio"
                placeholder="Yusuf Abdullahi"
                class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-rumoney10 rounded-md dark:placeholder-gray-600  dark:text-gray-300  focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <button class="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-rumoney50 rounded-md hover:bg-rumoney30 focus:outline-none focus:ring focus:ring-rumoney20 focus:ring-opacity-50">
              Join Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Community;
