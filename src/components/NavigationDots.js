import React from "react";
import { Link, useLocation } from "react-router-dom";
import { homeSections, subRouteDots } from "../constants/navigation";

const NavigationDots = ({ active }) => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  if (isHome) {
    return (
      <div className="app__navigation">
        {homeSections.map((item, index) => (
          <a
            href={`#${item}`}
            key={item + index}
            className="app__navigation-dot"
            aria-label={item}
            style={
              active === item
                ? { backgroundColor: "var(--secondary-color)" }
                : {}
            }
          >
            {" "}
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className="app__navigation">
      {subRouteDots.map((dot) => {
        const isActive =
          dot.path === "/"
            ? false
            : pathname.startsWith(dot.path);

        return (
          <Link
            to={dot.path}
            key={dot.label}
            className="app__navigation-dot"
            aria-label={dot.label}
            style={
              isActive
                ? { backgroundColor: "var(--secondary-color)" }
                : {}
            }
          >
            {" "}
          </Link>
        );
      })}
    </div>
  );
};

export default NavigationDots;
