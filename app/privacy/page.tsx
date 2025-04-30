import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PrivacyPolicyContent } from "@/components/privacy-policy-content"

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="flex-grow">
        <PrivacyPolicyContent />
      </div>
      <Footer />
    </main>
  )
}
