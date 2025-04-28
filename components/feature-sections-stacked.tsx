"use client"

import { useLanguage } from "./language-provider"
import { translations } from "@/lib/i18n"
import Image from "next/image"

export function FeatureSectionsStacked() {
  const { language } = useLanguage()
  const t = translations[language]

  const features = [
    {
      title: "Structured course",
      description: "Balanced grammar, comprehension, speaking, vocabulary, like in a top language school",
      image: "/features/structured-course.png",
      imagePosition: "right",
    },
    {
      title: "Video lessons",
      description: "Learn with engaging and authentic content created by native speakers",
      image: "/features/video-lessons.png",
      imagePosition: "left",
    },
    {
      title: "Immersive vocabulary",
      description: "Different topics, new vocabulary, grammar, and interactive excursuses",
      image: "/features/immersive-vocabulary.png",
      imagePosition: "right",
    },
    {
      title: "Human mentor",
      description: "Get personal support while you progress through your learning journey",
      image: "/features/human-mentor.png",
      imagePosition: "left",
    },
    {
      title: "Real speaking practice",
      description: "Build speaking confidence in a safe, non-judgmental space",
      image: "/features/speaking-practice-new.png",
      imagePosition: "right",
    },
  ]

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4 max-w-[900px]">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col ${index !== features.length - 1 ? "mb-20" : ""} md:mb-24 md:flex-row md:items-center md:gap-6 lg:gap-8 ${
              feature.imagePosition === "left" ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="md:w-2/5 mb-6 md:mb-0 flex justify-center">
              <div className="relative w-full max-w-sm h-auto">
                <Image
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  width={350}
                  height={260}
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
            </div>
            <div className="md:w-3/5">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">{feature.title}</h2>
              <p className="text-base md:text-lg text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
