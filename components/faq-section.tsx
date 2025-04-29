"use client"

import { useLanguage } from "./language-provider"
import { translations } from "@/lib/i18n"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container-custom">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-gray-500 font-medium mb-2">{t.faq.subtitle}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.faq.title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t.faq.description}</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {t.faq.questions.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 transition-colors text-left">
                  <span className="font-medium text-gray-900">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">{t.faq.moreQuestions}</p>
          <a href="#contact" className="text-purple-600 font-medium hover:text-purple-700 transition-colors">
            {t.faq.contactUs}
          </a>
        </div>
      </div>
    </section>
  )
}
