export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "The Langford Skin Clinic",
    "url": "https://neogennottingham.co.uk",
    "logo": "https://cdn.prod.website-files.com/654790227e1c0eb91511c6e3/65d0a39436a42cbf42c62ed8_the-langford-skin-clinic-logo.svg",
    "image": "https://neogennottingham.co.uk/images/louise%20in%20clinic.jpg",
    "description": "Expert Neogen Nitrogen Plasma treatment clinic led by Louise Langford with over 30 years of experience. Doctor-led practice trusted by celebrities including Strictly's Shirley Ballas.",
    "telephone": "+447812044712",
    "email": "louiselangford5@gmail.com",
    "priceRange": "£££",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Neogen Plasma Treatments",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Eye Rejuvenation",
            "description": "Targeted Neogen treatment for the delicate eye area"
          },
          "price": "300",
          "priceCurrency": "GBP"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Full Face Neogen",
            "description": "Complete facial rejuvenation with Neogen Plasma"
          },
          "price": "495",
          "priceCurrency": "GBP"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Face & Eyes Package",
            "description": "Comprehensive treatment combining full face and eye area rejuvenation"
          },
          "price": "595",
          "priceCurrency": "GBP"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Ultimate Package",
            "description": "Complete face, eyes, and neck treatment for maximum rejuvenation"
          },
          "price": "950",
          "priceCurrency": "GBP"
        }
      ]
    },
    "medicalSpecialty": [
      "Dermatology",
      "Aesthetic Medicine"
    ],
    "availableService": [
      {
        "@type": "MedicalProcedure",
        "name": "Neogen Nitrogen Plasma Treatment",
        "description": "Non-ablative plasma skin rejuvenation for wrinkles, skin laxity, and texture improvement"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Eye Area Rejuvenation",
        "description": "Targeted treatment for crow's feet, fine lines, and hooded eyelids"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Skin Tightening",
        "description": "Collagen stimulation for firmer, younger-looking skin"
      }
    ]
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "The Langford Skin Clinic - Neogen Plasma",
    "alternateName": "Neogen Langford",
    "url": "https://neogennottingham.co.uk",
    "description": "Expert Neogen Nitrogen Plasma skin rejuvenation at The Langford Skin Clinic. Doctor-led clinic with 30 years expertise. As featured with Strictly's Shirley Ballas.",
    "publisher": {
      "@type": "Organization",
      "name": "The Langford Skin Clinic"
    }
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Neogen Plasma Treatment",
    "description": "Revolutionary Neogen Nitrogen Plasma skin rejuvenation treatment for wrinkles, skin laxity, and texture improvement. Non-ablative technology with minimal downtime.",
    "provider": {
      "@type": "MedicalBusiness",
      "name": "The Langford Skin Clinic",
      "telephone": "+447812044712"
    },
    "category": "Medical Treatment",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Neogen Treatment Packages",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Eye Rejuvenation",
          "price": "300",
          "priceCurrency": "GBP"
        },
        {
          "@type": "Offer",
          "name": "Full Face Neogen",
          "price": "495",
          "priceCurrency": "GBP"
        },
        {
          "@type": "Offer",
          "name": "Face & Eyes Package",
          "price": "595",
          "priceCurrency": "GBP"
        },
        {
          "@type": "Offer",
          "name": "Ultimate Package (Face, Eyes & Neck)",
          "price": "950",
          "priceCurrency": "GBP"
        }
      ]
    }
  }

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "The Langford Skin Clinic",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "50",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Susan Pilborough"
        },
        "datePublished": "2024-11-06",
        "reviewBody": "I've had my 1st Neogen Plasma treatment. I can't explain how impressive, youthful and rejuvenated my skin looks and feels already and it's just over 2 weeks ago!",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sheila Burrows"
        },
        "datePublished": "2024-06-27",
        "reviewBody": "I completed a round of 3 Neogen treatments 2 months ago and am absolutely thrilled with the results so far. I'm in my 60s and my skin has improved dramatically.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Elena Georgiou"
        },
        "datePublished": "2024-11-06",
        "reviewBody": "If I could put 10 stars I would... the whole experience was amazing from start to finish... Neogen and LED is a saviour for my 50 year old skin.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      }
    ]
  }

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Louise Langford",
    "jobTitle": "Founder & Neogen Specialist",
    "image": "https://neogennottingham.co.uk/images/louise%20in%20clinic.jpg",
    "description": "Louise Langford is one of the UK's leading Neogen Plasma specialists with over 30 years of experience in aesthetics. As the founder of The Langford Skin Clinic, a doctor-led practice, she is trusted by celebrities including Strictly's Shirley Ballas.",
    "url": "https://neogennottingham.co.uk",
    "worksFor": {
      "@type": "Organization",
      "name": "The Langford Skin Clinic"
    },
    "knowsAbout": [
      "Neogen Plasma Treatment",
      "Aesthetic Medicine",
      "Skin Rejuvenation",
      "Anti-Aging Treatments"
    ]
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Neogen Plasma and how does it work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Neogen Plasma uses nitrogen gas converted into plasma energy to regenerate the skin from within. Unlike ablative treatments, it works by controlled thermal damage that stimulates your body's natural healing response, producing new collagen and elastin for firmer, younger-looking skin."
        }
      },
      {
        "@type": "Question",
        "name": "Is Neogen Plasma treatment painful?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most patients describe the sensation as a warm, tingling feeling. We apply topical numbing cream before treatment to ensure your comfort. The treatment is well-tolerated, and any post-treatment warmth typically subsides within a few hours."
        }
      },
      {
        "@type": "Question",
        "name": "What makes Neogen different from laser treatments?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Neogen Plasma is non-ablative, meaning it doesn't remove or vaporise the skin surface. This results in faster healing, less downtime, and suitability for a wider range of skin types. It regenerates skin from within rather than damaging the outer layer."
        }
      },
      {
        "@type": "Question",
        "name": "What is the typical downtime?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Neogen has minimal downtime compared to ablative lasers. Most patients experience redness and mild swelling for 2-3 days, with full recovery within 5-7 days. Many return to normal activities within 48 hours with makeup if needed."
        }
      },
      {
        "@type": "Question",
        "name": "How many treatments will I need?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Results are visible after a single treatment, with collagen production continuing for up to 6 months. For optimal results, we may recommend a course of 2-3 treatments spaced 4-6 weeks apart, tailored to your individual skin goals."
        }
      },
      {
        "@type": "Question",
        "name": "Why did Shirley Ballas choose Neogen at The Langford Skin Clinic?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Strictly's Shirley Ballas chose The Langford Skin Clinic for its expertise and reputation for natural-looking results. With over 30 years of experience, Louise Langford and her doctor-led team provide personalised care and the latest Neogen technology for celebrity-worthy transformations."
        }
      }
    ]
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://neogennottingham.co.uk"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Treatments",
        "item": "https://neogennottingham.co.uk#treatments"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Results",
        "item": "https://neogennottingham.co.uk#results"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contact",
        "item": "https://neogennottingham.co.uk#contact"
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
