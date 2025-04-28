import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { WhyItWorks } from "@/components/why-it-works"
import { FeatureSectionsStacked } from "@/components/feature-sections-stacked"
import { VideoLessonsSection } from "@/components/video-lessons-section"
import { OurMentors } from "@/components/our-mentors"
import { ComparisonTable } from "@/components/comparison-table"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { FaqSection } from "@/components/faq-section"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="flex-grow">
        <Hero />
        <WhyItWorks />
        <FeatureSectionsStacked />
        <VideoLessonsSection />
        <OurMentors />
        <ComparisonTable />
        <TestimonialsCarousel />
        <FaqSection />
        <CallToAction />
      </div>
      <Footer />
    </main>
  )
}
