"use client"

import { useLanguage } from "./language-provider"
import { translations } from "@/lib/i18n"
import Image from "next/image"
import { BookOpen, Video, BookText, Users, MessageCircle } from "lucide-react"

export function FeatureCards() {
  const { language } = useLanguage()
  const t = translations[language]

  const featureIcons = [
    <BookOpen key="book" className="w-6 h-6 text-purple-500" />,
    <Video key="video" className="w-6 h-6 text-purple-500" />,
    <BookText key="booktext" className="w-6 h-6 text-purple-500" />,
    <Users key="users" className="w-6 h-6 text-purple-500" />,
    <MessageCircle key="message" className="w-6 h-6 text-purple-500" />,
  ]

  // Helper function to map feature index to image name
  const getFeatureImageName = (index: number) => {
    const imageNames = [
      "structured-course",
      "video-lessons",
      "immersive-vocabulary",
      "human-mentor",
      "speaking-practice",
    ]
    return imageNames[index] || "placeholder"
  }

  const features = t.features.items.map((item, index) => ({
    icon: featureIcons[index], // You'll need to keep your icons array separate
    title: item.title,
    description: item.description,
    image: `/features/${getFeatureImageName(index)}.png`, // Helper function to map index to image name
  }))

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.featureCards.headline}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.featureCards.subheading}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-start">
              <div className="mb-6 relative w-full aspect-video rounded-xl overflow-hidden">
                <Image src={feature.image || "/placeholder.svg"} alt={feature.title} fill className="object-cover" />
              </div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
