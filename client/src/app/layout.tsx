import Header from '../components/Header'
import Footer from '../components/Footer'
import './globals.css'
import { DarkModeProvider } from './contexts/DarkModeContext'

export const metadata = {
  title: 'Naski Semah - Full Stack Developer',
  description: 'Portfolio of Naski Semah, a passionate full-stack developer creating amazing web experiences.',
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