"use client"

import { useLanguage } from "./language-provider"

export function TermsOfServiceContent() {
  const { language } = useLanguage()

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Terms of Service</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">Last Updated: April 30, 2025</p>

          <h2 className="text-2xl font-bold mt-8 mb-4">1. Agreement to Terms</h2>
          <p>
            These Terms of Service ("Terms") constitute a legally binding agreement between you and Emery English ("we,"
            "our," or "us") regarding your use of our website, mobile application, and services (collectively, the
            "Service"). By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to
            these Terms, please do not use the Service.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. Eligibility</h2>
          <p>
            You must be at least 16 years old to use our Service. By using the Service, you represent and warrant that
            you meet this eligibility requirement. If you are under 18, you represent that you have your parent's or
            legal guardian's permission to use the Service and that they have read and agree to these Terms.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Account Registration</h2>
          <p>
            To access certain features of the Service, you may need to create an account. You agree to provide accurate,
            current, and complete information during the registration process and to update such information to keep it
            accurate, current, and complete. You are responsible for safeguarding your password and for all activities
            that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Subscription and Payment</h2>
          <p>
            4.1 <strong>Subscription Plans:</strong> We offer various subscription plans for our Service. The features,
            pricing, and terms of each plan are described on our website.
          </p>
          <p>
            4.2 <strong>Payment:</strong> You agree to pay all fees associated with your selected subscription plan. All
            payments are processed through secure third-party payment processors. By providing payment information, you
            represent that you are authorized to use the payment method.
          </p>
          <p>
            4.3 <strong>Automatic Renewal:</strong> Subscriptions automatically renew at the end of each billing period
            unless canceled before the renewal date. You can cancel your subscription at any time through your account
            settings or by contacting customer support.
          </p>
          <p>
            4.4 <strong>Refunds:</strong> We offer a 30-day satisfaction guarantee for new subscriptions. If you are not
            satisfied with our Service within the first 30 days, you may request a full refund. After this period,
            refunds are provided at our discretion and in accordance with applicable laws.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. User Conduct</h2>
          <p>You agree not to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Use the Service for any illegal purpose or in violation of any laws</li>
            <li>Impersonate any person or entity or falsely state your affiliation</li>
            <li>Interfere with or disrupt the Service or servers connected to the Service</li>
            <li>Attempt to gain unauthorized access to any part of the Service</li>
            <li>Use the Service to transmit harmful code or malware</li>
            <li>Harass, abuse, or harm another person through the Service</li>
            <li>Share inappropriate, offensive, or illegal content</li>
            <li>Use the Service for commercial purposes without our consent</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">6. Intellectual Property</h2>
          <p>
            6.1 <strong>Our Content:</strong> The Service and its original content, features, and functionality are
            owned by Emery English and are protected by copyright, trademark, and other intellectual property laws. You
            may not reproduce, distribute, modify, create derivative works of, publicly display, or use any content from
            our Service without our prior written consent.
          </p>
          <p>
            6.2 <strong>User Content:</strong> You retain ownership of any content you submit to the Service. By
            submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify,
            adapt, publish, translate, and distribute your content in connection with providing and promoting the
            Service.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">7. Mentors and Educational Content</h2>
          <p>
            7.1 <strong>Mentors:</strong> Our Service may connect you with language mentors. While we strive to provide
            qualified mentors, we do not guarantee specific results from your interactions with mentors.
          </p>
          <p>
            7.2 <strong>Educational Content:</strong> Our educational content is designed to assist in language learning
            but is not a substitute for formal education or certification. We do not guarantee specific learning
            outcomes or language proficiency levels.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">8. Disclaimer of Warranties</h2>
          <p>
            THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
            IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">9. Limitation of Liability</h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL EMERY ENGLISH BE LIABLE FOR ANY INDIRECT,
            INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER
            INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING
            FROM YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">10. Termination</h2>
          <p>
            We may terminate or suspend your account and access to the Service immediately, without prior notice or
            liability, for any reason, including if you breach these Terms. Upon termination, your right to use the
            Service will immediately cease.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">11. Changes to Terms</h2>
          <p>
            We may modify these Terms at any time. We will notify you of any changes by posting the updated Terms on
            this page and updating the "Last Updated" date. Your continued use of the Service after any such changes
            constitutes your acceptance of the new Terms.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">12. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard
            to its conflict of law provisions.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">13. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at:</p>
          <p className="mb-8">
            <strong>Email:</strong> legal@emeryenglish.com
            <br />
            <strong>Address:</strong> Emery English, 123 Language Lane, Learning City, 10001
          </p>
        </div>
      </div>
    </section>
  )
}
