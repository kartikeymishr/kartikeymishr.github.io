import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>Kartikey Mishr — Software Engineer</title>
        <meta name="description" content="Software Engineer at McKinsey & Company. Building distributed systems, product-focused apps, and GenAI solutions." />
        <meta property="og:title" content="Kartikey Mishr — Software Engineer" />
        <meta property="og:description" content="Software Engineer at McKinsey & Company. Building distributed systems, product-focused apps, and GenAI solutions." />
        <meta property="og:url" content="https://www.kartikeymishr.com/" />
        <meta name="twitter:title" content="Kartikey Mishr — Software Engineer" />
        <meta name="twitter:description" content="Software Engineer at McKinsey & Company. Building distributed systems, product-focused apps, and GenAI solutions." />
      </Helmet>
      <Header />
      <About />
      <Skills />
      <Footer />
    </>
  );
};

export default HomePage;
