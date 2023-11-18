import React from "react";
import logoLight from "/assets/logo-light.svg";
import logoDark from "/assets/logo-dark.svg";
import { FaBars, FaX, FaSun, FaMoon } from "react-icons/fa6";

const Header = ({ isDark, toggleDark }) => {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  function toggleNav() {
    setIsNavOpen((isNavOpen) => !isNavOpen);
  }

  function closeNav() {
    setIsNavOpen(false);
  }

  return (
    <header className="min-h-16 bg-white dark:bg-slate-900 dark:text-white fixed w-full top-0 shadow-md z-50">
      <div className="container py-4 px-4 mx-auto flex flex-wrap justify-between items-center">
        <a href="#">
          <img src={isDark ? logoDark : logoLight} alt="Logo image" />
        </a>
        <nav
          className={`${
            isNavOpen ? "block max-lg:order-2" : "hidden"
          } max-lg:w-full max-lg:mt-4 lg:block max-lg:dark:bg-slate-800 max-lg:bg-slate-100 max-lg:rounded-lg`}
        >
          <ul className="nav-list lg:flex lg:gap-6">
            <li className="nav-item">
              <a className="nav-link" href="#home" onClick={closeNav}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#features" onClick={closeNav}>
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#integrations" onClick={closeNav}>
                Integrations
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#pricing" onClick={closeNav}>
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#news-blogs" onClick={closeNav}>
                News & Blogs
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <button className="btn-interface" onClick={toggleDark}>
            {isDark ? <FaSun size={18} /> : <FaMoon size={18} />}
          </button>
          <button className="btn-interface lg:hidden" onClick={toggleNav}>
            {isNavOpen ? <FaX size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
