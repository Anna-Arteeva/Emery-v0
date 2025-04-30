import { Header } from "@/components/header"
import { PricingSection } from "@/components/pricing-section"
import { Footer } from "@/components/footer"

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="flex-grow">
        <PricingSection />
      </div>
      <Footer />
    </main>
  )
}
