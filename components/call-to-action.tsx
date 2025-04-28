"use client"

import { useLanguage } from "./language-provider"
import { translations } from "@/lib/i18n"
import { SublimationButton } from "./sublimation-button"

export function CallToAction() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">{t.callToAction.headline}</h2>
          <div className="flex justify-center">
            <SublimationButton>{t.callToAction.cta}</SublimationButton>
          </div>
        </div>
      </div>
    </section>
  )
}
