import React, { useState } from "react";
import ContactInfo from "./ContactInfo";

const Contact = (props) => {
  const initailState = { name: "", email: "", project: "", message: "" };
  const [messages, setMessages] = useState(initailState);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setMessages((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };

  const handleSubmit = (event) => {
    //To prevent default html form behaviour
    event.preventDefault();
    setMessages({ initailState });
  };
  return (
    <section className="contact section" id="contact" ref={props.reference}>
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="contact__container container grid">
        <div>
          <ContactInfo
            icon={<i className="uil uil-phone contact__icon"></i>}
            title="Call Me"
            subtitle="123-456-7890"
          />

          <ContactInfo
            icon={<i className="uil uil-envelope contact__icon"></i>}
            title="Email"
            subtitle="someone@email.com"
          />
        </div>

        <form action="" className="contact__form grid" onSubmit={handleSubmit}>
          <div className="contact__inputs grid">
            <div className="contact__content">
              <label htmlFor="name" className="contact__label">
                Name
              </label>
              <input
                type="text"
                className="contact__input"
                id="name"
                name="name"
                value={messages.name}
                onChange={handleChange}
              />
            </div>

            <div className="contact__content">
              <label htmlFor="email" className="contact__label">
                Email
              </label>
              <input
                type="email"
                className="contact__input"
                id="email"
                name="email"
                value={messages.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="contact__content">
            <label htmlFor="project" className="contact__label">
              Project
            </label>
            <input
              type="text"
              className="contact__input"
              id="project"
              name="project"
              value={messages.project}
              onChange={handleChange}
            />
          </div>

          <div className="contact__content">
            <label htmlFor="message" className="contact__label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              cols="0"
              rows="7"
              className="contact__input"
              value={messages.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <div>
            <a href="#contact" className="button button--flex">
              Send Message
              <i className="uil uil-message button__icon"></i>
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
