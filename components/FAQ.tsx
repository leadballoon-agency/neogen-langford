'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'What is Neogen Plasma and how does it work?',
    answer: 'Neogen Plasma uses nitrogen gas converted into plasma energy to regenerate the skin from within. Unlike ablative treatments, it works by controlled thermal damage that stimulates your body\'s natural healing response, producing new collagen and elastin for firmer, younger-looking skin.'
  },
  {
    question: 'Is Neogen Plasma treatment painful?',
    answer: 'Most patients describe the sensation as a warm, tingling feeling. We apply topical numbing cream before treatment to ensure your comfort. The treatment is well-tolerated, and any post-treatment warmth typically subsides within a few hours.'
  },
  {
    question: 'What makes Neogen different from laser treatments?',
    answer: 'Neogen Plasma is non-ablative, meaning it doesn\'t remove or vaporise the skin surface. This results in faster healing, less downtime, and suitability for a wider range of skin types. It regenerates skin from within rather than damaging the outer layer.'
  },
  {
    question: 'What is the typical downtime?',
    answer: 'Neogen has minimal downtime compared to ablative lasers. Most patients experience redness and mild swelling for 2-3 days, with full recovery within 5-7 days. Many return to normal activities within 48 hours with makeup if needed.'
  },
  {
    question: 'How many treatments will I need?',
    answer: 'Results are visible after a single treatment, with collagen production continuing for up to 6 months. For optimal results, we may recommend a course of 2-3 treatments spaced 4-6 weeks apart, tailored to your individual skin goals.'
  },
  {
    question: 'Why did Shirley Ballas choose Neogen at The Langford Skin Clinic?',
    answer: 'Strictly\'s Shirley Ballas chose The Langford Skin Clinic for its expertise and reputation for natural-looking results. With over 30 years of experience, Louise Langford and her doctor-led team provide personalised care and the latest Neogen technology for celebrity-worthy transformations.'
  }
]

interface FAQProps {
  onBookingClick?: () => void
}

export default function FAQ({ onBookingClick }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-4xl mx-auto section-padding">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="text-primary-600 font-medium tracking-wider uppercase text-xs sm:text-sm">FAQ</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-2 sm:mt-4">
            Your Questions
            <span className="block gradient-text">Answered</span>
          </h2>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex justify-between items-center hover:bg-primary-50 transition-colors"
              >
                <span className="font-semibold text-sm sm:text-base lg:text-lg pr-3 sm:pr-4">{faq.question}</span>
                <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-primary-400 to-primary-600 flex items-center justify-center flex-shrink-0 transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}>
                <div className="px-4 sm:px-6 pb-4 sm:pb-5 text-xs sm:text-sm lg:text-base text-neutral-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-sm sm:text-base text-neutral-600 mb-4 sm:mb-6">
            Still have questions? We're here to help.
          </p>
          <button 
            onClick={onBookingClick}
            className="inline-flex items-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base lg:text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  )
}