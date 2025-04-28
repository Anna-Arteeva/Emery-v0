"use client"

import { useLanguage } from "./language-provider"
import { translations } from "@/lib/i18n"
import Image from "next/image"
import { BookOpen, Video, BookText, Users, MessageCircle } from "lucide-react"

export function FeatureGrid() {
  const { language } = useLanguage()
  const t = translations[language]

  const features = [
    {
      icon: <BookOpen className="w-6 h-6 text-purple-500" />,
      title: "Structured course",
      description: "Balanced grammar, comprehension, speaking, vocabulary, like in a top language school",
      image: "/features/structured-course.png",
    },
    {
      icon: <Video className="w-6 h-6 text-purple-500" />,
      title: "Video lessons",
      description: "Learn with engaging and authentic content created by native speakers",
      image: "/features/video-lessons.png",
    },
    {
      icon: <BookText className="w-6 h-6 text-purple-500" />,
      title: "Immersive vocabulary",
      description: "Different topics, new vocabulary, grammar, and interactive excursuses",
      image: "/features/immersive-vocabulary.png",
    },
    {
      icon: <Users className="w-6 h-6 text-purple-500" />,
      title: "Human mentor",
      description: "Get personal support while you progress through your learning journey",
      image: "/features/human-mentor.png",
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-purple-500" />,
      title: "Real speaking practice",
      description: "Build speaking confidence in a safe, non-judgmental space",
      image: "/features/speaking-practice.png",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How Emery helps you learn</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our comprehensive approach combines the best learning methods with human support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="aspect-video relative overflow-hidden bg-gray-50">
                <Image src={feature.image || "/placeholder.svg"} alt={feature.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
