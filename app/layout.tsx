import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import FacebookPixel from '@/components/FacebookPixel'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Neogen Plasma Treatment | The Langford Skin Clinic - As Seen with Shirley Ballas',
  description: 'Experience revolutionary Neogen Nitrogen Plasma skin rejuvenation at The Langford Skin Clinic. As featured with Strictly\'s Shirley Ballas. Doctor-led clinic with 30 years expertise. Collagen stimulation, wrinkle reduction & skin regeneration.',
  keywords: 'Neogen plasma, nitrogen plasma treatment, skin rejuvenation, Shirley Ballas treatment, Langford Skin Clinic, collagen stimulation, wrinkle treatment, skin resurfacing, anti-aging treatment, doctor led aesthetics',
  authors: [{ name: 'The Langford Skin Clinic' }],
  creator: 'The Langford Skin Clinic',
  publisher: 'The Langford Skin Clinic',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://neogennottingham.co.uk'),
  alternates: {
    canonical: 'https://neogennottingham.co.uk',
  },
  openGraph: {
    title: 'Neogen Plasma Treatment | The Langford Skin Clinic - As Seen with Shirley Ballas',
    description: 'Revolutionary Neogen Nitrogen Plasma skin rejuvenation. As featured with Strictly\'s Shirley Ballas. Doctor-led clinic with 30 years expertise.',
    url: 'https://neogennottingham.co.uk',
    siteName: 'The Langford Skin Clinic - Neogen Plasma',
    type: 'website',
    locale: 'en_GB',
    images: [
      {
        url: 'https://cdn.prod.website-files.com/654790227e1c0eb91511c6cc/65c911c6992ced90028589bd_Neogen%20Skin%20accessory_.jpg',
        width: 1200,
        height: 630,
        alt: 'Neogen Plasma Treatment at The Langford Skin Clinic',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neogen Plasma Treatment | The Langford Skin Clinic',
    description: 'Revolutionary Neogen Nitrogen Plasma skin rejuvenation. As featured with Strictly\'s Shirley Ballas. Doctor-led clinic.',
    images: ['https://cdn.prod.website-files.com/654790227e1c0eb91511c6cc/65c911c6992ced90028589bd_Neogen%20Skin%20accessory_.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        <FacebookPixel />
        {children}
      </body>
    </html>
  )
}
