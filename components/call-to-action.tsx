"use client"

import { useLanguage } from "./language-provider"
import { translations } from "@/lib/i18n"
import { SublimationButton } from "./sublimation-button"
import Image from "next/image"

export function CallToAction() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background image with max-width 1000px and margin-top 10rem */}
      <div className="relative mx-auto w-full max-w-[1000px] mt-20">
        <div className="w-full h-full">
          <Image
            src="/backgrounds/cta-background.png"
            alt="Background"
            width={1000}
            height={600}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>

      {/* Content overlay - positioned at the top */}
      <div className="absolute top-24 left-0 right-0 z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Yellow dot accent */}
          <div className="flex justify-center mb-6">
            <div className="w-10 h-10 rounded-full bg-yellow-300"></div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">{t.callToAction.headline}</h2>

          <div className="flex flex-col items-center justify-center">
            <a href="https://app.emeryenglish.com/signup" target="_blank" rel="noopener noreferrer">
              <SublimationButton>{t.callToAction.cta}</SublimationButton>
            </a>
            <p className="mt-4 text-sm text-gray-500">{t.hero.caption}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
