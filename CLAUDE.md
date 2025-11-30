# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Neogen Plasma treatment landing page for The Langford Skin Clinic, built with Next.js 15, TypeScript, and Tailwind CSS.

- **Domain**: neogennottingham.co.uk
- **Repository**: https://github.com/leadballoon-agency/neogen-langford.git

## Development Commands

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run lint       # Run ESLint
```

## Architecture

### Routes

| Route | Purpose |
|-------|---------|
| `/` | Main landing page (PageWrapper) |
| `/skin-assessment` | Standalone Fitzpatrick skin type quiz with lead capture |
| `/privacy-policy` | Privacy policy page (needs content update for Langford) |
| `/api/contact` | Contact form endpoint (logs only, not wired to email service) |

### Page Composition
The main page (`app/page.tsx`) renders a single `PageWrapper` component that orchestrates all sections and manages global state:

- **Booking state**: `isBookingModalOpen` controls the booking modal visibility
- **Video state**: `isVideoModalOpen` controls the video modal
- **Assessment data**: `assessmentData` passes quiz results to the booking flow

All section components receive an `onBookingClick` prop that triggers the booking modal.

### Component Organization

**Active components** (used in PageWrapper):
- `Navigation`, `PremiumHero`, `AssessmentTool`, `AboutSection`, `PremiumTreatments`
- `ResultsGallery`, `Reviews`, `ProcessSection`, `FAQ`, `CTASection`, `Footer`
- `BookingModal`, `VideoModal`

**Available but unused**:
- `StructuredData` - schema.org markup (ready to use but not currently imported)

**Legacy/unused components** (from template, can be deleted):
- `Hero.tsx`, `HeroSection.tsx`, `Header.tsx`, `CTA.tsx`, `Process.tsx`
- `Treatment.tsx`, `TreatmentDetails.tsx`, `Benefits.tsx`, `About.tsx`
- `Results.tsx`, `AssessmentModal.tsx`, `TeamSection.tsx`, `FinanceSection.tsx`

### Key Content Files

| Content | File |
|---------|------|
| SEO metadata & OpenGraph | `app/layout.tsx` |
| Structured data (schema.org) | `components/StructuredData.tsx` |
| Practitioner info & image | `components/AboutSection.tsx` |
| Treatment pricing | `components/PremiumTreatments.tsx` |
| FAQs | `components/FAQ.tsx` |
| Reviews | `components/Reviews.tsx` |
| Contact details | `components/BookingModal.tsx`, `components/Footer.tsx` |
| Skin assessment quiz config | `app/skin-assessment/page.tsx` (CONFIG object with webhook/booking URLs) |

### Important Notes

- **Louise Langford is NOT a doctor** - the clinic is "doctor-led" but Louise is referred to as "Founder & Neogen Specialist"
- Louise's image: `/images/louise in clinic.jpg`
- Video background in ResultsGallery uses Langford Skin Clinic CDN video
- Contact flow uses WhatsApp/phone/email directly (no form submission)
- **Privacy policy page** (`/privacy-policy`) still contains template content for "Rachael Katie Cosmetics" - needs updating for Langford

### Integrations

- **Skin Assessment Webhook**: Lead Connector HQ webhook in `app/skin-assessment/page.tsx`
- **Booking Widget**: Lead Balloon booking widget URLs in assessment page CONFIG
- **Facebook Pixel**: Loaded via `FacebookPixel.tsx` in layout

### Analytics

`FacebookPixel.tsx` exports tracking functions:
- `trackAssessmentStart()`, `trackAssessmentComplete()` - Quiz funnel
- `trackBookingModalOpen()`, `trackPhoneClick()` - Conversion events

### Tailwind Theme

Custom colors in `tailwind.config.js`:
- `primary-*`: Deep teal (500: #2a8f73)
- `gold-*`: Gold accent (500: #d4912a)

Fonts: `font-display` (Playfair Display) for headings, `font-sans` (Inter) for body.
