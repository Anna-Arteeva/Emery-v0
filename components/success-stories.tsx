"use client"

import React from "react"

import { useLanguage } from "./language-provider"
import { translations } from "@/lib/i18n"
import { useState, useRef } from "react"
import { Play, Pause, Volume2, VolumeX, Maximize2, MoreVertical } from "lucide-react"
import Image from "next/image"

type TestimonialVideo = {
  id: string
  name: string
  title: string
  quote: string
  highlightedText: string
  videoUrl: string
  thumbnailUrl: string
  backgroundColor: string
  textColor: string
  highlightColor: string
}

// Replace the getTestimonials function with this improved version that handles missing translations
const getTestimonials = (t: any): TestimonialVideo[] => {
  // Check if the required translation structure exists
  if (!t.successStories || !t.successStories.testimonials || !Array.isArray(t.successStories.testimonials)) {
    // Fallback data if translations are missing
    return [
      {
        id: "svitlana",
        name: "Svitlana",
        title: "University lecturer",
        quote:
          "The most valuable experience after the Emery Marathon is to realize that, only regularity gives results. After this marathon, I began to feel the necessity of a daily English portion.",
        highlightedText: "only regularity gives results",
        videoUrl: "https://media.emery.school/upload/Svitlana+9-16.mp4",
        thumbnailUrl: "/testimonials/svitlana-preview.png",
        backgroundColor: "#EBF5FF",
        textColor: "#1E293B",
        highlightColor: "#3B82F6",
      },
      {
        id: "olga",
        name: "Olga",
        title: "Flight Attendant",
        quote:
          "The most fascinating feature that I enjoyed in Emery is the video dictionary. Here you can acquire numerous new words, and it is genuinely cool that they are elucidated by native speakers from Britain, Canada and America.",
        highlightedText: "most fascinating feature that I enjoyed in Emery is the video dictionary",
        videoUrl: "https://media.emery.school/upload/olga_p.mp4",
        thumbnailUrl: "/testimonials/olga-preview.png",
        backgroundColor: "#F3F0FF",
        textColor: "#1E293B",
        highlightColor: "#8B5CF6",
      },
      {
        id: "myron",
        name: "Myron",
        title: "Software Developer",
        quote:
          "What I appreciate most about Emery is the structured approach to learning. The daily tasks and mentor feedback helped me improve my speaking skills dramatically in just a few weeks.",
        highlightedText: "structured approach to learning",
        videoUrl: "https://media.emery.school/upload/myron_eng.mp4",
        thumbnailUrl: "/testimonials/myron-preview.png",
        backgroundColor: "#EBF5FF",
        textColor: "#1E293B",
        highlightColor: "#3B82F6",
      },
    ]
  }

  // If we have the proper translation structure, use it with fallbacks
  return [
    {
      id: t.successStories.testimonials[0]?.id || "svitlana",
      name: t.successStories.testimonials[0]?.name || "Svitlana",
      title: t.successStories.testimonials[0]?.title || "University lecturer",
      quote:
        t.successStories.testimonials[0]?.quote ||
        "The most valuable experience after the Emery Marathon is to realize that, only regularity gives results.",
      highlightedText: t.successStories.testimonials[0]?.highlightedText || "only regularity gives results",
      videoUrl: "https://media.emery.school/upload/Svitlana+9-16.mp4",
      thumbnailUrl: "/testimonials/svitlana-preview.png",
      backgroundColor: "#EBF5FF",
      textColor: "#1E293B",
      highlightColor: "#3B82F6",
    },
    {
      id: t.successStories.testimonials[1]?.id || "olga",
      name: t.successStories.testimonials[1]?.name || "Olga",
      title: t.successStories.testimonials[1]?.title || "Flight Attendant",
      quote:
        t.successStories.testimonials[1]?.quote ||
        "The most fascinating feature that I enjoyed in Emery is the video dictionary.",
      highlightedText: t.successStories.testimonials[1]?.highlightedText || "most fascinating feature",
      videoUrl: "https://media.emery.school/upload/olga_p.mp4",
      thumbnailUrl: "/testimonials/olga-preview.png",
      backgroundColor: "#F3F0FF",
      textColor: "#1E293B",
      highlightColor: "#8B5CF6",
    },
    {
      id: t.successStories.testimonials[2]?.id || "myron",
      name: t.successStories.testimonials[2]?.name || "Myron",
      title: t.successStories.testimonials[2]?.title || "Software Developer",
      quote:
        t.successStories.testimonials[2]?.quote ||
        "What I appreciate most about Emery is the structured approach to learning.",
      highlightedText: t.successStories.testimonials[2]?.highlightedText || "structured approach to learning",
      videoUrl: "https://media.emery.school/upload/myron_eng.mp4",
      thumbnailUrl: "/testimonials/myron-preview.png",
      backgroundColor: "#EBF5FF",
      textColor: "#1E293B",
      highlightColor: "#3B82F6",
    },
  ]
}

export function SuccessStories() {
  const { language } = useLanguage()
  const t = translations[language]
  const testimonials = getTestimonials(t)

  const [activeVideo, setActiveVideo] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState<{ [key: string]: number }>({})
  const [duration, setDuration] = useState<{ [key: string]: number }>({})
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({})

  const handleVideoClick = (videoId: string) => {
    if (activeVideo === videoId) {
      // Toggle play/pause for current video
      const videoElement = videoRefs.current[videoId]
      if (videoElement) {
        if (isPlaying) {
          videoElement.pause()
        } else {
          videoElement.play()
        }
        setIsPlaying(!isPlaying)
      }
    } else {
      // Stop current video if any
      if (activeVideo && videoRefs.current[activeVideo]) {
        videoRefs.current[activeVideo]?.pause()
      }

      // Set new active video
      setActiveVideo(videoId)

      // Play the new video after a short delay to allow state update
      setTimeout(() => {
        const videoElement = videoRefs.current[videoId]
        if (videoElement) {
          videoElement.muted = isMuted
          videoElement
            .play()
            .then(() => setIsPlaying(true))
            .catch((error) => {
              console.error("Error playing video:", error)
              setIsPlaying(false)
            })
        }
      }, 50)
    }
  }

  const toggleMute = (e: React.MouseEvent, videoId: string) => {
    e.stopPropagation()
    setIsMuted(!isMuted)
    if (videoRefs.current[videoId]) {
      videoRefs.current[videoId]!.muted = !isMuted
    }
  }

  const handleVideoEnded = () => {
    setIsPlaying(false)
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = Math.floor(seconds % 60)
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`
  }

  const handleTimeUpdate = (videoId: string) => {
    const video = videoRefs.current[videoId]
    if (video) {
      setCurrentTime((prev) => ({ ...prev, [videoId]: video.currentTime }))
      if (!duration[videoId] && video.duration) {
        setDuration((prev) => ({ ...prev, [videoId]: video.duration }))
      }
    }
  }

  const handleLoadedMetadata = (videoId: string) => {
    const video = videoRefs.current[videoId]
    if (video) {
      setDuration((prev) => ({ ...prev, [videoId]: video.duration }))
    }
  }

  return (
    <section className="pt-20 pb-40" id="testimonials">
      <div className="container-custom">
        <div className="text-center mb-28">
          <p className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-2">{t.successStories.subtitle}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.successStories.title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.successStories.description}</p>
        </div>

        <div className="space-y-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="rounded-3xl overflow-visible"
              style={{ backgroundColor: testimonial.backgroundColor }}
            >
              <div className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center`}>
                {/* Phone frame with video */}
                <div className="w-full md:w-5/12 p-8 md:p-10 flex justify-center my-[-5rem]">
                  <div className="relative w-[280px] max-w-full">
                    {/* Phone frame */}
                    <div className="relative rounded-[40px] overflow-hidden border-8 border-black bg-black shadow-xl aspect-[9/19.5]">
                      {/* Inner container with padding */}
                      <div className="absolute inset-0 rounded-[32px] overflow-hidden bg-gray-900 flex items-center justify-center">
                        {/* Video container with reduced size */}
                        <div className="relative w-[90%] h-[90%] rounded-lg overflow-hidden bg-gray-900">
                          {/* Thumbnail image that's always visible when video is not active */}
                          {activeVideo !== testimonial.id && (
                            <Image
                              src={testimonial.thumbnailUrl || "/placeholder.svg"}
                              alt={`${testimonial.name} video preview`}
                              fill
                              className="object-contain z-10"
                              priority
                            />
                          )}

                          {/* Video element */}
                          <video
                            ref={(el) => (videoRefs.current[testimonial.id] = el)}
                            src={testimonial.videoUrl}
                            poster={testimonial.thumbnailUrl}
                            className="w-full h-full object-contain"
                            onEnded={handleVideoEnded}
                            onTimeUpdate={() => handleTimeUpdate(testimonial.id)}
                            onLoadedMetadata={() => handleLoadedMetadata(testimonial.id)}
                            playsInline
                          />

                          {/* Play button overlay for inactive videos */}
                          {activeVideo !== testimonial.id && (
                            <div
                              className="absolute inset-0 flex items-center justify-center bg-black/20 z-20 cursor-pointer"
                              onClick={() => handleVideoClick(testimonial.id)}
                            >
                              <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center">
                                <Play className="w-6 h-6 text-gray-800 ml-1" />
                              </div>
                            </div>
                          )}

                          {/* Video controls overlay - only show for active video */}
                          {activeVideo === testimonial.id && (
                            <div
                              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 z-20 cursor-pointer"
                              onClick={() => handleVideoClick(testimonial.id)}
                            >
                              <div className="flex items-center justify-between mb-1">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    handleVideoClick(testimonial.id)
                                  }}
                                  className="text-white"
                                  aria-label={isPlaying && activeVideo === testimonial.id ? "Pause" : "Play"}
                                >
                                  {isPlaying && activeVideo === testimonial.id ? (
                                    <Pause className="w-4 h-4" />
                                  ) : (
                                    <Play className="w-4 h-4 ml-0.5" />
                                  )}
                                </button>
                                <span className="text-white text-xs">
                                  {formatTime(currentTime[testimonial.id] || 0)}
                                </span>
                                <div className="flex items-center gap-2">
                                  <button
                                    onClick={(e) => toggleMute(e, testimonial.id)}
                                    className="text-white"
                                    aria-label={isMuted ? "Unmute" : "Mute"}
                                  >
                                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                                  </button>
                                  <button className="text-white" aria-label="Fullscreen">
                                    <Maximize2 className="w-4 h-4" />
                                  </button>
                                  <button className="text-white" aria-label="More options">
                                    <MoreVertical className="w-4 h-4" />
                                  </button>
                                </div>
                              </div>
                              <div className="h-1 bg-white/30 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-white rounded-full"
                                  style={{
                                    width: `${
                                      duration[testimonial.id]
                                        ? ((currentTime[testimonial.id] || 0) / duration[testimonial.id]) * 100
                                        : 0
                                    }%`,
                                  }}
                                ></div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Testimonial text */}
                <div className="w-full md:w-7/12 p-8 md:p-10">
                  <p
                    className="text-xl md:text-2xl font-serif leading-tight mb-6"
                    style={{ color: testimonial.textColor }}
                  >
                    <span className="text-3xl font-serif">"</span>
                    {testimonial.quote.split(testimonial.highlightedText).map((part, i, arr) => (
                      <React.Fragment key={i}>
                        {part}
                        {i < arr.length - 1 && (
                          <span style={{ color: testimonial.highlightColor }}>{testimonial.highlightedText}</span>
                        )}
                      </React.Fragment>
                    ))}
                    <span className="text-3xl font-serif">"</span>
                  </p>
                  <div className="mt-6">
                    <h3 className="text-xl font-bold" style={{ color: testimonial.textColor }}>
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
