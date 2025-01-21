import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { LanguageProvider } from './Components/HomePageComponents/LanguageContext.jsx'; // Import LanguageProvider

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
   
      <App />
    </LanguageProvider>
  </StrictMode>
);
