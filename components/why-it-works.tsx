"use client"

import { useLanguage } from "./language-provider"
import { translations } from "@/lib/i18n"
import { Star } from "lucide-react"

export function WhyItWorks() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="py-20 px-4" id="how-it-works">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-2">{t.whyItWorks.subtitle}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">{t.whyItWorks.headline}</h2>

          <p className="text-2xl md:text-3xl lg:text-3xl leading-relaxed text-gray-700">{t.whyItWorks.mainText}</p>
        </div>
        {/* Redesigned testimonial section */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl p-10 md:p-16 shadow-lg relative">
          {/* Decorative elements */}
          <div className="absolute w-3 h-3 bg-purple-400 rounded-full top-10 left-10"></div>
          <div className="absolute w-2 h-2 bg-pink-400 rounded-full bottom-16 left-1/4"></div>
          <div className="absolute w-2 h-2 bg-blue-400 rounded-full top-1/3 right-10"></div>
          <div className="absolute w-3 h-3 bg-yellow-400 rounded-full bottom-10 right-1/4"></div>

          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md">
                <div className="w-full h-full bg-purple-100 flex items-center justify-center text-purple-800 font-bold text-xl">
                  JD
                </div>
              </div>
            </div>

            <p className="font-bold text-lg mb-1">Jane Doe</p>
            <p className="text-gray-500 mb-4">{t.whyItWorks.testimonialLocation}</p>

            <div className="flex justify-center mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            <div className="relative">
              <div className="absolute -left-8 -top-8 text-8xl text-gray-200 font-serif">"</div>
              <p className="text-xl md:text-2xl text-gray-700 mb-4 relative z-10">{t.whyItWorks.testimonial}</p>
              <div className="absolute -right-8 bottom-0 text-8xl text-gray-200 font-serif">"</div>
            </div>

            {/* Navigation arrows */}
            <div className="flex justify-between mt-12 max-w-md mx-auto">
              <button className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 hover:bg-yellow-200 transition-colors">
                ←
              </button>
              <button className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 hover:bg-yellow-200 transition-colors">
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
