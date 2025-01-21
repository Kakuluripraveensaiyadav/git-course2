import React, { useEffect } from "react";
import { useLanguage } from "./LanguageContext";// Relative path from AboutUs to LanguageContext
 // Importing LanguageContext
import "./AboutUs.css";

const AboutUs = () => {
  const { registerText, translations } = useLanguage(); // Access context
  const aboutUsText = {
    heading: "About Us",
    paragraph: "Welcome to our company! We are dedicated to delivering the best services to our clients. Our mission is to innovate and excel in everything we do. With a team of skilled professionals, we ensure top-notch quality and customer satisfaction. Let's work together to create something amazing!"
  };

  useEffect(() => {
    // Register the text that needs to be translated
    registerText(aboutUsText.heading);
    registerText(aboutUsText.paragraph);
  }, [registerText]);
 
  return (
    <section className="about-us">
      <div className="about-description">
        <h1>{translations[aboutUsText.heading] || aboutUsText.heading}</h1> {/* Display translated or original text */}
        <p>{translations[aboutUsText.paragraph] || aboutUsText.paragraph}</p> {/* Display translated or original text */}
      </div>
      <div className="about-image">
        <img 
          src="/About_us.png" 
          alt="About Us" 
        />
      </div>
    </section>
  );
};

export default AboutUs;
