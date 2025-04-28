"use client"

import { useLanguage } from "./language-provider"
import { translations } from "@/lib/i18n"
import { MapPin } from "lucide-react"
import Image from "next/image"
import { FlagIcon } from "./flag-icon"

// Sample mentor data
const mentors = [
  {
    id: 1,
    name: "Emma Wilson",
    title: "THE PRONUNCIATION TRAINER",
    location: "London",
    accent: "British",
    image: "/mentors/emma.png",
    bio: "Specializes in helping students master the nuances of English pronunciation with personalized exercises.",
  },
  {
    id: 2,
    name: "Sean Murphy",
    title: "THE ACCENT COACH",
    location: "Dublin",
    accent: "Irish",
    image: "/mentors/sean.png",
    bio: "Helps students develop natural-sounding speech patterns and rhythm in their English conversations.",
  },
  {
    id: 3,
    name: "Jessica Taylor",
    title: "THE GRAMMAR EXPERT",
    location: "New York",
    accent: "American",
    image: "/mentors/jessica.png",
    bio: "Makes complex grammar rules simple and intuitive through practical, everyday examples.",
  },
  {
    id: 4,
    name: "David Fletcher",
    title: "THE CONVERSATION SPECIALIST",
    location: "Auckland",
    accent: "New Zealand",
    image: "/mentors/david.png",
    bio: "Focuses on building fluency and confidence through engaging, real-world conversation practice.",
  },
]

export function OurMentors() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-2">{t.mentors.subtitle}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.mentors.title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.mentors.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentors.map((mentor) => (
            <div key={mentor.id} className="group">
              <div className="bg-gray-50 rounded-xl overflow-hidden transition-all duration-300 group-hover:shadow-md">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={mentor.image || "/placeholder.svg?height=400&width=400&query=casual portrait"}
                    alt={mentor.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-medium text-gray-900 mb-1">{mentor.name}</h3>
                  <p className="text-xs font-semibold text-purple-600 tracking-wider mb-3">{mentor.title}</p>

                  {/* Location on its own line */}
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <MapPin className="h-3.5 w-3.5 mr-1.5 text-gray-400" />
                    <span>{mentor.location}</span>
                  </div>

                  {/* Accent on its own line - removed Globe icon */}
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1.5 ml-0.5">
                      <FlagIcon country={mentor.accent} />
                      {mentor.accent} Accent
                    </span>
                  </div>

                  <p className="text-sm text-gray-600">{mentor.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
