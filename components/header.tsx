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
            <Link href="#features" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
              {t.nav.features}
            </Link>
            <Link href="#how-it-works" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
              {t.nav.howItWorks}
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-gray-900 text-sm font-medium">
              {t.nav.pricing}
            </Link>
          </nav>

          <div className="flex items-center gap-4 relative z-50">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center gap-1 text-gray-600">
                  <Globe className="h-4 w-4" />
                  <span className="uppercase text-xs">{language}</span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="z-50">
                <DropdownMenuItem onClick={() => setLanguage("en")} className="text-sm">
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("de")} className="text-sm">
                  Deutsch
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("ru")} className="text-sm">
                  Русский
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("fr")} className="text-sm">
                  Français
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="outline" size="sm" className="text-sm font-medium">
              {t.nav.login}
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
