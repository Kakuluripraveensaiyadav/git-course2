import React, { useEffect, useState } from "react";
import { useLanguage } from "./LanguageContext"; // Importing LanguageContext
import "./ContactUs.css";

const ContactUs = () => {
  const { registerText, translations } = useLanguage(); // Access context
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const contactText = {
    heading: "Contact Us",
    emailLabel: "Email",
    descriptionLabel: "Description",
    buttonText: "Send Message",
  };

  useEffect(() => {
    // Register the text that needs to be translated
    registerText(contactText.heading);
    registerText(contactText.emailLabel);
    registerText(contactText.descriptionLabel);
    registerText(contactText.buttonText);
  }, [registerText]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:jobhub.ac.in@gmail.com?subject=Contact Form Submission&body=From: ${email}%0D%0A%0D%0AMessage: ${description}`;
    window.location.href = mailtoLink;
  };

  return (
    <section className="contact">
      <div className="contact-image">
        <img src="/Contact.png" alt="Contact Us" />
      </div>
      <div className="contact-form">
        <h2>{translations[contactText.heading] || contactText.heading}</h2> {/* Display translated or original text */}
        <form onSubmit={handleSendMessage}>
          <label htmlFor="email">{translations[contactText.emailLabel] || contactText.emailLabel}</label> {/* Translated or original */}
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="description">{translations[contactText.descriptionLabel] || contactText.descriptionLabel}</label> {/* Translated or original */}
          <textarea
            id="description"
            name="description"
            placeholder="Enter your message"
            rows="5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
          <button type="submit">
            {translations[contactText.buttonText] || contactText.buttonText} {/* Translated or original */}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
