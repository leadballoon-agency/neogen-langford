'use client'

import { useState, useEffect } from 'react'

interface AboutSectionProps {
  onBookingClick?: () => void
}

export default function AboutSection({ onBookingClick }: AboutSectionProps) {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  // Handle body overflow when modal is open
  useEffect(() => {
    if (isVideoModalOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isVideoModalOpen])

  const practitioners = [
    {
      name: 'Louise Langford',
      title: 'Founder & Neogen Specialist',
      bio: 'With over 30 years of experience in aesthetics, Louise Langford is one of the UK\'s leading Neogen Plasma specialists. As the founder of The Langford Skin Clinic, a doctor-led practice, she brings unparalleled expertise and a personalised approach to every treatment. Her clinic is trusted by celebrities including Strictly\'s Shirley Ballas, who chose The Langford Skin Clinic for her own Neogen transformation.',
      qualifications: [
        '30+ Years Experience',
        'Doctor-Led Clinic',
        'Neogen Plasma Expert',
        'Trusted by Shirley Ballas'
      ]
    }
  ]

  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="text-primary-600 font-medium tracking-wider uppercase text-xs sm:text-sm">About The Clinic</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-2 sm:mt-4">
            30 Years of
            <span className="block gradient-text">Excellence</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-600 mt-2 sm:mt-4 max-w-2xl mx-auto px-4">
            Doctor-led clinic trusted by celebrities and patients alike
          </p>
        </div>

        <div className="flex justify-center">
          {practitioners.map((practitioner, index) => (
            <div key={index} className="w-full max-w-2xl bg-gradient-to-br from-white to-primary-50/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-premium hover:shadow-premium-lg transition-all duration-300">
              {/* Practitioner Video Thumbnail */}
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg mb-6 max-w-md mx-auto">
                <div className="aspect-[4/5] relative">
                  <video
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  >
                    <source src="https://storage.googleapis.com/msgsndr/rqUmK56dJu0sV3O0FpnV/media/692ca61e82f4c569bf2e7ebf.mp4#t=0.1" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-100/10 to-primary-300/10 pointer-events-none"></div>

                  {/* Play Button - Opens Modal */}
                  <button
                    onClick={() => setIsVideoModalOpen(true)}
                    className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors cursor-pointer"
                    aria-label="Play video"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 text-primary-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>

              {/* Practitioner Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold">
                    {practitioner.name}
                  </h3>
                  <p className="text-base sm:text-lg text-primary-600 font-medium mt-1">
                    {practitioner.title}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                  {practitioner.bio}
                </p>

                {/* Qualifications */}
                <div className="space-y-3 pt-2">
                  <h4 className="font-bold text-base sm:text-lg">Qualifications & Expertise</h4>
                  <ul className="space-y-2">
                    {practitioner.qualifications.map((item, qIndex) => (
                      <li key={qIndex} className="flex items-start text-neutral-700">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs sm:text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Single CTA below both practitioners */}
        <div className="text-center mt-8 sm:mt-12">
          <button
            onClick={onBookingClick}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Book Your Consultation
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsVideoModalOpen(false)}
        >
          {/* Modal Container */}
          <div
            className="relative bg-black rounded-2xl shadow-2xl overflow-hidden max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-3 right-3 z-10 w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-lg"
              aria-label="Close video"
            >
              <svg className="w-4 h-4 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Video */}
            <video
              autoPlay
              controls
              playsInline
              className="w-full"
            >
              <source src="https://storage.googleapis.com/msgsndr/rqUmK56dJu0sV3O0FpnV/media/692ca61e82f4c569bf2e7ebf.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </section>
  )
}
