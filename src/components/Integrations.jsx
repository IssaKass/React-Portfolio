import React from "react";
import SectionHeading from "./SectionHeading";
import { FaArrowRight } from "react-icons/fa6";

const Integrations = () => {
  return (
    <section id="integrations" className="dark:bg-slate-950">
      <div className="container mx-auto px-4">
        <SectionHeading
          subtitle={"Integrations"}
          title={"Remotely maintain your data, from anywhere, anytime."}
          info={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus."
          }
        />
        <div
          className="lg:w-8/12 mx-auto py-8 px-10 mt-8 rounded-2xl flex flex-col gap-y-4 md:flex-row md:gap-x-12 items-center
        bg-gradient-to-b from-blue-200 to-blue-50 dark:from-blue-950 dark:to-slate-800
        "
        >
          <div>
            <h3 className="text-2xl font-bold dark:text-white">
              Join with us today & incrud-ease your productivity
            </h3>
            <p className="text-slate-500 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam
              ante in maximus.
            </p>
          </div>
          <a
            href="#"
            className="flex items-center justify-center gap-2 w-36 min-w-max px-4 bg-slate-700 py-2 rounded-full ms-2 text-white text-sm transition-all hover:brightness-125"
          >
            Sign up free <FaArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
