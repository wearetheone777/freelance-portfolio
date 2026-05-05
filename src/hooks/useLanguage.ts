"use client";

import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { Locale } from "@/utils/i18n";

interface LanguageContextType {
  locale: Locale;
  toggleLocale: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: "zh",
  toggleLocale: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("zh");

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === "zh" ? "en" : "zh"));
  }, []);

  return React.createElement(
    LanguageContext.Provider,
    { value: { locale, toggleLocale } },
    children
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
