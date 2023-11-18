import React from "react";

const Home = ({ isDark }) => {
  const heroImg = isDark ? "/assets/hero-dark.png" : "/assets/hero-light.png";
  return (
    <section id="home" className="pt-24">
      <div className="container mx-auto px-4 lg:flex gap-16 items-center">
        <div>
          <p className="font-medium dark:text-white">
            🔥 Solid is one of the best options for you.
          </p>
          <h1 className="mt-3 text-3xl lg:text-4xl lg:max-w-2xl font-semibold dark:text-white">
            Complete Tailwind CSS Template for SaaS Website
          </h1>
          <p className="mt-4 text-slate-500 lg:max-w-2xl dark:text-slate-300">
            Solid is a complete Tailwind CSS template crafted specially for
            SaaS, Software Mobile App and Web App Sites.
          </p>
          <form className="mt-8">
            <input
              type="email"
              placeholder="Enter your email address"
              className="bg-transparent px-3 py-2 border dark:border-slate-700 dark:caret-slate-700 dark:text-white rounded-full text-sm"
            />
            <button
              type="submit"
              className="bg-slate-700 px-4 py-2 rounded-full ms-2 text-white text-sm transition-all hover:brightness-125"
            >
              Get Started
            </button>
            <p className="mt-3 text-sm dark:text-white font-thin">
              Try for free, no credit card required.
            </p>
          </form>
        </div>
        <div className="max-lg:hidden">
          <img
            src={heroImg}
            alt="hero image"
            className="shadow-md dark:shadow-none rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
