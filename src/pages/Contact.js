import React from "react";
import FAQs from "../component/FAQs";
import ContactForm from "../component/ContactForm";

const Contact = () => {
  return (
    <div>
      <section className="bg-center bg-no-repeat mt-24 bg-contact-banner bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-4 lg:py-20">
          <h1 className="mb-4 text-4xl mt-10 font-extrabold tracking-tight leading-none BG text-white md:text-5xl lg:text-6xl">
            Contact Us
          </h1>
        </div>
      </section>
      <FAQs />
      <ContactForm />
    </div>
  );
};

export default Contact;
