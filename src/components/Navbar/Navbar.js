import React, {useState} from "react";

import {images} from "../../constants";
import {HiMenuAlt4, HiX} from "react-icons/hi";
import {motion} from "framer-motion";
import {navigation} from "../../constants/navigation";
import pdf from "../../assets/Kartikey-Mishr-CV.pdf";
import './navbar.scss'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <a href="#home"><img src={images.newLogoPurple} alt=""/></a>
            </div>

            <ul className="app__navbar-links">
                {navigation.map((item) => (
                    <li key={`link-${item}`} className="app__flex p-text">
                        <div/>
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
            </ul>

            <div className="app__navbar-right">
                <a
                    className="app__navbar-resume-btn"
                    href={pdf}
                    download="Kartikey Mishr CV.pdf"
                    target="_blank"
                    rel="noreferrer"
                >
                    Download CV
                </a>
            </div>

            <div className="app__navbar-menu">
                <HiMenuAlt4 onClick={() => setToggle(true)}/>
                {toggle && (
                    <motion.div
                        whileInView={{x: [300, 0]}}
                        transition={{duration: 0.85, ease: 'easeOut'}}
                    >
                        <HiX onClick={() => setToggle(false)}/>
                        <ul>
                            {navigation.map((item) => (
                                <li key={item}>
                                    <a onClick={() => setToggle(false)} href={`#${item}`}>{item}</a>
                                </li>
                            ))}
                        </ul>
                        <a className="app__navbar-resume-btn" href={pdf} download="Kartikey Mishr CV.pdf">Download CV</a>
                    </motion.div>
                )}
            </div>
        </nav>
    )
}

export default Navbar