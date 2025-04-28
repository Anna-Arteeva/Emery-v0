"use client"

import { useLanguage } from "./language-provider"
import { translations } from "@/lib/i18n"
import Image from "next/image"

export function CallToAction() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full">
        <Image src="/backgrounds/cta-background.png" alt="Background" fill className="object-cover" priority />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 container-custom">
        <div className="max-w-3xl mx-auto text-center">
          {/* Yellow dot accent */}
          <div className="flex justify-center mb-6">
            <div className="w-10 h-10 rounded-full bg-yellow-300"></div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-10">{t.callToAction.headline}</h2>

          <div className="flex justify-center">
            <button className="px-8 py-4 bg-[#4B4673] text-white font-medium rounded-full hover:bg-[#3D3A5F] transition-colors">
              {t.callToAction.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
