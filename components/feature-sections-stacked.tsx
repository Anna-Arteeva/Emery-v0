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
      image: "/features/speaking-practice.png",
      imagePosition: "right",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col ${index !== features.length - 1 ? "mb-32" : ""} md:mb-40 md:flex-row md:items-center md:gap-12 lg:gap-20 ${
              feature.imagePosition === "left" ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                <Image src={feature.image || "/placeholder.svg"} alt={feature.title} fill className="object-cover" />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">{feature.title}</h2>
              <p className="text-lg md:text-xl text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
