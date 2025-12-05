'use client'

import { useEffect, useRef } from 'react'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <div ref={ref} className={`opacity-0 transition-opacity duration-1000 ${className}`}>
      {children}
    </div>
  )
}

export default AnimatedSection

