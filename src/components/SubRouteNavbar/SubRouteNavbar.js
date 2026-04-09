import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { images } from "../../constants";
import { ThemeContext } from "../../context/ThemeContext";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import "./subroutenavbar.scss";

const SubRouteNavbar = () => {
  const logo = images.newLogoPurple;
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="app__navbar app__subroute-navbar">
      <div className="app__navbar-logo">
        <Link to="/">
          <img src={logo} alt="Kartikey Mishr" />
        </Link>
      </div>

      <div className="app__subroute-navbar-right">
        <IconButton
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          className="app__navbar-theme-toggle"
        >
          {theme === "dark" ? (
            <LightModeIcon sx={{ color: "#ffc107" }} />
          ) : (
            <DarkModeIcon sx={{ color: "var(--secondary-color)" }} />
          )}
        </IconButton>
      </div>
    </nav>
  );
};

export default SubRouteNavbar;
