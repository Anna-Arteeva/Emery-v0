"use client"

import { useLanguage } from "./language-provider"
import { translations } from "@/lib/i18n"
import { useState, useRef, useEffect } from "react"
import { FlagIcon } from "./flag-icon"

// Updated mentor data with translations
const getMentorData = (t: any) => {
  // Check if the required translation structure exists
  if (!t.mentors || !t.mentors.profiles || !Array.isArray(t.mentors.profiles)) {
    // Fallback data if translations are missing
    return [
      {
        id: 1,
        name: "Issie",
        nameLocalized: { ru: "Исси", uk: "Исси" },
        title: "Confidence & Pronunciation Coach",
        location: "UK",
        accent: "British",
        videoUrl: "https://www.youtube.com/embed/5NH3zCO9XvQ",
        bio: "Specializes in helping students build confidence to speak and master the nuances of English pronunciation.",
      },
      {
        id: 2,
        name: "Dale",
        nameLocalized: { ru: "Дэйл", uk: "Дэйл" },
        title: "Cultural Expert",
        location: "UK",
        accent: "British",
        videoUrl: "https://www.youtube.com/embed/GUql7LluMVE",
        bio: "Helps students understand cultural contexts and nuances in English communication.",
      },
      {
        id: 3,
        name: "Coleman",
        nameLocalized: { ru: "Колман", uk: "Колман" },
        title: "Fluency Specialist",
        location: "Ireland",
        accent: "Irish",
        videoUrl: "https://www.youtube.com/embed/oCbNU2vxISE",
        bio: "Focuses on developing fluency and natural speech patterns in English conversations.",
      },
      {
        id: 4,
        name: "Erin",
        nameLocalized: { ru: "Эрин", uk: "Эрин" },
        title: "Grammar Expert",
        location: "Canada",
        accent: "Canadian",
        videoUrl: "https://www.youtube.com/embed/W8cE85ncREg",
        bio: "Makes complex grammar rules simple and intuitive through practical, everyday examples.",
      },
    ]
  }

  // If we have the proper translation structure, use it with our new mentor data
  return [
    {
      id: 1,
      name: "Issie",
      nameLocalized: { ru: "Исси", uk: "Исси" },
      title: t.mentors.profiles[0]?.title || "Confidence & Pronunciation Coach",
      location: "UK",
      accent: "British",
      videoUrl: "https://www.youtube.com/embed/5NH3zCO9XvQ",
      bio: "Specializes in helping students build confidence to speak and master the nuances of English pronunciation.",
    },
    {
      id: 2,
      name: "Dale",
      nameLocalized: { ru: "Дэйл", uk: "Дэйл" },
      title: t.mentors.profiles[1]?.title || "Cultural Expert",
      location: "UK",
      accent: "British",
      videoUrl: "https://www.youtube.com/embed/GUql7LluMVE",
      bio: "Helps students understand cultural contexts and nuances in English communication.",
    },
    {
      id: 3,
      name: "Coleman",
      nameLocalized: { ru: "Колман", uk: "Колман" },
      title: t.mentors.profiles[2]?.title || "Fluency Specialist",
      location: "Ireland",
      accent: "Irish",
      videoUrl: "https://www.youtube.com/embed/oCbNU2vxISE",
      bio: "Focuses on developing fluency and natural speech patterns in English conversations.",
    },
    {
      id: 4,
      name: "Erin",
      nameLocalized: { ru: "Эрин", uk: "Эрин" },
      title: t.mentors.profiles[3]?.title || "Grammar Expert",
      location: "Canada",
      accent: "Canadian",
      videoUrl: "https://www.youtube.com/embed/W8cE85ncREg",
      bio: "Makes complex grammar rules simple and intuitive through practical, everyday examples.",
    },
  ]
}

export function OurMentors() {
  const { language } = useLanguage()
  const t = translations[language]
  const mentors = getMentorData(t)
  const [activeVideo, setActiveVideo] = useState<number | null>(null)
  const [isPlaying, setIsPlaying] = useState<{ [key: number]: boolean }>({})
  const iframeRefs = useRef<{ [key: number]: HTMLIFrameElement | null }>({})
  const [iframesLoaded, setIframesLoaded] = useState<{ [key: number]: boolean }>({})

  // Initialize YouTube API
  useEffect(() => {
    // Add YouTube API script if it doesn't exist
    if (!window.YT) {
      const tag = document.createElement("script")
      tag.src = "https://www.youtube.com/iframe_api"
      const firstScriptTag = document.getElementsByTagName("script")[0]
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)
    }
  }, [])

  const handleVideoClick = (mentorId: number) => {
    if (activeVideo === mentorId) {
      // Toggle play/pause for current video
      const iframe = iframeRefs.current[mentorId]
      if (iframe) {
        if (isPlaying[mentorId]) {
          iframe.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
          setIsPlaying((prev) => ({ ...prev, [mentorId]: false }))
        } else {
          iframe.contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
          // Unmute the video when playing
          iframe.contentWindow?.postMessage('{"event":"command","func":"unMute","args":""}', "*")
          setIsPlaying((prev) => ({ ...prev, [mentorId]: true }))
        }
      }
    } else {
      // Pause previous video if any
      if (activeVideo !== null && iframeRefs.current[activeVideo]) {
        iframeRefs.current[activeVideo]?.contentWindow?.postMessage(
          '{"event":"command","func":"pauseVideo","args":""}',
          "*",
        )
      }

      // Set new active video
      setActiveVideo(mentorId)

      // Play the new video
      setTimeout(() => {
        const iframe = iframeRefs.current[mentorId]
        if (iframe) {
          iframe.contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
          // Unmute the video when playing
          iframe.contentWindow?.postMessage('{"event":"command","func":"unMute","args":""}', "*")
          setIsPlaying((prev) => ({ ...prev, [mentorId]: true }))
        }
      }, 100)
    }
  }

  const handleIframeLoad = (mentorId: number) => {
    setIframesLoaded((prev) => ({ ...prev, [mentorId]: true }))
  }

  // Get localized mentor name based on current language
  const getMentorName = (mentor: any) => {
    if (language === "ru" || language === "uk") {
      return mentor.nameLocalized?.[language] || mentor.name
    }
    return mentor.name
  }

  return (
    <section className="py-20 bg-white" id="mentors">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-2">{t.mentors.subtitle}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.mentors.title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.mentors.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentors.map((mentor) => (
            <div key={mentor.id} className="group flex flex-col items-start">
              {/* Circular video container with flat bottom-left corner */}
              <div
                className="relative w-64 h-64 mx-auto mb-6 cursor-pointer group overflow-hidden"
                style={{
                  borderRadius: "50% 50% 50% 0",
                  border: "10px solid #E5E3FF",
                }}
              >
                {/* YouTube iframe with scaling */}
                <div className="absolute inset-0 overflow-hidden bg-gray-100" style={{ borderRadius: "50% 50% 50% 0" }}>
                  <iframe
                    ref={(el) => (iframeRefs.current[mentor.id] = el)}
                    src={`${mentor.videoUrl}?enablejsapi=1&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&loop=1`}
                    title={mentor.name}
                    className="w-[180%] h-[180%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    frameBorder="0"
                    onLoad={() => handleIframeLoad(mentor.id)}
                  />
                </div>

                {/* Clickable overlay without visible play button */}
                <div
                  className="absolute inset-0 cursor-pointer"
                  style={{ borderRadius: "50% 50% 50% 0" }}
                  onClick={() => handleVideoClick(mentor.id)}
                >
                  {/* No visible play button */}
                </div>
              </div>

              {/* Mentor info - left aligned */}
              <div className="text-left w-full">
                <h3 className="font-medium text-gray-900 text-xl mb-1">{getMentorName(mentor)}</h3>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span className="flex items-center gap-1.5">
                    <FlagIcon country={mentor.accent} />
                    {mentor.location}, {mentor.accent} {t.mentors.accentLabel}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{mentor.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
