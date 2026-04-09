import React from "react";

// import {client} from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./about.scss";

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
            A little about <span>Myself</span>
            <br />
            {/*Me, Myself & <span>I</span>*/}
          </h2>
          <p>
            I'm a <span>Software Engineer</span> currently
            working at <span>McKinsey & Company</span>, based in New Delhi, India. 
          </p>
          <p>
            Over the past <span>7+ years</span>, I've worked across building{" "}
            <span>distributed systems</span> and product-focused
            applications — starting my journey at <span>IBM</span>, and now working
            closely with clients in the <span>Life Sciences</span> space.
          </p>
          <p>
            More recently, my work has been centered around{" "}
            <span>GenAI</span> — not just experimenting with LLMs, but
            designing systems that can reliably use them in real-world products.
            The interesting challenges, I've found, are rarely about the model
            itself, but about everything around it: <span>workflows</span>, <span>failure handling</span>,
            and <span>making inherently probabilistic systems feel dependable</span>.
          </p>
          <p>
            I'm particularly drawn to building products that balance{" "}
            <span>strong backend systems</span> with{" "}
            <span>clean, thoughtful interfaces</span> — where what you see is
            simple, but what's happening underneath is doing meaningful work.
          </p>
          <p>
            Outside of work, I'm a huge <span>Formula 1</span> nerd, I spend
            time riding across the country on my <span>bike</span>, exploring <span>photography</span>,
            and getting back into <span>music production</span> — all of which, in different
            ways, shape how I think about systems, design, and experience.
          </p>
        </div>
        <div className="app__profiles-items">
          {/*    Empty div for now       */}
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__whitebg"
);
