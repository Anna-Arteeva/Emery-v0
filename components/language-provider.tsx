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
      // First check for stored language preference
      const storedLang = localStorage.getItem("language") as Language | null

      if (storedLang && (storedLang === "en" || storedLang === "de" || storedLang === "ru" || storedLang === "fr")) {
        setLanguage(storedLang)
        document.documentElement.lang = storedLang
        return
      }

      // If no stored preference, detect from browser
      const browserLang = navigator.language.split("-")[0]
      if (browserLang === "de") {
        setLanguage("de")
        document.documentElement.lang = "de"
      } else if (browserLang === "ru") {
        setLanguage("ru")
        document.documentElement.lang = "ru"
      } else if (browserLang === "fr") {
        setLanguage("fr")
        document.documentElement.lang = "fr"
      }
    }

    detectLanguage()

    // Add event listener for language changes
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "language") {
        const newLang = event.newValue as Language
        if (newLang && (newLang === "en" || newLang === "de" || newLang === "ru" || newLang === "fr")) {
          setLanguage(newLang)
          document.documentElement.lang = newLang
        }
      }
    }

    window.addEventListener("storage", handleStorageChange)
    return () => window.removeEventListener("storage", handleStorageChange)
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
    document.documentElement.lang = lang

    // Force a re-render of components that depend on language
    window.dispatchEvent(new Event("languageChanged"))
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>{children}</LanguageContext.Provider>
  )
}
