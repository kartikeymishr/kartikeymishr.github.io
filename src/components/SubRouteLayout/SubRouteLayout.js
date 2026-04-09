import React from "react";
import { SocialMedia, NavigationDots } from "../index";

const SubRouteLayout = ({ children }) => {
  return (
    <div className="app__container">
      <SocialMedia />

      <div className="app__wrapper app__flex">{children}</div>

      <NavigationDots />
    </div>
  );
};

export default SubRouteLayout;
