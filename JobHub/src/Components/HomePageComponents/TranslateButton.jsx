import React, { useState } from "react";
import { useLanguage } from "./LanguageContext"; // Importing LanguageContext
import "./TranslateButton.css";

const TranslationButton = () => {
  const [isPopupActive, setPopupActive] = useState(false);
  const { setLanguage, fetchTranslations } = useLanguage(); // Using context for language and fetching translations

  const handleButtonClick = () => {
    setPopupActive((prevState) => !prevState);
  };

  const handleOptionSelect = (e) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage); // Update the language in the context
    fetchTranslations(); // Fetch the translations for the new language
    setPopupActive(false); // Close the language selector popup
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setPopupActive(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <button className="translate-btn" onClick={handleButtonClick}>
        🌐
      </button>
      <div className="translate-text">Translate</div>

      <div className={`popup ${isPopupActive ? "active" : ""}`} onClick={(e) => e.stopPropagation()}>
        <p>Select a language </p>
        <select id="language-selector" onChange={handleOptionSelect}>
          <option value="en">English</option>
          <option value="te">Telugu</option>
          <option value="hi">Hindi</option>
          <option value="ta">Tamil</option>
          <option value="ml">Malayalam</option>
        </select>
      </div>

      {isPopupActive && (
        <div className="overlay" onClick={() => setPopupActive(false)}></div>
      )}
    </>
  );
};

export default TranslationButton;
