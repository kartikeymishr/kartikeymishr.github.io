import React from "react";

import { About, Footer, Header, Skills } from "./container";
import { Navbar } from "./components";
import { ThemeProvider } from "./context/ThemeContext";
import "./App.scss";

const App = () => {
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />

        <Header />
        <About />
        <Skills />
        {/*<Work/>*/}
        {/*<Testimonials/>*/}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
