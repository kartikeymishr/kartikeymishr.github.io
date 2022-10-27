import React from "react"
import {navigation} from "../constants/navigation";

const NavigationDots = ({active}) => {
    return (
        <div className="app__navigation">
            {navigation.map((item, index) => (
                <a
                    href={`#${item}`}
                    key={item + index}
                    className="app__navigation-dot"
                    style={active === item ? {backgroundColor: 'var(--new-blue-color)'} : {}}
                />
            ))}
        </div>
    )
}

export default NavigationDots