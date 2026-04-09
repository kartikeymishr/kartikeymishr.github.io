import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../constants";
import "./subroutenavbar.scss";

const SubRouteNavbar = () => {
  const logo = images.newLogoPurple;

  return (
    <nav className="app__navbar app__subroute-navbar">
      <div className="app__navbar-logo">
        <Link to="/">
          <img src={logo} alt="Kartikey Mishr" />
        </Link>
      </div>
    </nav>
  );
};

export default SubRouteNavbar;
