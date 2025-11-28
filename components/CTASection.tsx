import { trackPhoneClick } from './FacebookPixel'

interface CTASectionProps {
  onBookingClick?: () => void
}

export default function CTASection({ onBookingClick }: CTASectionProps) {
  return (
    <section id="contact" className="relative py-12 sm:py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700"></div>

      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-primary-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto section-padding text-center text-white">
        <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 backdrop-blur rounded-full mb-4 sm:mb-6">
          <span className="w-2 h-2 bg-white rounded-full animate-pulse mr-2"></span>
          <span className="font-medium text-xs sm:text-sm">As Seen with Shirley Ballas</span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
          Ready for Your
          <span className="block mt-1 sm:mt-2">Transformation?</span>
        </h2>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto text-white/90 px-4">
          Experience revolutionary Neogen Plasma at The Langford Skin Clinic
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 max-w-3xl mx-auto">
          <a
            href="https://wa.me/447812044712"
            onClick={trackPhoneClick}
            className="bg-white/10 backdrop-blur rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-white/20 transition-colors"
          >
            <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">💬</div>
            <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">WhatsApp</h3>
            <p className="text-white/90 text-sm sm:text-base">
              07812 044712
            </p>
          </a>

          <a
            href="mailto:louiselangford5@gmail.com"
            className="bg-white/10 backdrop-blur rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-white/20 transition-colors"
          >
            <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">📧</div>
            <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Email</h3>
            <p className="text-white/90 text-xs sm:text-sm break-all">
              louiselangford5@gmail.com
            </p>
          </a>

          <a
            href="tel:+447812044712"
            onClick={trackPhoneClick}
            className="bg-white/10 backdrop-blur rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:bg-white/20 transition-colors"
          >
            <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">📞</div>
            <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Call Us</h3>
            <p className="text-white/90 text-sm sm:text-base">
              07812 044712
            </p>
          </a>
        </div>

        <button
          onClick={onBookingClick}
          className="inline-flex items-center justify-center bg-white text-primary-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
        >
          Book Your Consultation
          <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>

        <div className="mt-8 sm:mt-12 flex items-center justify-center flex-wrap gap-4 sm:gap-8">
          <div className="text-center">
            <p className="text-xl sm:text-2xl font-bold mb-0.5 sm:mb-1">⭐</p>
            <p className="text-xs sm:text-sm text-white/80">Shirley Ballas</p>
          </div>

          <div className="hidden sm:block w-px h-12 bg-white/30"></div>

          <div className="text-center">
            <p className="text-xl sm:text-2xl font-bold mb-0.5 sm:mb-1">30+</p>
            <p className="text-xs sm:text-sm text-white/80">Years Experience</p>
          </div>

          <div className="hidden sm:block w-px h-12 bg-white/30"></div>

          <div className="text-center">
            <p className="text-xl sm:text-2xl font-bold mb-0.5 sm:mb-1">👨‍⚕️</p>
            <p className="text-xs sm:text-sm text-white/80">Doctor Led Clinic</p>
          </div>
        </div>
      </div>
    </section>
  )
}