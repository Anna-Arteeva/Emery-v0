"use client"

import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { ChevronDown, Globe } from "lucide-react"
import Link from "next/link"
import { translations } from "@/lib/i18n"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"

export function Header() {
  const { language, setLanguage } = useLanguage()
  const t = translations[language]

  return (
    <header className="w-full py-5 px-4 relative">
      <div className="container-custom flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/emery-logo.svg" alt="Emery Logo" width={40} height={40} className="h-10 w-auto" />
        </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#how-it-works" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
              {t.nav.howItWorks}
            </Link>
            <Link href="#mentors" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
              {t.nav.mentors}
            </Link>
            <Link href="#testimonials" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
              {t.nav.testimonials}
            </Link>
            <a
              href="https://app.emeryenglish.com/plans"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium"
            >
              {t.nav.pricing}
            </a>
            <Link href="#faq" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
              {t.nav.faq}
            </Link>
          </nav>

          <div className="flex items-center gap-4 relative z-[100]">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center gap-1.5 text-gray-600 px-3 py-2 h-9">
                  <Globe className="h-4 w-4" />
                  <span className="uppercase text-xs font-medium">{language}</span>
                  <ChevronDown className="h-3 w-3 opacity-70" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="z-50 min-w-[120px] bg-white">
                <DropdownMenuItem
                  onClick={() => setLanguage("en")}
                  className={`text-sm py-2 ${language === "en" ? "bg-gray-50 font-medium" : ""}`}
                >
                  English
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage("de")}
                  className={`text-sm py-2 ${language === "de" ? "bg-gray-50 font-medium" : ""}`}
                >
                  Deutsch
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage("ru")}
                  className={`text-sm py-2 ${language === "ru" ? "bg-gray-50 font-medium" : ""}`}
                >
                  Русский
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage("fr")}
                  className={`text-sm py-2 ${language === "fr" ? "bg-gray-50 font-medium" : ""}`}
                >
                  Français
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage("uk")}
                  className={`text-sm py-2 ${language === "uk" ? "bg-gray-50 font-medium" : ""}`}
                >
                  Українська
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="https://app.emeryenglish.com/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="text-sm font-medium">
                {t.nav.login}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
