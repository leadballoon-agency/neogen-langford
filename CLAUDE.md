# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Neogen Plasma treatment landing page for The Langford Skin Clinic, built with Next.js 15, TypeScript, and Tailwind CSS. This is a client-specific customization of a clinic template.

## Development Commands

```bash
npm run dev        # Start development server (localhost:3002)
npm run build      # Build for production
npm run lint       # Run ESLint
```

## Architecture

### Page Composition
The main page (`app/page.tsx`) renders a single `PageWrapper` component that orchestrates all sections and manages global state:

- **Booking state**: `isBookingModalOpen` controls the booking modal visibility
- **Video state**: `isVideoModalOpen` controls the video modal
- **Assessment data**: `assessmentData` passes quiz results to the booking flow

All section components receive an `onBookingClick` prop that triggers the booking modal with `skipToCalendar: true`.

### Component Organization

**Active components** (used in PageWrapper):
- `Navigation`, `PremiumHero`, `AssessmentTool`, `AboutSection`, `PremiumTreatments`
- `ResultsGallery`, `Reviews`, `ProcessSection`, `FAQ`, `CTASection`, `Footer`
- `BookingModal`, `VideoModal`

**Legacy/unused components** (from template):
- `Hero.tsx`, `HeroSection.tsx`, `Header.tsx`, `CTA.tsx`, `Process.tsx`
- `Treatment.tsx`, `TreatmentDetails.tsx`, `Benefits.tsx`, `About.tsx`
- `Results.tsx`, `AssessmentModal.tsx`, `TeamSection.tsx`, `FinanceSection.tsx`

### Analytics Integration

`FacebookPixel.tsx` exports tracking functions used throughout:
- `trackAssessmentStart()`, `trackAssessmentComplete()` - Quiz funnel
- `trackBookingModalOpen()`, `trackPhoneClick()` - Conversion events

Components import and call these directly (e.g., `BookingModal.tsx` calls `trackBookingModalOpen()` on open).

### Tailwind Custom Theme

Custom color palette in `tailwind.config.js`:
- `primary-*`: Deep teal (500: #2a8f73) - main brand color
- `gold-*`: Gold accent (500: #d4912a)
- `neutral-*`: Grayscale

Custom fonts: `font-display` (Playfair Display) for headings, `font-sans` (Inter) for body.

### SEO Configuration

All metadata in `app/layout.tsx`:
- OpenGraph, Twitter cards configured
- Structured data via `StructuredData.tsx`
- Dynamic `sitemap.ts` and `robots.ts`

### Contact Methods

The booking flow directs users to WhatsApp, phone, or email (no form submission to API). The `/api/contact/route.ts` endpoint exists but currently only logs submissions.

## Customization for New Clinics

When duplicating for another clinic, update:

1. **Branding**: `app/layout.tsx` (metadata, title), `tailwind.config.js` (colors)
2. **Contact**: `BookingModal.tsx` (WhatsApp, phone, email), `Footer.tsx`
3. **Content**: Component copy in `PremiumHero.tsx`, `AboutSection.tsx`, `FAQ.tsx`
4. **Analytics**: `FacebookPixel.tsx` (pixel ID)
5. **Images**: `/public/images/` (logos, before/after gallery)
