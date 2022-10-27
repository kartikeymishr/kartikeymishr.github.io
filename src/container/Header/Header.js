import React from "react"
import './header.scss'
import {motion} from "framer-motion";
import {images} from "../../constants";
import {AppWrap} from "../../wrapper";
import {Typewriter} from "react-simple-typewriter";

const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: 'easeInOut'
        }
    }
}

const Header = () => {
    return (
        <div className="app__header app__flex">
            <motion.div
                whileInView={{x: [-100, 0], opacity: [0, 1]}}
                transition={{duration: 0.5}}
                className="app__header-info"
            >
                <div className="app__header-badge">
                    <div className="badge-cmp app__flex">
                        <span>👋</span>
                        <div style={{marginLeft: 20}}>
                            <p className="p-text">Hey there, I am</p>
                            <h1 className="head-text">Kartikey Mishr</h1>
                        </div>
                    </div>

                    <div className="tag-cmp app__flex">
                        <p className="p-text">A Full Stack Software Engineer</p>
                        <p className="p-text">Experienced in Java, Spring Boot, React and Redux</p>
                    </div>
                </div>
            </motion.div>

            <motion.div
                whileInView={{opacity: [0, 1]}}
                transition={{duration: 0.5, delayChildren: 0.5}}
                className="app__header-typewriter"
            >
                {/*<img src={images.profile} alt="profile-bg"/>*/}
                {/*<motion.img*/}
                {/*    whileInView={{scale: [0, 1]}}*/}
                {/*    transition={{duration: 1, ease: 'easeInOut'}}*/}
                {/*    src={images.gradientbg}*/}
                {/*    alt="profile-circle"*/}
                {/*    className="overlay_circle"*/}
                {/*/>*/}

                <h1>
                    I love{' '}
                    <span>
                        <Typewriter
                            words={['coding.', 'design.', 'photography.', 'pizzas!']}
                            loop={15}
                            cursor
                            cursorStyle='|'
                            typeSpeed={85}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </h1>
            </motion.div>

            <motion.div
                variant={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className="app__header-circles"
            >
                {[images.react, images.java, images.spring].map((circle, index) => (
                    <div className="circle-cmp app__flex" key={`circle-${index}`}>
                        <img src={circle} alt="circle"/>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

export default AppWrap(Header, 'home')