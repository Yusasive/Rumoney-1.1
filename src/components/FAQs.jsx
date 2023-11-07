import React from "react";

const FAQs = () => {
  return (
    <div>
      <div className="max-w-screen-x mb-6 mx-auto text-deep px-5 bg-white min-h-sceen">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-5xl mt-5 tracking-tight">FAQ</h2>
          <p className="text-neutral-500 text-xl mt-3">
            Frequenty asked questions
          </p>
        </div>
        <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span> What is Rumoney</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="mt-3 group-open:animate-fadeIn">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
                repellendus!
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span> How does Rumoney operate?</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="mt-3 group-open:animate-fadeIn">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
                debitis recusandae nostrum animi quaerat adipisci aperiam
                facilis eum quibusdam consectetur.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span> Lorem ipsum dolor sit amet consectetur.?</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-deep mt-3 group-open:animate-fadeIn">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                sunt blanditiis a eos dolorum facilis odit, beatae voluptatum
                atque laudantium dicta? Aliquam impedit hic cupiditate veniam
                quaerat non nam voluptatum.
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing.?
                </span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="mt-3 group-open:animate-fadeIn">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernatur quibusdam, natus error totam doloremque ratione
                distinctio sapiente dolorum, quis repellendus, soluta facilis
                sequi quasi. Accusamus?
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span>
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing.?
                </span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="text-deep mt-3 group-open:animate-fadeIn">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus eos deleniti quis mollitia omnis beatae laudantium
                praesentium in, reprehenderit dolorem velit odio tempore officia
                fuga reiciendis repellendus suscipit!
              </p>
            </details>
          </div>
          <div className="py-5">
            <details className="group">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                <span> Lorem ipsum dolor sit amet consectetur.?</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="mt-3 group-open:animate-fadeIn">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                saepe maxime, iste ducimus doloremque qui. Atque, repellat
                tempora voluptas iure reiciendis est commodi quo officiis
                quibusdam.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
