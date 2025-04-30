"use client"

import { useLanguage } from "./language-provider"

export function PrivacyPolicyContent() {
  const { language } = useLanguage()

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">Last Updated: April 30, 2025</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
          <p>
            Welcome to Emery English ("we," "our," or "us"). We respect your privacy and are committed to protecting
            your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your
            information when you use our website, mobile application, and services (collectively, the "Service").
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. Information We Collect</h2>
          <h3 className="text-xl font-semibold mt-6 mb-3">2.1 Personal Information</h3>
          <p>We may collect personal information that you provide directly to us, including but not limited to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Name, email address, and contact details</li>
            <li>Account credentials (username and password)</li>
            <li>Profile information (such as profile picture, language preferences)</li>
            <li>Payment information (processed through secure third-party payment processors)</li>
            <li>Communication preferences</li>
            <li>Learning progress, assessment results, and performance data</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3">2.2 Automatically Collected Information</h3>
          <p>When you access or use our Service, we may automatically collect certain information, including:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Device information (such as device type, operating system, and browser type)</li>
            <li>Log data (such as IP address, access times, and pages viewed)</li>
            <li>Usage information (such as features used and learning patterns)</li>
            <li>Location information (with your consent)</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. How We Use Your Information</h2>
          <p>We use the information we collect for various purposes, including:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Providing, maintaining, and improving our Service</li>
            <li>Processing transactions and managing your account</li>
            <li>Personalizing your learning experience</li>
            <li>Connecting you with mentors and other learners</li>
            <li>Communicating with you about updates, offers, and support</li>
            <li>Analyzing usage patterns to enhance our Service</li>
            <li>Ensuring the security and integrity of our Service</li>
            <li>Complying with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Sharing Your Information</h2>
          <p>We may share your information with:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Service providers who perform services on our behalf</li>
            <li>Language mentors and tutors as necessary for providing our Service</li>
            <li>Other users, with your consent (such as in community features)</li>
            <li>Business partners for joint offerings you choose to participate in</li>
            <li>Legal authorities when required by law or to protect our rights</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information.
            However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot
            guarantee absolute security.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">6. Your Rights and Choices</h2>
          <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Accessing, correcting, or deleting your personal information</li>
            <li>Withdrawing consent for processing your data</li>
            <li>Restricting or objecting to certain processing activities</li>
            <li>Requesting portability of your personal information</li>
            <li>Opting out of marketing communications</li>
          </ul>
          <p>To exercise these rights, please contact us using the information provided in the "Contact Us" section.</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">7. Children's Privacy</h2>
          <p>
            Our Service is not intended for children under the age of 16. We do not knowingly collect personal
            information from children under 16. If you are a parent or guardian and believe your child has provided us
            with personal information, please contact us.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">8. International Data Transfers</h2>
          <p>
            Your information may be transferred to and processed in countries other than your country of residence.
            These countries may have different data protection laws. We take appropriate safeguards to ensure your
            information remains protected.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">9. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
            Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy
            Policy periodically for any changes.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">10. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <p className="mb-8">
            <strong>Email:</strong> privacy@emeryenglish.com
            <br />
            <strong>Address:</strong> Emery English, 123 Language Lane, Learning City, 10001
          </p>
        </div>
      </div>
    </section>
  )
}
