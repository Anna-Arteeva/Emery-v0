"use client"

import { useEffect, useRef, useState } from "react"
import { useLanguage } from "./language-provider"
import { translations } from "@/lib/i18n"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"

// Sample testimonial data with added photo information
const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    text: "This app has completely transformed my English learning journey. The human mentor support makes all the difference!",
    source: "App Store",
    photo: "/testimonials/sarah.jpg",
  },
  {
    id: 2,
    name: "Michael T.",
    rating: 5,
    text: "I've tried many language apps before, but Emery is the first one that actually helped me improve my speaking confidence.",
    source: "Google Play",
    photo: "/testimonials/michael.png",
  },
  {
    id: 3,
    name: "Akiko N.",
    rating: 5,
    text: "The combination of structured lessons and human feedback is perfect. I feel like I'm making real progress every day.",
    source: "App Store",
    photo: "/testimonials/akiko.png",
  },
  {
    id: 4,
    name: "Carlos R.",
    rating: 4,
    text: "Great app for intermediate learners. The mentor sessions helped me overcome my plateau and start advancing again.",
    source: "Google Play",
    photo: "/testimonials/carlos.png",
  },
  {
    id: 5,
    name: "Emma L.",
    rating: 5,
    text: "The personalized feedback on my pronunciation has been invaluable. I feel much more confident in conversations now.",
    source: "App Store",
    photo: "/testimonials/emma.jpg",
  },
  {
    id: 6,
    name: "Jürgen K.",
    rating: 5,
    text: "Finally an app that understands that language learning isn't just about vocabulary, but about real communication.",
    source: "Google Play",
    photo: "/testimonials/jurgen.png",
  },
]

export function TestimonialsCarousel() {
  const { language } = useLanguage()
  const t = translations[language]
  const carouselRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollButtons = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10) // 10px buffer
    }
  }

  useEffect(() => {
    checkScrollButtons()
    window.addEventListener("resize", checkScrollButtons)
    return () => window.removeEventListener("resize", checkScrollButtons)
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 320 // Approximate width of a card + margin
      const newScrollLeft =
        direction === "left"
          ? carouselRef.current.scrollLeft - scrollAmount
          : carouselRef.current.scrollLeft + scrollAmount

      carouselRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      })

      // Update button states after scrolling
      setTimeout(checkScrollButtons, 300)
    }
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What our students say</h2>
        </div>

        <div className="relative">
          {/* Left scroll button */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center transition-opacity ${!canScrollLeft ? "opacity-0" : "opacity-100"}`}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>

          {/* Testimonials carousel */}
          <div
            ref={carouselRef}
            className="flex overflow-x-auto gap-6 pb-8 pt-4 px-4 -mx-4 scrollbar-hide snap-x"
            onScroll={checkScrollButtons}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="flex-shrink-0 w-[280px] bg-white rounded-xl shadow-sm border border-gray-100 p-6 snap-start"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 line-clamp-4">{testimonial.text}</p>
                <div className="mt-auto flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-100">
                    <Image
                      src={testimonial.photo || "/placeholder.svg?height=40&width=40&query=person"}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.source}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right scroll button */}
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center transition-opacity ${!canScrollRight ? "opacity-0" : "opacity-100"}`}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  )
}
