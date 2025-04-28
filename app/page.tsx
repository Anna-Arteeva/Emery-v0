import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { WhyItWorks } from "@/components/why-it-works"
import { FeatureSections } from "@/components/feature-sections"
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
        <FeatureSections />
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
