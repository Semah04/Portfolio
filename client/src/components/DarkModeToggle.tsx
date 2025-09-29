'use client'

import { useDarkMode } from "@/app/contexts/DarkModeContext"



type Size = 'sm' | 'md' | 'lg'

interface DarkModeToggleProps {
  className?: string
  size?: Size
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ 
  className = '', 
  size = 'md' 
}) => {
  const { darkMode, toggleDarkMode, isLoaded } = useDarkMode()

  const sizes: Record<Size, string> = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  }

  const buttonSizes: Record<Size, string> = {
    sm: 'p-2',
    md: 'p-2.5',
    lg: 'p-3'
  }

  if (!isLoaded) {
    return (
      <div className={`${buttonSizes[size]} rounded-lg bg-gray-200 dark:bg-gray-700 animate-pulse ${className}`}>
        <div className={`${sizes[size]} bg-gray-300 dark:bg-gray-600 rounded`}></div>
      </div>
    )
  }

  return (
    <button
      onClick={toggleDarkMode}
      className={`
        ${buttonSizes[size]} 
        bg-gray-100 hover:bg-gray-200 
        dark:bg-gray-800 dark:hover:bg-gray-700 
        text-gray-900 dark:text-gray-100 
        rounded-lg transition-all duration-200 
        border border-gray-200 dark:border-gray-700
        hover:scale-105 active:scale-95
        ${className}
      `}
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? (
        <svg 
          className={`${sizes[size]} transition-transform duration-200`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" 
          />
        </svg>
      ) : (
        <svg 
          className={`${sizes[size]} transition-transform duration-200`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" 
          />
        </svg>
      )}
    </button>
  )
}

export default DarkModeToggle