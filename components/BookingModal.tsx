'use client'

import { useEffect } from 'react'
import { trackBookingModalOpen, trackPhoneClick } from './FacebookPixel'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  assessmentData?: any
}

export default function BookingModal({ isOpen, onClose, assessmentData }: BookingModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      trackBookingModalOpen()
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center sm:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal - Mobile slides up from bottom, desktop centered */}
      <div className="relative w-full max-w-2xl bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden animate-modal-slide-up max-h-[90vh] sm:max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="relative bg-gradient-to-br from-primary-500 to-primary-600 p-5 sm:p-6 lg:p-8 text-white flex-shrink-0">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 lg:top-6 lg:right-6 w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/20 backdrop-blur rounded-full mb-2 sm:mb-3 lg:mb-4">
              <span className="text-2xl sm:text-3xl">✨</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2">Book Your Neogen Treatment</h2>
            <p className="text-white/90 text-xs sm:text-sm lg:text-base">
              The Langford Skin Clinic
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 overflow-hidden">
          <div className="flex-1 overflow-y-auto p-6 sm:p-8">
            <div className="space-y-4 sm:space-y-6 animate-fade-in">
              <div className="text-center">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">Get in Touch with Louise Langford</h3>
                <p className="text-sm sm:text-base text-neutral-600 mb-4 sm:mb-6">
                  Contact us directly to book your Neogen consultation
                </p>
              </div>

              {/* WhatsApp - Primary CTA */}
              <a
                href="https://wa.me/447812044712"
                onClick={trackPhoneClick}
                className="block w-full bg-[#25D366] hover:bg-[#22c55e] text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="flex items-center justify-center space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-sm sm:text-base font-medium mb-0.5 sm:mb-1">Message us on WhatsApp</p>
                    <p className="text-xl sm:text-2xl font-bold">07812 044712</p>
                    <p className="text-xs sm:text-sm text-white/90 mt-0.5">Tap to start conversation</p>
                  </div>
                </div>
              </a>

              {/* Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-neutral-200"></div>
                </div>
                <div className="relative flex justify-center text-xs sm:text-sm uppercase">
                  <span className="bg-white px-2 text-neutral-500">Or</span>
                </div>
              </div>

              {/* Phone Call */}
              <a
                href="tel:+447812044712"
                onClick={trackPhoneClick}
                className="block w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="flex items-center justify-center space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-sm sm:text-base font-medium mb-0.5 sm:mb-1">Prefer to call?</p>
                    <p className="text-xl sm:text-2xl font-bold">07812 044712</p>
                    <p className="text-xs sm:text-sm text-white/90 mt-0.5">Tap to call now</p>
                  </div>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:louiselangford5@gmail.com"
                className="block w-full border-2 border-primary-200 hover:border-primary-400 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="flex items-center justify-center space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-primary-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-sm sm:text-base font-medium text-neutral-700 mb-0.5 sm:mb-1">Send an email</p>
                    <p className="text-base sm:text-lg font-bold text-primary-600">louiselangford5@gmail.com</p>
                  </div>
                </div>
              </a>

              <div className="bg-white border-2 border-primary-100 rounded-xl p-6">
                <h5 className="font-semibold mb-4 flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Why choose The Langford Skin Clinic:
                </h5>
                <ul className="space-y-3 text-sm text-neutral-700">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2 mt-0.5">✓</span>
                    <span>30+ years experience with Louise Langford</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2 mt-0.5">✓</span>
                    <span>Trusted by Strictly's Shirley Ballas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2 mt-0.5">✓</span>
                    <span>Doctor-led consultations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2 mt-0.5">✓</span>
                    <span>Personalised Neogen treatment plans</span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <p className="text-xs text-neutral-500">
                  We typically respond within 2 hours during clinic hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
