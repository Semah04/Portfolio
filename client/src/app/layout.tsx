import Header from '../components/Header'
import Footer from '../components/Footer'
import './globals.css'
import { DarkModeProvider } from './contexts/DarkModeContext'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Naski Semah - Fullstack Developer | Portfolio',
  description: 'Fullstack Developer with strong frontend expertise and 2+ years of experience building scalable, component-based applications using Angular, React, and TypeScript. Proven ability to design responsive user interfaces and integrate with backend services using Node.js and Java Spring Boot.',
  keywords: ['Fullstack Developer', 'React', 'Next.js', 'Angular', 'TypeScript', 'Node.js', 'Java Spring Boot', 'Portfolio', 'Software Engineer', 'Tunisia'],
  authors: [{ name: 'Naski Semah' }],
  creator: 'Naski Semah',
  openGraph: {
    title: 'Naski Semah - Fullstack Developer',
    description: 'Fullstack Developer with 2+ years of experience building scalable applications',
    url: 'https://naski-semah.netlify.app',
    siteName: 'Naski Semah Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Naski Semah - Fullstack Developer',
    description: 'Fullstack Developer with 2+ years of experience',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className="antialiased">
        <DarkModeProvider>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </DarkModeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Naski Semah",
              "jobTitle": "Fullstack Developer",
              "url": "https://naski-semah.netlify.app",
              "sameAs": [
                "https://github.com/Semah04",
                "https://www.linkedin.com/in/sameh-naski"
              ],
              "email": "naski.semah@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Ariana",
                "addressCountry": "Tunisia"
              }
            })
          }}
        />
      </body>
    </html>
  )
}