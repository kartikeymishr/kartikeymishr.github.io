import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import { Navbar, SubRouteNavbar, SubRouteLayout } from "./components";
import { ThemeProvider } from "./context/ThemeContext";
import HomePage from "./pages/HomePage";
// import AppsLanding from "./pages/apps/AppsLanding";
// import AppDetail from "./pages/apps/AppDetail";
// import Photography from "./pages/photography/Photography";
import ComingSoon from "./pages/ComingSoon";
import BlogListing from "./pages/blog/BlogListing";
import BlogPost from "./pages/blog/BlogPost";
import "./App.scss";

const AppShell = () => {
  const { pathname } = useLocation();

  const pageTheme = pathname.startsWith("/photography")
    ? "photography"
    : pathname.startsWith("/blog")
    ? "blog"
    : null;

  const isSubRoute =
    pageTheme !== null || pathname.startsWith("/apps");

  return (
    <div className="app" data-page={pageTheme}>
      {isSubRoute ? <SubRouteNavbar /> : <Navbar />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/apps"
          element={
            <SubRouteLayout>
              <ComingSoon title="Apps" />
            </SubRouteLayout>
          }
        />
        <Route
          path="/apps/:slug"
          element={
            <SubRouteLayout>
              <ComingSoon title="Apps" />
            </SubRouteLayout>
          }
        />
        <Route
          path="/photography"
          element={
            <SubRouteLayout>
              <ComingSoon title="Photography" />
            </SubRouteLayout>
          }
        />
        <Route
          path="/blog"
          element={
            <SubRouteLayout>
              <BlogListing />
            </SubRouteLayout>
          }
        />
        <Route
          path="/blog/:slug"
          element={
            <SubRouteLayout>
              <BlogPost />
            </SubRouteLayout>
          }
        />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <BrowserRouter>
          <AppShell />
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
