"use client"

import { useLanguage } from "./language-provider"
import { translations } from "@/lib/i18n"

export function FeatureSections() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="py-20">
      {/* Learn with joy section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t.features.learnTitle}</h2>
              <ul className="space-y-4">
                {t.features.learnPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 min-w-5 h-5 rounded-full bg-[#6A61EA]/10 flex items-center justify-center">
                      <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M1 4L4.5 7.5L11 1"
                          stroke="#6A61EA"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p className="text-lg text-gray-700">{point}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-100 rounded-2xl aspect-square flex items-center justify-center">
              <div className="text-gray-400 text-sm">Illustration placeholder</div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-gray-100 rounded-2xl aspect-square flex items-center justify-center">
              <div className="text-gray-400 text-sm">Illustration placeholder</div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t.features.practiceTitle}</h2>
              <p className="text-xl text-gray-700">{t.features.practiceSubtitle}</p>
              <ul className="space-y-4">
                {t.features.practicePoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 min-w-5 h-5 rounded-full bg-[#6A61EA]/10 flex items-center justify-center">
                      <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M1 4L4.5 7.5L11 1"
                          stroke="#6A61EA"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p className="text-lg text-gray-700">{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mentor support section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{t.features.supportTitle}</h2>
              <ul className="space-y-4">
                {t.features.supportPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 min-w-5 h-5 rounded-full bg-[#6A61EA]/10 flex items-center justify-center">
                      <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M1 4L4.5 7.5L11 1"
                          stroke="#6A61EA"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p className="text-lg text-gray-700">{point}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-100 rounded-2xl aspect-square flex items-center justify-center">
              <div className="text-gray-400 text-sm">Illustration placeholder</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
