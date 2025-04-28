"use client"

import { useLanguage } from "./language-provider"
import { translations } from "@/lib/i18n"
import Image from "next/image"
import { Play } from "lucide-react"

export function VideoLessonsSection() {
  const { language } = useLanguage()
  const t = translations[language]

  // Sample video thumbnails data
  const videoThumbnails = [
    {
      id: 1,
      title: "Grammar Basics",
      image: "/grammar-fundamentals.png",
      tag: "GRAMMAR",
    },
    {
      id: 2,
      title: "Angel Wings",
      image: "/ethereal-guardian.png",
      tag: "",
    },
    {
      id: 3,
      title: "Talking About Pets",
      image: "/cozy-reading-companion.png",
      tag: "PETS",
    },
    {
      id: 4,
      title: "City Life",
      image: "/urban-contemplation.png",
      tag: "CITY",
    },
    {
      id: 5,
      title: "Sleeping Expressions",
      image: "/peaceful-slumber.png",
      tag: "I'LL BE SNORING LIKE HELL",
    },
    {
      id: 6,
      title: "Home Vocabulary",
      image: "/minimalist-loft.png",
      tag: "HOME",
    },
    {
      id: 7,
      title: "Pet Phrases",
      image: "/park-walk-companions.png",
      tag: "I NEED ANOTHER PET",
    },
    {
      id: 8,
      title: "Bedroom Vocabulary",
      image: "/placeholder.svg?height=200&width=300&query=bedroom with person",
      tag: "I'LL BE SLEEPING",
    },
  ]

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="mb-16">
          <h2 className="text-[100px] font-bold text-purple-200 leading-none mb-2">100K</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.videoLessons?.title || "UNIQUE EDUCATIONAL VIDEOS"}
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl">
            {t.videoLessons?.description ||
              "Learn to understand all English accents and speak like your favorite characters"}
          </p>
        </div>

        {/* Video grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 -mx-4 px-4 pb-4 overflow-x-auto scrollbar-hide">
          {videoThumbnails.map((video) => (
            <div key={video.id} className="relative group rounded-2xl overflow-hidden cursor-pointer min-w-[250px]">
              <div className="aspect-video relative">
                <Image
                  src={video.image || "/placeholder.svg"}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>

                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-white bg-opacity-90 flex items-center justify-center">
                    <Play className="w-5 h-5 text-gray-900 ml-1" />
                  </div>
                </div>

                {/* Tag overlay */}
                {video.tag && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white bg-opacity-90 rounded-md text-sm font-medium text-gray-900">
                    {video.tag}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
