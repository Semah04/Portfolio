import Header from '../components/Header'
import Footer from '../components/Footer'
import './globals.css'
import { DarkModeProvider } from './contexts/DarkModeContext'

export const metadata = {
  title: 'Naski Semah - Fullstack Developer',
  description: 'Fullstack Developer with strong frontend expertise and 2+ years of experience building scalable, component-based applications using Angular, React, and TypeScript. Proven ability to design responsive user interfaces and integrate with backend services using Node.js and Java Spring Boot.',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <DarkModeProvider>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </DarkModeProvider>
      </body>
    </html>
  )
}