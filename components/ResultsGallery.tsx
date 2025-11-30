'use client'

import { useState } from 'react'
import ModelDayModal from './ModelDayModal'

interface ResultsGalleryProps {
  onBookingClick?: () => void
}

export default function ResultsGallery({ onBookingClick }: ResultsGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [isModelDayModalOpen, setIsModelDayModalOpen] = useState(false)

  const results = [
    {
      image: '/images/co2laser-skin-rejeuvenation.jpeg',
      title: 'Skin Resurfacing',
      description: 'Complete skin rejuvenation, renewal and tightening',
      time: 'Results Vary',
      isAvailable: true,
      featured: true
    },
    {
      image: '/images/Acne Scarring Before and After.jpeg',
      title: 'Acne Scarring',
      description: 'Dramatic improvement in skin texture',
      time: 'Results Vary',
      isAvailable: true,
      featured: false
    },
    {
      image: '/images/graeme.png',
      title: 'Baggy Eye',
      description: 'Effective results for men and women',
      time: 'Results Vary',
      isAvailable: true,
      featured: false
    },
    {
      image: '/images/stretch marks.jpeg',
      title: 'Stretch Marks',
      description: 'Significant reduction in appearance',
      time: 'Results Vary',
      isAvailable: true,
      featured: false
    },
    {
      image: '/images/pigmentation.png',
      title: 'Pigmentation',
      description: 'Even skin tone restoration',
      time: 'Results Vary',
      isAvailable: true,
      featured: false
    },
    {
      image: '/images/model-day-tile.svg',
      title: 'Model Day',
      description: 'Apply to be a model for discounted Neogen treatments',
      time: 'Apply Now',
      isAvailable: true,
      featured: false,
      isModelDay: true
    }
  ]

  return (
    <section id="results" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="text-primary-600 font-medium tracking-wider uppercase text-xs sm:text-sm">Real Results</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-2 sm:mt-4">
            Transformations That
            <span className="block gradient-text">Speak For Themselves</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-600 mt-2 sm:mt-4 max-w-2xl mx-auto px-4">
            Browse our gallery of real patient results
          </p>
        </div>

        {/* Premium Results Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {results.map((result, index) => (
            (result as any).isModelDay ? (
              /* Special Model Day Promotional Card */
              <div
                key={index}
                className="group relative rounded-xl sm:rounded-2xl overflow-hidden shadow-premium hover:shadow-premium-lg transition-all duration-300 cursor-pointer"
                onClick={() => setIsModelDayModalOpen(true)}
              >
                {/* Solid Primary Background */}
                <div className="absolute inset-0 bg-primary-500"></div>

                {/* Subtle lighter gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/10"></div>

                {/* Animated Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                {/* Content */}
                <div className="relative p-6 sm:p-8 text-white min-h-[280px] sm:min-h-[320px] flex flex-col justify-between">
                  {/* Limited Spaces Badge */}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
                      Limited Spaces
                    </span>
                  </div>

                  {/* Main Content */}
                  <div className="text-center pt-4">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z" />
                        <path fillRule="evenodd" d="M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 01-3 3h-15a3 3 0 01-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.152-.177a1.56 1.56 0 001.11-.71l.821-1.317a2.477 2.477 0 012.332-1.39zM12 12.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clipRule="evenodd" />
                      </svg>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-bold mb-2">
                      Model Day
                    </h3>
                    <p className="text-white/90 text-sm sm:text-base max-w-xs mx-auto">
                      Get discounted Neogen treatments in exchange for before & after photos
                    </p>
                  </div>

                  {/* CTA Button */}
                  <div className="text-center mt-6">
                    <span className="inline-flex items-center bg-white text-primary-500 px-6 py-2.5 sm:px-8 sm:py-3 rounded-full font-semibold text-sm sm:text-base group-hover:shadow-lg transition-all duration-300">
                      Apply Now
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              /* Regular Result Card */
              <div
                key={index}
                className={`group relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-premium transition-all duration-300 ${
                  result.isAvailable ? 'sm:hover:shadow-premium-lg cursor-pointer' : 'opacity-90 cursor-not-allowed'
                } ${result.featured ? 'md:col-span-2' : ''}`}
                onClick={() => {
                  if (!result.isAvailable) return
                  setSelectedImage(index)
                }}
              >
                {/* Before/After Label */}
                {result.isAvailable && (
                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4 z-10 flex gap-1.5 sm:gap-2">
                    <span className="bg-white/90 backdrop-blur px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium">
                      Before
                    </span>
                    <span className="bg-primary-500/90 backdrop-blur text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium">
                      After
                    </span>
                  </div>
                )}

                {/* Time Badge or FULL Badge */}
                <div className={`absolute top-2 sm:top-4 right-2 sm:right-4 z-10 backdrop-blur rounded-full px-2 sm:px-3 py-0.5 sm:py-1 ${
                  result.isAvailable ? 'bg-white/90' : 'bg-red-500/90'
                }`}>
                  <span className={`text-[10px] sm:text-xs font-medium ${
                    result.isAvailable ? 'text-neutral-700' : 'text-white'
                  }`}>{result.time}</span>
                </div>

                {/* Image Container */}
                <div className={`relative overflow-hidden ${result.featured ? 'aspect-video' : 'aspect-square'}`}>
                  <img
                    src={result.image}
                    alt={result.title}
                    className="w-full h-full object-cover sm:group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 sm:from-black/50 via-transparent to-transparent sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <h3 className="font-bold text-base sm:text-lg lg:text-xl mb-1 sm:mb-2">{result.title}</h3>
                  <p className="text-xs sm:text-sm lg:text-base text-neutral-600">{result.description}</p>

                  <div className="mt-3 sm:mt-4 flex items-center text-primary-600 font-medium text-sm">
                    <span>View Details</span>
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5 sm:ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>

        {/* Clinic Video Section - Mobile Optimized */}
        <div className="mt-8 sm:mt-12">
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-premium h-[400px] sm:h-[500px] lg:h-[600px]">
            {/* Video Background */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              poster="https://cdn.prod.website-files.com/654790227e1c0eb91511c6e3/65d0a289ff3bb110cabf91dc_hero-langford-skin-clinic-lres-poster-00001.jpg"
            >
              <source src="https://cdn.prod.website-files.com/654790227e1c0eb91511c6e3/65d0a289ff3bb110cabf91dc_hero-langford-skin-clinic-lres-transcode.mp4" type="video/mp4" />
              <source src="https://cdn.prod.website-files.com/654790227e1c0eb91511c6e3/65d0a289ff3bb110cabf91dc_hero-langford-skin-clinic-lres-transcode.webm" type="video/webm" />
            </video>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="p-5 sm:p-8 md:p-12 max-w-full sm:max-w-xl">
                <p className="text-white/80 text-xs sm:text-sm uppercase tracking-widest mb-2 sm:mb-3">
                  The Langford Skin Clinic
                </p>
                <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-display leading-tight mb-3 sm:mb-4">
                  <span className="italic">Transform your skin</span>
                  <br />
                  <span className="font-bold">With the latest innovations in non-surgical treatments</span>
                </h3>
                <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6 max-w-md">
                  Experience our doctor-led aesthetic clinic where safety, expertise, and natural results come first. With over 30 years of experience, we deliver personalised care tailored to your individual needs.
                </p>
                <button
                  onClick={onBookingClick}
                  className="inline-flex items-center bg-white text-primary-600 px-5 sm:px-6 py-3 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:shadow-lg transition-all duration-300 group"
                >
                  Book Your Consultation
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section - Mobile Optimized */}
        <div className="mt-10 sm:mt-12 lg:mt-16 grid grid-cols-3 gap-4 sm:gap-6">
          {[
            { number: '30+', label: 'Years Experience' },
            { number: '£300', label: 'Starting From' },
            { number: '1000s', label: 'Happy Clients' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold gradient-text mb-1 sm:mb-2">{stat.number}</p>
              <p className="text-xs sm:text-sm text-neutral-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Lightbox Modal - Mobile Optimized */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-3 sm:p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full">
              <img
                src={results[selectedImage].image}
                alt={results[selectedImage].title}
                className="w-full rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/90 backdrop-blur rounded-full p-1.5 sm:p-2 hover:bg-white transition"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Model Day Modal */}
        <ModelDayModal
          isOpen={isModelDayModalOpen}
          onClose={() => setIsModelDayModalOpen(false)}
        />
      </div>
    </section>
  )
}