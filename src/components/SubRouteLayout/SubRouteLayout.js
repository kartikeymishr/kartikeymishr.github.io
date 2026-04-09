import React from "react";
import { SocialMedia } from "../index";
import "./subroutelayout.scss";

const SubRouteLayout = ({ children }) => {
  return (
    <>
      <div className="app__subroute-social">
        <SocialMedia />
      </div>
      {children}
    </>
  );
};

export default SubRouteLayout;
