import React from "react";
import logoLight from "/assets/logo-light.svg";
import logoDark from "/assets/logo-dark.svg";

const Footer = ({ isDark }) => {
  return (
    <footer className="border-t dark:border-slate-700 pt-8 pb-4">
      <div className="container mx-auto px-4">
        <div>
          <a href="#">
            <img
              src={isDark ? logoDark : logoLight}
              className="w-20"
              alt="Logo image"
            />
          </a>
          <p className="mt-3 text-slate-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="pt-16">
          <p className="text-sm text-slate-500 text-center">
            &copy; 2025 Solid. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
