"use client"

import { useLanguage } from "./language-provider"
import { translations } from "@/lib/i18n"
import { SublimationButton } from "./sublimation-button"

export function Hero() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="pt-20 pb-24 md:pt-28 md:pb-32 gradient-bg relative overflow-x-hidden md:overflow-visible">
      {/* Animated Background */}
      <div className="animated-bg">
        {/* Gradient Orbs */}
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>

        {/* Bubbles */}
        <div className="bubble bubble-1"></div>
        <div className="bubble bubble-2"></div>
        <div className="bubble bubble-3"></div>
        <div className="bubble bubble-4"></div>
        <div className="bubble bubble-5"></div>
        <div className="bubble bubble-6"></div>

        {/* Confetti */}
        <div className="confetti-container">
          <div className="confetti confetti-1"></div>
          <div className="confetti confetti-2"></div>
          <div className="confetti confetti-3"></div>
          <div className="confetti confetti-4"></div>
          <div className="confetti confetti-5"></div>
          <div className="confetti confetti-6"></div>
          <div className="confetti confetti-7"></div>
          <div className="confetti confetti-8"></div>
          <div className="confetti confetti-9"></div>
          <div className="confetti confetti-10"></div>
          <div className="confetti confetti-11"></div>
          <div className="confetti confetti-12"></div>
          <div className="confetti confetti-13"></div>
          <div className="confetti confetti-14"></div>
          <div className="confetti confetti-15"></div>
          <div className="confetti confetti-16"></div>
          <div className="confetti confetti-17"></div>
          <div className="confetti confetti-18"></div>
          <div className="confetti confetti-19"></div>
          <div className="confetti confetti-20"></div>
          <div className="confetti confetti-21"></div>
          <div className="confetti confetti-22"></div>
          <div className="confetti confetti-23"></div>
          <div className="confetti confetti-24"></div>
          <div className="confetti confetti-25"></div>
          <div className="confetti confetti-26"></div>
          <div className="confetti confetti-27"></div>
          <div className="confetti confetti-28"></div>
          <div className="confetti confetti-29"></div>
          <div className="confetti confetti-30"></div>
          <div className="confetti confetti-31"></div>
          <div className="confetti confetti-32"></div>
          <div className="confetti confetti-33"></div>
          <div className="confetti confetti-34"></div>
          <div className="confetti confetti-35"></div>
          <div className="confetti confetti-36"></div>
          <div className="confetti confetti-37"></div>
          <div className="confetti confetti-38"></div>
          <div className="confetti confetti-39"></div>
          <div className="confetti confetti-40"></div>
        </div>

        {/* Floating shapes */}
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {t.hero.mainHeading} <br />
            {t.hero.subHeading}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">{t.hero.intro}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <SublimationButton>{t.hero.cta}</SublimationButton>
          </div>
          <p className="mt-4 text-sm text-gray-500">{t.hero.caption}</p>
        </div>

        <div className="max-w-2xl mx-auto relative z-10">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="aspect-video w-full">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/EzyLqEML5xc?start=645"
                title="Emery English Learning"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
