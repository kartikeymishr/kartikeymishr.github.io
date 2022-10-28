import React from "react"

// import {client} from "../../client";
import {AppWrap, MotionWrap} from "../../wrapper";
import './about.scss'


const About = () => {
    // const [abouts, setAbouts] = useState([])

    /*useEffect(() => {
        const query = '*[_type == "abouts"]'

        client.fetch(query).then((data) => setAbouts(data))
    }, [])*/

    return (
        <>
            <div className="app__profiles">
                <div className="app__profiles-desc">
                    <h2 className="head-text">
                        A little about <span>Myself</span><br/>
                        {/*Me, Myself & <span>I</span>*/}
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
                        I'm a huge Formula 1 nerd, I thoroughly enjoy touring across the country on my bike, and I take
                        pictures
                        and make music sometimes.
                    </p>
                </div>
                <div className="app__profiles-items">
                    {/*    Empty div for now       */}
                </div>
            </div>
        </>
    )
}

export default AppWrap(
    MotionWrap(About, 'app__about'),
    'about',
    "app__whitebg")