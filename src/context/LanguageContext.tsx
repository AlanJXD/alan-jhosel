import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, type TranslationKey } from '../translations/translations';

interface LanguageContextType {
  isSpanish: boolean;
  toggleLanguage: () => void;
  language: 'es' | 'en';
  t: (key: TranslationKey) => string;
  isTransitioning: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSpanish, setIsSpanish] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setIsSpanish(savedLanguage === 'es');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', isSpanish ? 'es' : 'en');
    document.documentElement.setAttribute('lang', isSpanish ? 'es' : 'en');
  }, [isSpanish]);

  const toggleLanguage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setIsSpanish(prev => !prev);
      setTimeout(() => setIsTransitioning(false), 300);
    }, 150);
  };

  const t = (key: TranslationKey): string => {
    const lang = isSpanish ? 'es' : 'en';
    return translations[lang][key] || key;
  };

  const language = isSpanish ? 'es' : 'en';

  return (
    <LanguageContext.Provider value={{ isSpanish, toggleLanguage, language, t, isTransitioning }}>
      {children}
    </LanguageContext.Provider>
  );
};
