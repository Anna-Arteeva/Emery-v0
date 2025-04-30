"use client"

import { useLanguage } from "./language-provider"
import { translations } from "@/lib/i18n"
import { Video, MessageCircle, Headphones, Users, ShieldCheck } from "lucide-react"
import { SublimationButton } from "./sublimation-button"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function PricingSection() {
  const { language } = useLanguage()
  const t = translations[language]

  const majorBenefits = [
    {
      icon: <Video className="w-8 h-8 text-purple-500" />,
      title: "Video-based Learning",
      description: "Learn with engaging content from native speakers across different accents and contexts",
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-purple-500" />,
      title: "Human Mentorship",
      description: "Get personalized guidance and feedback from experienced language mentors",
    },
    {
      icon: <Headphones className="w-8 h-8 text-purple-500" />,
      title: "Immersive Audio",
      description: "Train your ear with authentic conversations and pronunciation exercises",
    },
    {
      icon: <Users className="w-8 h-8 text-purple-500" />,
      title: "Community Practice",
      description: "Join conversation groups to practice with peers in a supportive environment",
    },
  ]

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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">CHOOSE YOUR ENGLISH LEARNING JOURNEY</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Flexible plans designed to fit your learning style, schedule, and budget—all with human support included
          </p>
        </div>
      </section>

      {/* Pricing benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">All Plans Include</h2>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">3 Months</h3>
                <div className="flex items-baseline justify-center mb-8">
                  <span className="text-5xl font-extrabold text-gray-900">45€</span>
                </div>

                <Button variant="outline" className="w-full py-6">
                  Subscribe now
                </Button>

                <div className="text-center mt-4 text-sm text-gray-500">Charged every 3 mon.</div>
              </div>
            </div>

            {/* Lifetime Plan */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform md:-translate-y-4 relative ring-2 ring-purple-500">
              <div className="bg-purple-600 text-white text-center py-2 font-bold">BEST VALUE</div>
              <div className="absolute top-2 right-0 left-0 flex justify-center">
                <div className="bg-white px-3 py-1 rounded-full text-sm font-bold border border-yellow-400 flex items-center">
                  🎉 Save 100€ Today
                </div>
              </div>
              <div className="p-8 pt-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Emery Lifetime</h3>
                <div className="flex items-baseline justify-center mb-8">
                  <span className="text-5xl font-extrabold text-gray-900">99€</span>
                  <span className="text-xl text-gray-500 line-through ml-2">199€</span>
                </div>

                <SublimationButton className="w-full">GET LIFETIME ACCESS</SublimationButton>

                <div className="text-center mt-4 text-sm text-gray-500">One time payment</div>
              </div>
            </div>

            {/* 12 Months Plan */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">12 Months</h3>
                <div className="flex items-baseline justify-center mb-8">
                  <span className="text-5xl font-extrabold text-gray-900">84€</span>
                  <span className="text-xl text-gray-500 line-through ml-2">180€</span>
                </div>

                <Button variant="outline" className="w-full py-6">
                  Subscribe now
                </Button>

                <div className="text-center mt-4 text-sm text-gray-500">Charged every 12 mon.</div>
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
          <h2 className="text-3xl font-bold mb-4">30-Day Satisfaction Guarantee</h2>
          <p className="text-xl text-gray-600 mb-8">
            If you're not completely satisfied with your Emery experience within the first 30 days, we'll refund your
            payment in full—no questions asked.
          </p>
          <p className="text-gray-600">
            Have questions? Contact us at{" "}
            <a href="mailto:support@emeryenglish.com" className="text-purple-600 hover:underline">
              support@emeryenglish.com
            </a>
          </p>
        </div>
      </section>

      {/* Legal section */}
      <section className="py-8 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl text-center text-sm text-gray-500">
          <p>
            By subscribing to Emery, you agree to the{" "}
            <Link href="/terms" className="text-purple-600 hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-purple-600 hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  )
}
