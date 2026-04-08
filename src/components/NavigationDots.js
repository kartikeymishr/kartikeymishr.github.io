import React from "react";
import { navigation } from "../constants/navigation";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {navigation.map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          aria-label={item}
          style={
            active === item ? { backgroundColor: "var(--secondary-color)" } : {}
          }
        > </a>
      ))}
    </div>
  );
};

export default NavigationDots;
