import React from "react";

const NewsLetter = () => {
  return (
    <section class="bg-orange-50 sm:bg-email-list">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-md sm:text-center">
          <h2 class="mb-2 text-xl tracking-tight font-semibold text-black60 sm:text-2xl">
            Know What We Are Up To
          </h2>
          <p class="mx-auto mb-6 max-w-2xl font-medium text-black60 md:mb-10 sm:text-xl ">
            Be the first to get updates from our fast growing community of
            talents.
          </p>
          <form action="#">
            <div class="items-center mx-auto mb-3 space-y-2 max-w-screen-sm sm:flex sm:space-y-0">
              <div class="relative w-full">
                <label
                  for="email"
                  class="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Email address
                </label>
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <input
                  class="block p-3 pl-10 w-full text-sm text-gray-900 bg-orange-50 rounded-lg border border-rumoney10 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-orange-50 dark:border-rumoney10 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter your email"
                  type="email"
                  id="email"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  class="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-rumoney50 border-rumoney30 sm:rounded-none sm:rounded-r-lg hover:bg-rumoney30">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
