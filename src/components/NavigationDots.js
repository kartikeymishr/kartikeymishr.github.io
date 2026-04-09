import React from "react";
import { homeSections } from "../constants/navigation";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {homeSections.map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          aria-label={item}
          style={
            active === item ? { backgroundColor: "var(--secondary-color)" } : {}
          }
        >
          {" "}
        </a>
      ))}
    </div>
  );
};

export default NavigationDots;
