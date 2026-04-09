import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "./components";
import { ThemeProvider } from "./context/ThemeContext";
import HomePage from "./pages/HomePage";
import AppsLanding from "./pages/apps/AppsLanding";
import AppDetail from "./pages/apps/AppDetail";
import Photography from "./pages/photography/Photography";
import BlogListing from "./pages/blog/BlogListing";
import BlogPost from "./pages/blog/BlogPost";
import "./App.scss";

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/apps" element={<AppsLanding />} />
            <Route path="/apps/:slug" element={<AppDetail />} />
            <Route path="/photography" element={<Photography />} />
            <Route path="/blog" element={<BlogListing />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
