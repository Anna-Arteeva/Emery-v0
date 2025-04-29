"use client"

import { useLanguage } from "./language-provider"
import { translations } from "@/lib/i18n"
import Image from "next/image"

export function EducationalVideos() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="w-full pb-16 md:pb-24 overflow-hidden">
      <div className="container mx-auto max-w-[1400px] px-4 md:px-6">
        <div className="mb-12 md:mb-16 max-w-3xl">
          <div className="flex flex-col gap-4">
            <h2 className="text-7xl md:text-8xl font-bold text-purple-400">{t.educationalVideos.videoCount}</h2>
            <h3 className="text-3xl md:text-4xl font-bold">{t.educationalVideos.title}</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300">{t.educationalVideos.description}</p>
          </div>
        </div>

        <div className="relative w-full">
          <Image
            src="/videos.jpg"
            alt="Collection of educational video thumbnails showing various English learning topics"
            width={1400}
            height={600}
            className="w-full rounded-lg object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}
