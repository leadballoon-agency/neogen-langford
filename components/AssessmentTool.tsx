'use client'

import { useState } from 'react'
import { trackAssessmentStart, trackAssessmentComplete } from './FacebookPixel'

interface AssessmentToolProps {
  onBookingClick?: () => void
  onAssessmentComplete?: (data: any) => void
}

export default function AssessmentTool({ onBookingClick, onAssessmentComplete }: AssessmentToolProps) {
  const [step, setStep] = useState(1)
  const [answers, setAnswers] = useState<any>({})
  const [selectedSkinTone, setSelectedSkinTone] = useState<number | null>(null)

  const skinTones = [
    { type: 1, name: 'Very Fair', color: '#FFE4D6', desc: 'Always burns, never tans' },
    { type: 2, name: 'Fair', color: '#FFE8D0', desc: 'Usually burns, tans minimally' },
    { type: 3, name: 'Medium', color: '#E8C8A0', desc: 'Sometimes burns, tans uniformly' },
    { type: 4, name: 'Olive', color: '#C9A86C', desc: 'Rarely burns, tans well' },
    { type: 5, name: 'Brown', color: '#8B6914', desc: 'Very rarely burns, tans easily' },
    { type: 6, name: 'Deep Brown', color: '#4A3728', desc: 'Never burns, deeply pigmented' }
  ]

  const questions = [
    {
      id: 1,
      question: "What is your primary skin concern?",
      options: [
        { value: 'wrinkles', label: 'Fine lines & wrinkles', icon: '🔍' },
        { value: 'sagging', label: 'Skin laxity & sagging', icon: '✨' },
        { value: 'eyes', label: 'Eye area (crow\'s feet, hooded)', icon: '👁️' },
        { value: 'texture', label: 'Skin texture & tone', icon: '💎' },
        { value: 'scars', label: 'Acne scars', icon: '🌟' },
        { value: 'aging', label: 'General rejuvenation', icon: '⏰' }
      ]
    },
    {
      id: 2,
      question: "Which areas would you like to treat?",
      options: [
        { value: 'eyes', label: 'Eyes only', icon: '👁️' },
        { value: 'face', label: 'Full face', icon: '😊' },
        { value: 'face-eyes', label: 'Face & eyes', icon: '✨' },
        { value: 'full', label: 'Face, eyes & neck', icon: '💎' }
      ]
    },
    {
      id: 3,
      question: "What is your natural skin tone?",
      subtext: "Neogen is suitable for all skin types - this helps us personalise your treatment",
      type: 'skin-tone'
    }
  ]

  const totalSteps = questions.length
  const currentQuestion = questions[step - 1]

  const handleAnswer = (value: string | number) => {
    const newAnswers = { ...answers, [step]: value }
    setAnswers(newAnswers)

    // Track first question as assessment start
    if (step === 1) {
      trackAssessmentStart()
    }

    if (step < totalSteps) {
      setStep(step + 1)
    } else {
      // Show results and emit assessment completion
      setStep(step + 1)
      const recommendation = getRecommendation(newAnswers)

      // Track assessment completion
      trackAssessmentComplete(recommendation.treatment)

      onAssessmentComplete?.({
        answers: newAnswers,
        recommendation,
        completedAt: new Date().toISOString()
      })
    }
  }

  const getRecommendation = (assessmentAnswers: any = answers) => {
    const area = assessmentAnswers[2]
    const skinType = assessmentAnswers[3]

    // Neogen is suitable for ALL skin types (I-VI)
    // Recommendation based on treatment area selected

    if (area === 'eyes') {
      return {
        treatment: 'Eye Rejuvenation',
        price: '£300',
        description: 'Targeted Neogen treatment for the delicate eye area. Perfect for crow\'s feet, fine lines, and hooded eyelids. Minimal downtime with visible results.',
        isSuitable: true,
        skinType: skinType
      }
    }

    if (area === 'face') {
      return {
        treatment: 'Full Face Neogen',
        price: '£495',
        description: 'Our most popular treatment - complete facial rejuvenation with Neogen Plasma. Stimulates collagen production for firmer, younger-looking skin.',
        isSuitable: true,
        skinType: skinType,
        badge: 'Most Popular'
      }
    }

    if (area === 'face-eyes') {
      return {
        treatment: 'Face & Eyes Package',
        price: '£595',
        description: 'Comprehensive treatment combining full face and delicate eye area rejuvenation. The perfect combination for total facial transformation.',
        isSuitable: true,
        skinType: skinType
      }
    }

    // full (face, eyes & neck)
    return {
      treatment: 'Ultimate Package',
      price: '£950',
      description: 'The complete transformation - face, eyes, and neck treatment for maximum rejuvenation. As chosen by Shirley Ballas for her own Neogen journey.',
      isSuitable: true,
      skinType: skinType,
      badge: 'Premium'
    }
  }

  return (
    <section id="assessment" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-4xl mx-auto section-padding">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-primary-100 to-primary-200 rounded-full mb-3">
            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse mr-2"></span>
            <span className="text-primary-700 font-medium text-xs sm:text-sm">AI-Powered Assessment</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            Find Your Perfect
            <span className="gradient-text"> Treatment</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-600 max-w-2xl mx-auto px-4">
            Answer 3 quick questions for personalized recommendations
          </p>
        </div>

        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-premium p-6 sm:p-8 md:p-12">
          {step <= totalSteps && currentQuestion ? (
            <>
              {/* Progress Bar */}
              <div className="mb-6 sm:mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs sm:text-sm text-neutral-600">Step {step} of {totalSteps}</span>
                  <span className="text-xs sm:text-sm text-neutral-600">{Math.round((step / totalSteps) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                  <div
                    className="bg-gradient-to-r from-primary-400 to-primary-600 h-full rounded-full transition-all duration-500"
                    style={{ width: `${(step / totalSteps) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Question */}
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">{currentQuestion.question}</h3>
                {currentQuestion.subtext && (
                  <p className="text-sm text-neutral-500">{currentQuestion.subtext}</p>
                )}
              </div>

              {/* Skin Tone Selector */}
              {currentQuestion.type === 'skin-tone' ? (
                <div className="space-y-3">
                  {skinTones.map((tone) => (
                    <button
                      key={tone.type}
                      onClick={() => {
                        setSelectedSkinTone(tone.type)
                        setTimeout(() => handleAnswer(tone.type), 300)
                      }}
                      className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-300 hover:scale-102 ${
                        selectedSkinTone === tone.type
                          ? 'border-primary-500 bg-primary-50 shadow-lg'
                          : 'border-gray-200 hover:border-primary-300 hover:shadow-md'
                      }`}
                    >
                      <div
                        className="w-16 h-16 rounded-full border-4 border-white shadow-md flex-shrink-0"
                        style={{ backgroundColor: tone.color }}
                      ></div>
                      <div className="text-left flex-grow">
                        <div className="font-semibold text-gray-900 mb-1">
                          {tone.name}
                          <span className="text-xs text-gray-500 ml-2">Type {tone.type}</span>
                        </div>
                        <div className="text-sm text-gray-600">{tone.desc}</div>
                      </div>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                        selectedSkinTone === tone.type
                          ? 'border-primary-500 bg-primary-500'
                          : 'border-gray-300'
                      }`}>
                        {selectedSkinTone === tone.type && (
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                /* Standard Options */
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {currentQuestion.options?.map((option: any) => (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(option.value)}
                      className="group relative bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-primary-500 hover:shadow-lg transition-all duration-300 hover:scale-105 flex sm:flex-col items-center sm:items-center text-left sm:text-center"
                    >
                      <div className="text-3xl sm:text-4xl mr-4 sm:mr-0 sm:mb-3">{option.icon}</div>
                      <p className="font-medium text-sm sm:text-base text-neutral-700 group-hover:text-primary-600">
                        {option.label}
                      </p>
                    </button>
                  ))}
                </div>
              )}
            </>
          ) : (
            /* Results */
            <div className="text-center animate-slide-up">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <span className="text-3xl sm:text-4xl">✨</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                Your Perfect Neogen Treatment
              </h3>

              <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-4 sm:mb-6 border-2 border-primary-100">
                <h4 className="text-lg sm:text-xl font-bold text-primary-600 mb-2">
                  {getRecommendation().treatment}
                </h4>
                <div className="mb-2 sm:mb-3">
                  {(getRecommendation() as any).originalPrice && (
                    <p className="text-lg text-neutral-400 line-through">{(getRecommendation() as any).originalPrice}</p>
                  )}
                  <p className="text-2xl sm:text-3xl font-bold gradient-text">
                    {getRecommendation().price}
                  </p>
                </div>
                <p className="text-sm sm:text-base text-neutral-600">
                  {getRecommendation().description}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:gap-4">
                <button
                  onClick={onBookingClick}
                  type="button"
                  className="w-full inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:shadow-xl hover:scale-105 px-6 py-3 sm:py-4 rounded-full font-medium transition-all duration-300"
                >
                  Book Your {getRecommendation().treatment}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                <a
                  href="https://wa.me/447812044712"
                  className="w-full inline-flex items-center justify-center border-2 border-primary-500 text-primary-600 bg-white hover:bg-primary-50 px-6 py-3 sm:py-4 rounded-full font-medium transition-all duration-300"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Ask a Question on WhatsApp
                </a>
                <button
                  onClick={() => {setStep(1); setAnswers({}); setSelectedSkinTone(null)}}
                  className="w-full inline-flex items-center justify-center text-primary-600 text-sm font-medium hover:text-primary-700 transition-all duration-300"
                >
                  ← Start Over
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
