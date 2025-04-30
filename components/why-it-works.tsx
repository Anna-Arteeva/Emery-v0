"use client"

import { useLanguage } from "./language-provider"
import { translations } from "@/lib/i18n"
import Image from "next/image"

export function WhyItWorks() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="py-20 px-4" id="how-it-works">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-2">{t.whyItWorks.subtitle}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t.whyItWorks.headline}</h2>

          {/* Updated paragraph styling to match hero lead paragraph */}
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">{t.whyItWorks.mainText}</p>
        </div>

        {/* Updated testimonial section with new typography and rearranged elements */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl p-10 md:p-16 shadow-lg relative">
          <div className="text-center">
            {/* Avatar */}
            <div className="mb-4 flex justify-center">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-200">
                <Image
                  src="/testimonials/vera-fokina.png"
                  alt={language === "ru" ? "Вера Фокина" : "Vera Fokina"}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Attribution moved above the quote */}
            <div className="mb-8">
              <p className="font-bold text-xl mb-1">{language === "ru" ? "Вера Фокина" : "Vera Fokina"}</p>
              <p className="text-gray-800 mb-1">{t.whyItWorks.testimonialLocation}</p>
              <p className="text-gray-500 text-sm">{t.common?.appStoreReview || "App Store review 2023"}</p>
            </div>

            {/* Testimonial quote with updated typography */}
            <div className="relative">
              <p className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 leading-tight">
                <span className="text-5xl md:text-6xl font-serif">"</span>
                {t.whyItWorks.testimonial}
                <span className="text-5xl md:text-6xl font-serif">"</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
