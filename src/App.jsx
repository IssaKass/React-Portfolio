import React from "react";
import Header from "./components/Header";
import Features from "./components/Features";
import Integrations from "./components/Integrations";
import PricingPlans from "./components/PricingPlans";
import NewsBlogs from "./components/NewsBlogs";
import Home from "./components/Home";
import Footer from "./components/Footer";

const DARKMODE_KEY = "darkMode";
const DARKMODE_DEFAULT = false;

const App = () => {
  const storedDarkModeValue =
    localStorage.getItem(DARKMODE_KEY) === "true" || DARKMODE_DEFAULT;

  const [isDark, setIsDark] = React.useState(storedDarkModeValue);
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  React.useEffect(() => {
    localStorage.setItem(DARKMODE_KEY, JSON.stringify(isDark));
  }, [isDark]);

  const toggleDark = () => {
    setIsDark((isDark) => !isDark);
  };

  return (
    <div className={`${isDark ? "dark" : ""}`}>
      <div className="min-h-screen bg-white dark:bg-slate-900">
        <Header isDark={isDark} toggleDark={toggleDark} />
        <main className="pt-16">
          <Home isDark={isDark} />
          <Features isDark={isDark} features={data.features} />
          <Integrations isDark={isDark} />
          <PricingPlans isDark={isDark} pricingPlans={data.pricingPlans} />
          <NewsBlogs isDark={isDark} newsBlogs={data.newsBlogs} />
        </main>
        <Footer isDark={isDark} />
      </div>
    </div>
  );
};

export default App;
