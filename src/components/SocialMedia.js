import React from "react"
import {BsTwitter, BsInstagram, BsGithub, BsLinkedin} from "react-icons/bs";
import {FaFacebookF} from "react-icons/fa";

const SocialMedia = () => {
    return (
        <div className="app__social">
            <a href="https://github.com/kartikeymishr">
                <div>
                    <BsGithub/>
                </div>
            </a>
            <a href="https://www.linkedin.com/in/kartikeymishr/">
                <div>
                    <BsLinkedin/>
                </div>
            </a>
        </div>
    )
}

export default SocialMedia