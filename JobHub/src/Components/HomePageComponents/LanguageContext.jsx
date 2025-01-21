import React, { createContext, useContext, useState, useEffect } from "react";
import axios from 'axios';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // Default language
  const [translations, setTranslations] = useState({}); // Store translations
  const [textToTranslate, setTextToTranslate] = useState([]);

  const fetchTranslations = async () => {
    try {
      const response = await axios.post("http://localhost:8086/api/translate", {
        text: textToTranslate,
        targetLanguage: language,
      });
      setTranslations(response.data.translations.reduce((acc, curr, idx) => {
        acc[textToTranslate[idx]] = curr; // Map original text to translated text
        return acc;
      }, {}));
    } catch (error) {
      console.error("Error fetching translations:", error);
    }
  };

  useEffect(() => {
    if (textToTranslate.length > 0) {
      fetchTranslations();
    }
  }, [language, textToTranslate]); // Trigger translation update when language or text to translate changes

  const registerText = (text) => {
    setTextToTranslate((prev) => [...new Set([...prev, text])]); // Ensure unique texts
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations, registerText, fetchTranslations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
