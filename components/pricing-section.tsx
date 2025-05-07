"use client"

import { useLanguage } from "./language-provider"
import { translations } from "@/lib/i18n"
import { Video, MessageCircle, Headphones, Users, ShieldCheck } from "lucide-react"
import { SublimationButton } from "./sublimation-button"
import { Button } from "@/components/ui/button"

export function PricingSection() {
  const { language } = useLanguage()
  const t = translations[language]

  // Fallback texts in case translations are missing
  const fallbackTexts = {
    title: "Choose your English learning journey",
    subtitle:
      "Flexible plans designed to fit your learning style, schedule, and budget—all with human support included",
    featuresTitle: "All Plans Include",
    monthlyBilling: "Months",
    choose: "Subscribe now",
    mostPopular: "BEST VALUE",
    saveToday: "Save 100€ Today",
    lifetime: "Lifetime",
    getLifetime: "GET LIFETIME ACCESS",
    oneTimePayment: "One time payment",
    guaranteeTitle: "30-Day Satisfaction Guarantee",
    guaranteeDescription:
      "If you're not completely satisfied with your Emery experience within the first 30 days, we'll refund your payment in full—no questions asked.",
    contactUs: "Have questions? Contact us at",
    email: "support@emeryenglish.com",
    legalText: "By subscribing to Emery, you agree to the Terms of Service and Privacy Policy.",
  }

  const majorBenefits = [
    {
      icon: <Video className="w-8 h-8 text-purple-500" />,
      title: t.pricing?.featureItems?.[0]?.title || "Video-based Learning",
      description:
        t.pricing?.featureItems?.[0]?.description ||
        "Learn with engaging content from native speakers across different accents and contexts",
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-purple-500" />,
      title: t.pricing?.featureItems?.[1]?.title || "Human Mentorship",
      description:
        t.pricing?.featureItems?.[1]?.description ||
        "Get personalized guidance and feedback from experienced language mentors",
    },
    {
      icon: <Headphones className="w-8 h-8 text-purple-500" />,
      title: t.pricing?.featureItems?.[2]?.title || "Immersive Audio",
      description:
        t.pricing?.featureItems?.[2]?.description ||
        "Train your ear with authentic conversations and pronunciation exercises",
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: t.pricing?.featureItems?.[3]?.title || "Community Practice",
      description:
        t.pricing?.featureItems?.[3]?.description ||
        "Join conversation groups to practice with peers in a supportive environment",
    },
  ]

  // Get plan descriptions with fallbacks
  const basicDescription = t.pricing?.plans?.basic?.description || "Perfect for casual learners"
  const premiumDescription = t.pricing?.plans?.premium?.description || "Our most popular plan"
  const ultimateName = t.pricing?.plans?.ultimate?.name || "Lifetime"

  return (
    <>
      {/* Hero section */}
      <section className="pt-28 pb-16 text-center gradient-bg relative overflow-hidden">
        {/* Animated background from globals.css */}
        <div className="animated-bg">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
          <div className="bubble bubble-1"></div>
          <div className="bubble bubble-2"></div>
          <div className="bubble bubble-3"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{t.pricing?.title || fallbackTexts.title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {t.pricing?.subtitle || fallbackTexts.subtitle}
          </p>
        </div>
      </section>

      {/* Pricing benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            {t.pricing?.featuresTitle || fallbackTexts.featuresTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {majorBenefits.map((benefit, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-6">
                <div className="mb-4 w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* 3 Months Plan */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  3 {t.pricing?.monthlyBilling || fallbackTexts.monthlyBilling}
                </h3>
                <div className="flex items-baseline justify-center mb-8">
                  <span className="text-5xl font-extrabold text-gray-900">45€</span>
                </div>

                <a
                  href="https://app.emeryenglish.com/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button variant="outline" className="w-full py-6">
                    {t.pricing?.choose || fallbackTexts.choose}
                  </Button>
                </a>

                <div className="text-center mt-4 text-sm text-gray-500">{basicDescription}</div>
              </div>
            </div>

            {/* Lifetime Plan */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform md:-translate-y-4 relative ring-2 ring-purple-500">
              <div className="bg-purple-600 text-white text-center py-2 font-bold">
                {t.pricing?.mostPopular || fallbackTexts.mostPopular}
              </div>
              <div className="absolute top-2 right-0 left-0 flex justify-center">
                <div className="bg-white px-3 py-1 rounded-full text-sm font-bold border border-yellow-400 flex items-center">
                  🎉{" "}
                  {language === "en"
                    ? "Save 100€ Today"
                    : language === "de"
                      ? "Heute 100€ sparen"
                      : language === "ru"
                        ? "Сэкономьте 100€ сегодня"
                        : "Économisez 100€ aujourd'hui"}
                </div>
              </div>
              <div className="p-8 pt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Emery {ultimateName}</h3>
                <div className="flex items-baseline justify-center mb-8">
                  <span className="text-5xl font-extrabold text-gray-900">99€</span>
                  <span className="text-xl text-gray-500 line-through ml-2">199€</span>
                </div>

                <a
                  href="https://app.emeryenglish.com/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <SublimationButton className="w-full">
                    {language === "en"
                      ? "GET LIFETIME ACCESS"
                      : language === "de"
                        ? "LEBENSLANGEN ZUGANG ERHALTEN"
                        : language === "ru"
                          ? "ПОЛУЧИТЬ ПОЖИЗНЕННЫЙ ДОСТУП"
                          : "OBTENIR UN ACCÈS À VIE"}
                  </SublimationButton>
                </a>

                <div className="text-center mt-4 text-sm text-gray-500">
                  {language === "en"
                    ? "One time payment"
                    : language === "de"
                      ? "Einmalige Zahlung"
                      : language === "ru"
                        ? "Единоразовый платеж"
                        : "Paiement unique"}
                </div>
              </div>
            </div>

            {/* 12 Months Plan */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  12 {t.pricing?.monthlyBilling || fallbackTexts.monthlyBilling}
                </h3>
                <div className="flex items-baseline justify-center mb-8">
                  <span className="text-5xl font-extrabold text-gray-900">84€</span>
                  <span className="text-xl text-gray-500 line-through ml-2">180€</span>
                </div>

                <a
                  href="https://app.emeryenglish.com/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button variant="outline" className="w-full py-6">
                    {t.pricing?.choose || fallbackTexts.choose}
                  </Button>
                </a>

                <div className="text-center mt-4 text-sm text-gray-500">{premiumDescription}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
              <ShieldCheck className="w-8 h-8 text-purple-500" />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4">{t.pricing?.guarantee?.title || fallbackTexts.guaranteeTitle}</h2>
          <p className="text-xl text-gray-600 mb-8">
            {t.pricing?.guarantee?.description || fallbackTexts.guaranteeDescription}
          </p>
          <p className="text-gray-600">
            {t.pricing?.guarantee?.contact || fallbackTexts.contactUs}{" "}
            <a href="mailto:support@emeryenglish.com" className="text-purple-600 hover:underline">
              {t.pricing?.guarantee?.email || fallbackTexts.email}
            </a>
          </p>
        </div>
      </section>

      {/* Legal section */}
      <section className="py-8 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl text-center text-sm text-gray-500">
          <p>{t.pricing?.legalText || fallbackTexts.legalText}</p>
        </div>
      </section>
    </>
  )
}
