import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TermsOfServiceContent } from "@/components/terms-of-service-content"

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="flex-grow">
        <TermsOfServiceContent />
      </div>
      <Footer />
    </main>
  )
}
