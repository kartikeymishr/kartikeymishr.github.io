import React, {useState} from "react"

import {AppWrap, MotionWrap} from "../../wrapper";
import {images} from "../../constants";
import {client} from "../../client";
import './footer.scss'

const Footer = () => {
    const [formData, setFormData] = useState({name: '', email: '', message: ''})
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    const {name, email, message} = formData

    const handleChangeInput = (event) => {
        const {name, value} = event.target

        setFormData({...formData, [name]: value})
    }

    const handleSubmit = () => {
        setLoading(true)

        const contact = {
            _type: 'contact',
            name: name,
            email: email,
            message: message
        }

        client.create(contact).then(() => {
            setLoading(false)
            setIsFormSubmitted(true)
        })

        setLoading(false)
    }

    return (
        <>
            <h2 className="head-text">Have a coffee & chat with me</h2>

            <div className="app__footer-cards">
                <div className="app__footer-card">
                    <img src={images.email} alt="email"/>
                    <a href="mailto:kartikeymishr@hotmail.com" className="p-text">kartikeymishr@hotmail.com</a>
                </div>
                <div className="app__footer-card">
                    <img src={images.mobile} alt="mobile"/>
                    <a href="tel:+91 9557069148" className="p-text">+91 9557069148</a>
                </div>
            </div>

            {!isFormSubmitted ? <div className="app__footer-form app__flex">
                    <div className="app__flex">
                        <input
                            className="p-text"
                            type="text"
                            placeholder="Your Name"
                            value={name}
                            name="name"
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div className="app__flex">
                        <input
                            className="p-text"
                            type="text"
                            placeholder="Your Email"
                            value={email}
                            name="email"
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div>
                    <textarea
                        className="p-text"
                        placeholder="Your Message"
                        value={message}
                        name="message"
                        id="message"
                        onChange={handleChangeInput}
                    />
                    </div>
                    <button
                        type="button"
                        className="p-text"
                        onClick={handleSubmit}
                    >
                        {loading ? 'Sending' : 'Send Message'}
                    </button>
                </div>
                : <div>
                    <h3 className="head-text">Thank You for getting in touch</h3>
                </div>}
        </>
    )
}

export default AppWrap(
    MotionWrap(Footer, 'app__footer'),
    'contact',
    'app__primarybg'
)