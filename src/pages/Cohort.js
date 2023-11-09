import React from "react";

const Cohort = () => {
  return (
    <div>
      <section className="bg-center bg-no-repeat mt-24 bg-contact-banner bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-4 lg:py-20">
          <h1 className="mb-4 text-4xl mt-10 font-extrabold tracking-tight leading-none BG text-white md:text-5xl lg:text-6xl">
            Cohort
          </h1>
        </div>
      </section>

      <div>
        <iframe
          src={`https://docs.google.com/forms/d/e/1FAIpQLSeR08Zwitk744JCncHrxhD7WkNIK7YB5zv_5J5ZgjRByq3s6w/viewform?embedded=true`}
          frameBorder="0"
          allowFullScreen
          title="Embedded form"
          className="w-full h-screen"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Cohort;
