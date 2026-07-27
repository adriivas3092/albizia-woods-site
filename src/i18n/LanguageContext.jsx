import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext(null);

const STORAGE_KEY = 'albizia-lang';

function getInitialLang() {
  if (typeof window === 'undefined') return 'en';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === 'es' || stored === 'en' ? stored : 'en';
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggle = () => setLang((prev) => (prev === 'en' ? 'es' : 'en'));

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    // Safe fallback so components never crash if used outside the provider.
    return { lang: 'en', setLang: () => {}, toggle: () => {} };
  }
  return ctx;
}

// Small helper: pick(copy) returns the object/string for the active language.
export function usePick() {
  const { lang } = useLang();
  return (copy) => (copy && copy[lang] !== undefined ? copy[lang] : copy && copy.en);
}
