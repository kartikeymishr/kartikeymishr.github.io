import React from "react";
import { Helmet } from "react-helmet-async";
import "./ComingSoon.scss";

const ComingSoon = ({ title = "Coming Soon" }) => {
  return (
    <div className="app__coming-soon">
      <Helmet>
        <title>{title} — Kartikey Mishr</title>
      </Helmet>

      <div className="app__coming-soon-content">
        <div className="app__coming-soon-icon">✦</div>
        <h2 className="head-text">
          <span>{title}</span>
        </h2>
        <p className="p-text app__coming-soon-subtitle">
          Something exciting is on the way. Check back soon.
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
