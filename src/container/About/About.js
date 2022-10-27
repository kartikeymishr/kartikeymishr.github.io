import React, {useEffect, useState} from "react"

import './about.scss'
import {client} from "../../client";
import {AppWrap, MotionWrap} from "../../wrapper";


const About = () => {
    const [abouts, setAbouts] = useState([])

    useEffect(() => {
        const query = '*[_type == "abouts"]'

        client.fetch(query).then((data) => setAbouts(data))
    }, [])

    const handleDownload = () => {
        fetch('src/assets/Kartikey-Mishr-CV.pdf').then((res) => {
            res.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob)
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Kartikey-Mishr-CV.pdf'
                alink.click()
            })
        })
    }

    return (
        <>
            <div className="app__profiles">
                <div className="app__profiles-desc">
                    <h2 className="head-text">
                        A little about <span>Myself</span>
                    </h2>
                    <p>
                        I'm a <span>Full Stack Developer</span> located in Delhi, India. I have a serious passion for
                        creating beautiful,
                        engaging and accessible web apps.
                    </p>
                    <p>
                        I have 4+ years of hands-on experience developing distributed systems and web applications
                        utilizing
                        a wide range of front-end and back-end technologies
                        including <span>React</span>, <span>Redux</span>, <span>Java
                        8</span>, and <span>Spring Boot </span>
                        with <span>SQL</span> as well as <span>NoSQL</span> integration experience. I love constantly
                        learning and experimenting
                        with
                        new technologies in both the front-end and back-end spectrum.
                    </p>
                    <p>
                        I'm a huge Formula 1 nerd, I thoroughly enjoy touring cross country on my bike, and I take
                        pictures
                        and make music sometimes.
                    </p>

                    {/*<div className="app__profiles-cert">*/}
                    {/*    <h4>Certifications</h4>*/}
                    {/*    <div>*/}
                    {/*        <h5>Java Programming Masterclass</h5>*/}
                    {/*        <a href="https://www.udemy.com/certificate/UC-620d12d0-63f0-4b1a-b018-3a2e3b31325b/" target="_blank" rel="noreferrer">*/}
                    {/*            <p>Certificate</p>*/}
                    {/*        </a>*/}
                    {/*    </div>*/}
                    {/*    <div>*/}
                    {/*        <h5>Modern React with Redux</h5>*/}
                    {/*        <a href="https://www.udemy.com/certificate/UC-5f970220-4190-40ee-9cab-ed0ba7fcc60b/" target="_blank" rel="noreferrer">*/}
                    {/*            <p>Certificate</p>*/}
                    {/*        </a>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
                <div className="app__profiles-items">

                </div>
            </div>
        </>
    )
}

export default AppWrap(MotionWrap(About, 'app__about'), 'about', "app__whitebg")