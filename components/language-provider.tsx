"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

type Language = "en" | "de" | "ru" | "fr"
type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
})

export function useLanguage() {
  return useContext(LanguageContext)
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    // Detect browser language on client side
    const detectLanguage = () => {
      const browserLang = navigator.language.split("-")[0]
      if (browserLang === "de") {
        setLanguage("de")
      } else if (browserLang === "ru") {
        setLanguage("ru")
      } else if (browserLang === "fr") {
        setLanguage("fr")
      }

      // Check for stored language preference
      const storedLang = localStorage.getItem("language") as Language
      if (storedLang && (storedLang === "en" || storedLang === "de" || storedLang === "ru" || storedLang === "fr")) {
        setLanguage(storedLang)
      }
    }

    detectLanguage()
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
    document.documentElement.lang = lang
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>{children}</LanguageContext.Provider>
  )
}
