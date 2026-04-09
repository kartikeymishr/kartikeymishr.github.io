import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { About, Footer, Header, Skills } from "../container";

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, [location.state]);

  return (
    <>
      <Header />
      <About />
      <Skills />
      <Footer />
    </>
  );
};

export default HomePage;
