import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { WhyItWorks } from "@/components/why-it-works"
import { FeatureSectionsStacked } from "@/components/feature-sections-stacked"
import { OurMentors } from "@/components/our-mentors"
import { ComparisonTable } from "@/components/comparison-table"
import { FaqSection } from "@/components/faq-section"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"
import { EducationalVideos } from "@/components/educational-videos"
import { SuccessStories } from "@/components/success-stories"

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="flex-grow">
        <Hero />
        <WhyItWorks />
        <FeatureSectionsStacked />
        <EducationalVideos />
        <OurMentors />
        <SuccessStories />
        <ComparisonTable />
        <FaqSection />
        <CallToAction />
      </div>
      <Footer />
    </main>
  )
}
