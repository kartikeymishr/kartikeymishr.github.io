import React, { useState } from "react";

import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import { writeClient } from "../../client";
import "./footer.scss";

const NAME_MAX = 60;
const MESSAGE_MAX = 500;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const validate = (fields = formData) => {
    const errs = {};

    if (!fields.name.trim()) errs.name = "Name is required.";
    else if (fields.name.trim().length > NAME_MAX)
      errs.name = `Name must be ${NAME_MAX} characters or fewer.`;

    if (!fields.email.trim()) errs.email = "Email is required.";
    else if (!EMAIL_RE.test(fields.email.trim()))
      errs.email = "Enter a valid email address.";

    if (!fields.message.trim()) errs.message = "Message is required.";
    else if (fields.message.trim().length > MESSAGE_MAX)
      errs.message = `Message must be ${MESSAGE_MAX} characters or fewer.`;

    return errs;
  };

  const handleChangeInput = (event) => {
    const { name: field, value } = event.target;
    const next = { ...formData, [field]: value };
    setFormData(next);

    if (touched[field]) {
      const fieldErr = validate(next)[field];
      setErrors((prev) => ({ ...prev, [field]: fieldErr || "" }));
    }
  };

  const handleBlur = (event) => {
    const { name: field } = event.target;
    setTouched((prev) => ({ ...prev, [field]: true }));
    const fieldErr = validate(formData)[field];
    setErrors((prev) => ({ ...prev, [field]: fieldErr || "" }));
  };

  const isSubmitDisabled =
    !name.trim() || !email.trim() || !message.trim() || loading;

  const handleSubmit = () => {
    const errs = validate();
    setErrors(errs);
    setTouched({ name: true, email: true, message: true });

    if (Object.keys(errs).length > 0) return;

    setLoading(true);

    writeClient
      .create({
        _type: "contact",
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
      })
      .then(() => {
        setIsFormSubmitted(true);
      })
      .catch(() => {
        setErrors((prev) => ({
          ...prev,
          message: "Something went wrong. Please try again.",
        }));
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <h2 className="head-text">Have a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:kartikeymishr@hotmail.com" className="p-text">
            kartikeymishr@hotmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel:+91 9557069148" className="p-text">
            +91 9557069148
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className={`app__flex${errors.name ? " app__footer-input-error" : ""}`}>
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              value={name}
              name="name"
              maxLength={NAME_MAX}
              onChange={handleChangeInput}
              onBlur={handleBlur}
            />
          </div>
          {touched.name && errors.name && (
            <span className="app__footer-field-error">{errors.name}</span>
          )}

          <div className={`app__flex${errors.email ? " app__footer-input-error" : ""}`}>
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              value={email}
              name="email"
              onChange={handleChangeInput}
              onBlur={handleBlur}
            />
          </div>
          {touched.email && errors.email && (
            <span className="app__footer-field-error">{errors.email}</span>
          )}

          <div className={errors.message ? "app__footer-input-error" : ""}>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              maxLength={MESSAGE_MAX}
              onChange={handleChangeInput}
              onBlur={handleBlur}
            />
            <span className="app__footer-char-count">
              {message.length}/{MESSAGE_MAX}
            </span>
          </div>
          {touched.message && errors.message && (
            <span className="app__footer-field-error">{errors.message}</span>
          )}

          <button
            type="button"
            className="p-text"
            onClick={handleSubmit}
            disabled={isSubmitDisabled}
          >
            {loading ? "Sending…" : "Send Message"}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank You for getting in touch</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__primarybg"
);
