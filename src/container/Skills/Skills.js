import React, {useEffect, useState} from "react"
import {motion} from "framer-motion";

import {AppWrap, MotionWrap} from "../../wrapper";
import {client, urlFor} from "../../client";
import './skills.scss'

const Skills = () => {
    const [experience, setExperience] = useState([])
    const [skills, setSkills] = useState([])

    useEffect(() => {
        const qExp = '*[_type == "experiences"]'
        const qSkills = '*[_type == "skills"]'

        client.fetch(qExp).then((data) => {
            setExperience(data)
        })

        client.fetch(qSkills).then((data) => {
            setSkills(data)
        })
    }, [])

    return (
        <>
            <h2 className="head-text">Skills and Work Experience</h2>
            <div className="app__skills-container">
                <motion.div
                    className="app__skills-list"
                >
                    {skills.map((skill) => (
                        <motion.div
                            whileInView={{opacity: [0, 1]}}
                            transition={{duration: 0.5}}
                            className="app__skills-item app__flex"
                            key={skill.name}
                        >
                            <div className="app__flex">
                                <img src={urlFor(skill.icon)} alt={skill.name}/>
                            </div>
                            <p className="p-text">{skill.name}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="app__skills-exp"
                >
                    {experience?.sort((a, b) => (a.year > b.year) ? -1 : 1).map((exp) => (
                        <motion.div
                            className="app__skills-exp-item"
                            key={exp.year}
                        >
                            <div className="app__skills-exp-card">
                                <div className="app__skills-exp-year">
                                    <p className="bold-text">{exp.year}</p>
                                </div>
                                <motion.div
                                    className="app__skills-exp-works"
                                >
                                    {exp.works.map((work) => (
                                        <>
                                            <motion.div
                                                whileInView={{opacity: [0, 1]}}
                                                transition={{duration: 0.5}}
                                                className="app__skills-exp-title"
                                                data-tip
                                                data-for={work.name}
                                                key={work.name}
                                            >
                                                <h4 className="bold-text">{work.name}</h4>
                                                <p className="p-text">{work.company}</p>
                                            </motion.div>
                                            <ul>
                                                {work.desc?.map((item, index) => (
                                                    <li key={item + index}>
                                                        {/*<CgCodeSlash/>*/}
                                                        <p className="p-text">{item}</p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </>
                                    ))}
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </>
    )
}

export default AppWrap(
    MotionWrap(Skills, 'app__skills'),
    'experience',
    "app__whitebg")